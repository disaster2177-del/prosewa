/**
 * ============================================================
 *  CONSULTATION FORM SUBMISSION: integration point
 * ============================================================
 *
 * The form calls submitConsultation(data). It sends the data as JSON
 * to the URL set in the VITE_FORM_ENDPOINT environment variable.
 *
 * Option A: Formspree (no backend needed)
 *   1. Create a free form at https://formspree.io and copy its endpoint,
 *      e.g. https://formspree.io/f/abcdwxyz
 *   2. Create a `.env` file in the project root containing:
 *        VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz
 *   3. Rebuild / restart `npm run dev`. Submissions arrive in your email.
 *   (Getform, Basin and similar providers work the same way.)
 *
 * Option B: Your own backend / API
 *   Point VITE_FORM_ENDPOINT at your endpoint (e.g. https://api.yourdomain.com/consultations).
 *   It should accept a JSON POST, VALIDATE the required fields again on the
 *   server (phone, email, projectDescription), and return a 2xx status on success.
 *
 * If VITE_FORM_ENDPOINT is not set, this function throws NotConfiguredError,
 * so the website never pretends a request was delivered when it was not.
 */

export class NotConfiguredError extends Error {
  constructor() {
    super('Form endpoint not configured');
    this.name = 'NotConfiguredError';
  }
}

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export const isFormConfigured = Boolean(ENDPOINT);

export async function submitConsultation(data) {
  if (!ENDPOINT) throw new NotConfiguredError();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...data,
        _subject: `New consultation request${data.serviceCategory ? `: ${data.serviceCategory}` : ''}`,
        submittedAt: new Date().toISOString(),
        page: typeof window !== 'undefined' ? window.location.href : '',
      }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return true;
  } finally {
    clearTimeout(timeout);
  }
}
