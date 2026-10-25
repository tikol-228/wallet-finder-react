import SubHeader from './SubHeader'

const items = [
  { title: 'AI Wallet Discovery', desc: 'Pattern recognition across millions of addresses to find wallets with forgotten balances.' },
  { title: 'Multi-Chain Support', desc: 'Scan Bitcoin, Ethereum, BSC, Polygon, Solana and 20+ other networks in one place.' },
  { title: 'Real-Time Balance Check', desc: 'Instantly verify balances and transaction history of discovered wallets.' },
  { title: 'Secure & Private', desc: 'Your queries stay local. We never store private keys or sensitive data.' },
  { title: 'Exportable Results', desc: 'Download findings as CSV/JSON and import into your wallet manager.' },
  { title: 'Priority Support', desc: 'Dedicated help for paid plans to get you started fast.' },
]

const Features = () => {
  return (
    <section id="features" className="bg-[#090B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SubHeader title="Everything You Need to Find Lost Crypto" subtitle="WalletMiner combines AI search with deep blockchain indexing so you never miss a forgotten wallet." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition hover:border-[#B8FF5C]/40">
              <h3 className="mb-2 text-lg font-semibold">{it.title}</h3>
              <p className="text-sm leading-6 text-gray-400">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
