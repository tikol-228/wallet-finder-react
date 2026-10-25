
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#090B10]/90 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="WalletMiner Logo"
            className="h-11 w-11 rounded-xl object-contain"
          />
          <span className="text-xl font-bold tracking-tight">
            Wallet<span className="text-[#B8FF5C]">Miner</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-400 transition-colors hover:text-[#B8FF5C]"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-gray-400 transition-colors hover:text-[#B8FF5C]"
          >
            How It Works
          </a>
          <a
            href="#documentation"
            className="text-sm text-gray-400 transition-colors hover:text-[#B8FF5C]"
          >
            Documentation
          </a>
          <a
            href="#chains"
            className="text-sm text-gray-400 transition-colors hover:text-[#B8FF5C]"
          >
            Supported Chains
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#app"
          className="inline-flex items-center gap-2 rounded-xl bg-[#B8FF5C] px-5 py-3 text-sm font-semibold text-[#10150B] transition-all hover:bg-[#caff85] hover:shadow-[0_0_25px_rgba(184,255,92,0.15)] active:scale-95"
        >
          Launch App
          <span aria-hidden="true">↗</span>
        </a>

      </div>
    </header>
  )
}

export default Header
