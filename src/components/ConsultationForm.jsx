import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, AlertCircle, Loader2, Phone, Mail } from 'lucide-react';
import services from '../data/services.js';
import siteConfig, { hasPhone, hasEmail, telLink, mailLink } from '../data/siteConfig.js';
import { submitConsultation, NotConfiguredError } from '../lib/submitConsultation.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Accepts Indian mobiles (10 digits, optional +91/0) and general international numbers.
const PHONE_RE = /^\+?[0-9][0-9\s-]{8,15}[0-9]$/;

const BUDGETS = ['Under ₹5 lakh', '₹5–15 lakh', '₹15–50 lakh', '₹50 lakh – 1 crore', 'Above ₹1 crore', 'Not sure yet'];
const CONTACT_METHODS = ['Phone call', 'Email', 'WhatsApp'];

const empty = {
  phone: '',
  email: '',
  projectDescription: '',
  fullName: '',
  serviceCategory: '',
  projectLocation: '',
  budget: '',
  contactMethod: '',
  company: '', // honeypot: real users never see or fill this
};

function validate(v) {
  const e = {};
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.';
  else if (!PHONE_RE.test(v.phone.trim())) e.phone = 'Please enter a valid phone number (e.g. +91 98765 43210).';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address (e.g. name@example.com).';
  if (!v.projectDescription.trim()) e.projectDescription = 'Please describe your project.';
  else if (v.projectDescription.trim().length < 15)
    e.projectDescription = 'Please add a little more detail (at least 15 characters).';
  return e;
}

export default function ConsultationForm({ defaultService = '' }) {
  const [values, setValues] = useState(() => ({
    ...empty,
    serviceCategory: services.find((s) => s.slug === defaultService)?.title || '',
  }));
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | not-configured

  const onChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  };
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ phone: true, email: true, projectDescription: true });
    if (Object.keys(errs).length) {
      const first = ['phone', 'email', 'projectDescription'].find((k) => errs[k]);
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    if (values.company) {
      setStatus('success'); // bot: quietly ignore
      return;
    }
    setStatus('loading');
    try {
      const { company, ...payload } = values;
      await submitConsultation(payload);
      setStatus('success');
    } catch (err) {
      setStatus(err instanceof NotConfiguredError ? 'not-configured' : 'error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form-status is-success" role="status" aria-live="polite">
        <CheckCircle2 size={40} aria-hidden="true" />
        <h2>Thank you, your consultation request has been sent.</h2>
        <p>
          We have received your details{values.serviceCategory ? ` for ${values.serviceCategory}` : ''}. Here is
          what happens next:
        </p>
        <ol className="next-steps">
          <li>We review your project description.</li>
          <li>
            We contact you on <strong>{values.phone}</strong> or <strong>{values.email}</strong>
            {values.contactMethod ? ` (preferred: ${values.contactMethod.toLowerCase()})` : ''} to discuss it.
          </li>
          <li>If needed, we arrange a site visit before preparing a scope and quotation.</li>
        </ol>
        <button type="button" className="btn btn-outline" onClick={() => { setValues(empty); setTouched({}); setErrors({}); setStatus('idle'); }}>
          Submit another request
        </button>
      </div>
    );
  }

  const fieldErr = (name) => touched[name] && errors[name];

  return (
    <form className="consult-form" onSubmit={onSubmit} noValidate aria-describedby="cf-required-note">
      <p id="cf-required-note" className="form-note">
        Fields marked <span className="req" aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required. No account or login needed.
      </p>

      {(status === 'error' || status === 'not-configured') && (
        <div className="form-status is-error" role="alert">
          <AlertCircle size={22} aria-hidden="true" />
          <div>
            {status === 'not-configured' ? (
              <p>
                <strong>Online submission is not available yet.</strong> Your request has <em>not</em> been sent.
                Please contact us directly
                {hasPhone || hasEmail ? ' using the options below.' : '.'}
              </p>
            ) : (
              <p>
                <strong>Something went wrong and your request was not sent.</strong> Please try again in a moment
                {hasPhone || hasEmail ? ', or contact us directly.' : '.'}
              </p>
            )}
            {(hasPhone || hasEmail) && (
              <p className="form-status-actions">
                {hasPhone && <a href={telLink}><Phone size={16} aria-hidden="true" /> {siteConfig.phoneDisplay}</a>}
                {hasEmail && <a href={mailLink}><Mail size={16} aria-hidden="true" /> {siteConfig.email}</a>}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="form-grid">
        <Field id="phone" label="Phone Number" required error={fieldErr('phone')}>
          <input id="cf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91 98765 43210"
            value={values.phone} onChange={onChange} onBlur={onBlur} required
            aria-invalid={Boolean(fieldErr('phone'))} aria-describedby={fieldErr('phone') ? 'cf-phone-err' : undefined} />
        </Field>

        <Field id="email" label="Email Address" required error={fieldErr('email')}>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="name@example.com"
            value={values.email} onChange={onChange} onBlur={onBlur} required
            aria-invalid={Boolean(fieldErr('email'))} aria-describedby={fieldErr('email') ? 'cf-email-err' : undefined} />
        </Field>

        <Field id="projectDescription" label="Project Description" required error={fieldErr('projectDescription')} full>
          <textarea id="cf-projectDescription" name="projectDescription" rows={6}
            placeholder="Tell us about your property, the work you need, approximate area and your preferred timeline."
            value={values.projectDescription} onChange={onChange} onBlur={onBlur} required
            aria-invalid={Boolean(fieldErr('projectDescription'))}
            aria-describedby={fieldErr('projectDescription') ? 'cf-projectDescription-err' : undefined} />
        </Field>

        <Field id="fullName" label="Full Name">
          <input id="cf-fullName" name="fullName" type="text" autoComplete="name" value={values.fullName} onChange={onChange} />
        </Field>

        <Field id="serviceCategory" label="Service Category">
          <select id="cf-serviceCategory" name="serviceCategory" value={values.serviceCategory} onChange={onChange}>
            <option value="">Select a service</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </Field>

        <Field id="projectLocation" label="Project Location">
          <input id="cf-projectLocation" name="projectLocation" type="text" placeholder="e.g. Sector 57, Gurugram"
            value={values.projectLocation} onChange={onChange} />
        </Field>

        <Field id="budget" label="Approximate Budget">
          <select id="cf-budget" name="budget" value={values.budget} onChange={onChange}>
            <option value="">Select a range</option>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>

        <fieldset className="field field-full">
          <legend>Preferred Contact Method</legend>
          <div className="radio-row">
            {CONTACT_METHODS.map((m) => (
              <label key={m} className="radio">
                <input type="radio" name="contactMethod" value={m} checked={values.contactMethod === m} onChange={onChange} />
                <span>{m}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Honeypot (hidden from people and screen readers) */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" value={values.company} onChange={onChange} />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-lg btn-block-sm" disabled={status === 'loading'}>
        {status === 'loading' ? (<><Loader2 size={20} className="spin" aria-hidden="true" /> Sending…</>) : 'Submit Consultation Request'}
      </button>
      <p className="form-note small">
        By submitting, you agree that we may contact you about your enquiry. See our <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
    </form>
  );
}

function Field({ id, label, required, error, full, children }) {
  return (
    <div className={`field ${full ? 'field-full' : ''} ${error ? 'has-error' : ''}`}>
      <label htmlFor={`cf-${id}`}>
        {label} {required && <span className="req" aria-hidden="true">*</span>}
        {!required && <span className="optional">(optional)</span>}
      </label>
      {children}
      {error && <p id={`cf-${id}-err`} className="field-error">{error}</p>}
    </div>
  );
}
