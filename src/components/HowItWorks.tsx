import SubHeader from './SubHeader'

const steps = [
  { n: '01', title: 'Choose a Plan', desc: 'Pick the license that fits your needs and download WalletMiner.' },
  { n: '02', title: 'Configure Search', desc: 'Set target chains, address ranges and filters.' },
  { n: '03', title: 'Run AI Scan', desc: 'Our engine scans blockchains and flags wallets with balances.' },
  { n: '04', title: 'Claim & Export', desc: 'Review findings and export results securely.' },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#0B0E14] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SubHeader title="How It Works" subtitle="From download to discovery in four simple steps." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-3 text-3xl font-bold text-[#B8FF5C]">{s.n}</div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-6 text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
