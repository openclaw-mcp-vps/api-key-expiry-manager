export default function Home() {
  const faqs = [
    {
      q: 'Which services does it support?',
      a: 'AWS, GitHub, Stripe, Twilio, SendGrid, and more. New integrations added monthly based on user requests.'
    },
    {
      q: 'How do renewal reminders work?',
      a: 'You set expiry dates manually or via auto-discovery. We send email and Slack alerts at 30, 14, and 3 days before expiry.'
    },
    {
      q: 'Is my key data stored securely?',
      a: 'We store only metadata (name, expiry date, service). We never store the actual key values — your secrets stay yours.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Let an API Key<br />
          <span className="text-[#58a6ff]">Expire Unexpectedly</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Track expiration dates, get email &amp; Slack alerts before keys expire, and follow step-by-step rotation guides for AWS, GitHub, Stripe, and more.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start for $25/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Daily expiry checks', 'Email & Slack alerts', 'Rotation guides', 'Auto-discovery', 'Audit logs', 'Team access'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$25</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to stay ahead of key expiry</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited API keys tracked',
              'Email + Slack notifications',
              'Step-by-step rotation guides',
              'Auto-discovery for AWS & GitHub',
              'Audit log & history',
              'Up to 5 team members',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} API Key Expiry Manager. All rights reserved.
      </footer>
    </main>
  )
}
