import SubHeader from './SubHeader'

const plans = [
  { name: 'WalletMiner', price: '$30', period: 'one-time', features: ['All chains', 'Unlimited scans', 'AI wallet discovery', 'CSV/JSON export', 'Lifetime updates', 'Priority support'] },
]

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#0B0E14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SubHeader title="Simple, Transparent Pricing" subtitle="Buy once, own forever. No subscriptions." badge="PRICING" />
        <div className="mx-auto max-w-md">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-[#B8FF5C] bg-[#B8FF5C]/5 p-6">
              <h3 className="mb-1 text-xl font-semibold">{p.name}</h3>
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[#B8FF5C]">{p.price}</span>
                <span className="text-sm text-gray-400">{p.period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-gray-300">✓ {f}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a href="https://nowpayments.io" target="_blank" rel="noreferrer" className="block rounded-xl bg-[#B8FF5C] px-4 py-3 text-center text-sm font-semibold text-[#10150B]">Pay with Crypto</a>
                <a href="https://t.me/tikol_ceo" target="_blank" rel="noreferrer" className="block rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white">Pay via Telegram</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
