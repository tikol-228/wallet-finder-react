import SubHeader from './SubHeader'

const chains = ['Bitcoin', 'Ethereum', 'BSC', 'Polygon', 'Solana', 'Arbitrum', 'Optimism', 'Avalanche', 'Fantom', 'Base', 'Tron', 'Litecoin']

const Chains = () => {
  return (
    <section id="chains" className="bg-[#090B10] py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SubHeader title="Supported Chains" subtitle="Scan across the most popular blockchains." />
        <div className="flex flex-wrap justify-center gap-3">
          {chains.map((c) => (
            <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Chains
