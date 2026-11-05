import { hasPhone, hasEmail } from '../data/siteConfig.js';
import { isFormConfigured } from '../lib/submitConsultation.js';

/**
 * DEVELOPMENT-ONLY reminder banner. It lists setup steps that are still missing.
 * It never appears in the production build (`npm run build`).
 */
export default function ConfigNotice() {
  if (!import.meta.env.DEV) return null;
  const missing = [];
  if (!hasPhone) missing.push('phone number');
  if (!hasEmail) missing.push('email address');
  if (!isFormConfigured) missing.push('form endpoint (VITE_FORM_ENDPOINT)');
  if (!missing.length) return null;
  return (
    <div className="config-notice" role="note">
      <strong>Setup reminder (dev only):</strong> add your {missing.join(', ')} in{' '}
      <code>src/data/siteConfig.js</code> / <code>.env</code>. Buttons for missing details stay hidden until then.
    </div>
  );
}
