const Main = () => {
  return (
    <main className="relative overflow-hidden bg-[#090B10] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-[#B8FF5C]/20 bg-[#B8FF5C]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8FF5C]">
              WALLETMiner
            </span>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Find Forgotten <span className="text-[#B8FF5C]">Crypto Wallets</span> With AI
            </h1>

            <p className="mb-8 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              WalletMiner helps you discover lost or forgotten cryptocurrency wallets using
              advanced pattern recognition and AI-powered search across multiple blockchains.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#app"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B8FF5C] px-6 py-3 text-sm font-semibold text-[#10150B] transition-all hover:bg-[#caff85] hover:shadow-[0_0_25px_rgba(184,255,92,0.15)] active:scale-95"
              >
                Launch App
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-[#B8FF5C]/40 hover:text-[#B8FF5C]"
              >
                How It Works
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Proven Results', desc: 'Thousands of wallets recovered by our users worldwide.' },
              { title: 'One-Time Payment', desc: 'No subscriptions. Buy once, use forever.' },
              { title: '200$ per Week Guarantee', desc: 'We guarantee to find at least 200$ in forgotten wallets per week.' },
              { title: 'Money-Back Guarantee', desc: '30-day refund if not satisfied.' },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl border-2 border-[#B8FF5C] bg-[#B8FF5C]/5 p-5">
                <h3 className="mb-1 text-base font-semibold text-[#B8FF5C]">{r.title}</h3>
                <p className="text-sm leading-6 text-gray-300">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main