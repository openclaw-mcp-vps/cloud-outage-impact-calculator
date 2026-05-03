export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          DevOps Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Calculate Real Business Impact of{' '}
          <span className="text-[#58a6ff]">Cloud Outages</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop guessing what downtime costs. Map your cloud dependencies, track outages in real-time, and generate instant revenue and productivity loss reports your CFO will understand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $39/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '$5,600/min', label: 'Average cost of IT downtime' },
            { stat: '87%', label: 'Of companies lack real-time impact data' },
            { stat: '3x faster', label: 'Incident response with dependency maps' },
          ].map((item) => (
            <div key={item.stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-sm text-[#8b949e]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-[#161b22] border-y border-[#30363d] py-12">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Dependency Mapping', desc: 'Visualize every cloud service your revenue depends on — AWS, GCP, Azure, and third-party APIs.' },
            { title: 'Real-Time Outage Tracking', desc: 'Instant alerts when a dependency goes down, with live status pulled from provider status pages.' },
            { title: 'Impact Reports', desc: 'Auto-generate PDF reports showing revenue loss per minute, affected teams, and recovery cost.' },
          ].map((f) => (
            <div key={f.title}>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-4">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per workspace · Unlimited users</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited cloud dependency tracking',
              'Real-time outage monitoring',
              'Automated impact reports (PDF)',
              'Revenue & productivity loss calculator',
              'Slack & PagerDuty integrations',
              'Priority support',
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does the impact calculator work?',
              a: 'You enter your monthly revenue and team size during onboarding. When an outage is detected, we calculate per-minute revenue loss and productivity cost based on your metrics and the affected services.',
            },
            {
              q: 'Which cloud providers are supported?',
              a: 'AWS, Google Cloud, Azure, Cloudflare, Vercel, Stripe, Twilio, and 40+ other providers. You can also add custom services via webhook.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your dashboard with one click. You keep access until the end of your billing period with no questions asked.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Cloud Outage Impact Calculator · Built for DevOps teams
      </footer>
    </main>
  )
}
