import SubHeader from './SubHeader'

const reasons = [
  { title: 'Proven Results', desc: 'Thousands of wallets recovered by our users worldwide.' },
  { title: 'One-Time Payment', desc: 'No subscriptions. Buy once, use forever.' },
  { title: 'Lifetime Updates', desc: 'Free updates for all future versions.' },
  { title: 'Money-Back Guarantee', desc: '30-day refund if not satisfied.' },
]

const WhyBuy = () => {
  return (
    <section id="why-buy" className="bg-[#090B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SubHeader title="Why You Should Buy" subtitle="Here is why WalletMiner is worth it." badge="WHY BUY" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border-2 border-red-500 bg-red-500/5 p-6">
              <h3 className="mb-2 text-lg font-semibold text-red-400">{r.title}</h3>
              <p className="text-sm leading-6 text-gray-300">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyBuy
