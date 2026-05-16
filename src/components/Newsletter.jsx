import { useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Newsletter.module.css'

const EMAILJS_SERVICE_ID = 'service_nop1bn9'
const EMAILJS_TEMPLATE_ID = 'template_ircblvw'
const EMAILJS_PUBLIC_KEY = 'b3hv2vyozRDNnE5PQ'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMessage('That doesn’t look like an email. Try again — we promise it’s the last form field.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          subject: 'You’re on the verandah — welcome to Selasar.',
          email: trimmed,
          user_email: trimmed,
          to_email: trimmed,
          reply_to: trimmed,
          from_name: 'Selasar',
          subscribed_at: new Date().toISOString(),
          source: 'Selasar newsletter — verandah block'
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setEmail('')
    } catch (err) {
      setErrorMessage(
        'We could not deliver your subscription right now. Please try again in a moment.'
      )
      setStatus('error')
      // eslint-disable-next-line no-console
      console.error('[Selasar newsletter] EmailJS error:', err)
    }
  }

  return (
    <section id="newsletter" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Saturday morning · sent once a week
          </span>

          <h2 className={styles.title}>
            One letter from the
            <span className={styles.italic}> verandah</span>,
            <br />
            in your inbox every Saturday.
          </h2>

          <p className={styles.lede}>
            One long read, one tech note, one recipe. Sometimes a song. No tracking pixels,
            no <em>5 things you missed this week</em>, no apologies for what didn&rsquo;t make it.
          </p>

          <ul className={styles.bullets}>
            <li>
              <span className={styles.bulletMark} aria-hidden="true">✓</span>
              <span><strong>Free, forever.</strong> No ad-stuffed paid tier hiding behind it.</span>
            </li>
            <li>
              <span className={styles.bulletMark} aria-hidden="true">✓</span>
              <span><strong>Unsubscribe in one click.</strong> We will not chase you.</span>
            </li>
            <li>
              <span className={styles.bulletMark} aria-hidden="true">✓</span>
              <span><strong>11,000 quietly curious readers.</strong> 6 new yesterday.</span>
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <div className={styles.formCard}>
            <div className={styles.stampRow}>
              <span className={styles.stamp}>
                <span className={styles.stampLine}>SELASAR</span>
                <span className={styles.stampLine}>POS · 2026</span>
              </span>
              <span className={styles.formula}>letter no. 048</span>
            </div>

            <label className={styles.fieldLabel} htmlFor="newsletter-email">
              Your inbox
            </label>

            <div className={`${styles.fieldRow} ${status === 'error' ? styles.fieldError : ''}`}>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@somewhere-warm.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') {
                    setStatus('idle')
                    setErrorMessage('')
                  }
                }}
                disabled={status === 'submitting' || status === 'success'}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === 'submitting' || status === 'success'}
              >
                {status === 'submitting'
                  ? 'Posting…'
                  : status === 'success'
                  ? 'On its way'
                  : 'Send me the next one'}
                <span aria-hidden="true">{status === 'success' ? '✓' : '→'}</span>
              </button>
            </div>

            <p className={styles.formFoot} aria-live="polite">
              {status === 'error' ? (
                <span className={styles.errorText}>{errorMessage}</span>
              ) : status === 'success' ? (
                <span className={styles.successText}>
                  Posted. Check your inbox for a one-tap confirmation — and add us to your
                  contacts so we don’t end up in promotions.
                </span>
              ) : (
                <>
                  We use your email to send the letter. Nothing else.{' '}
                  <a href="#">Read our 80-word privacy note →</a>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
