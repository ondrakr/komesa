import Link from 'next/link';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="w-full bg-white py-2 px-4 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-2 after:bg-gradient-to-r after:from-primary after:to-secondary">
      <div className="w-[min(1500px,100%)] mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/logo/RZ_logo_long-color.svg"
            alt="Radka Zemanová Logo"
            className="h-24 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-xl">
          <Link href="/skakaci-hrady" className="text-gray-700 hover:text-primary font-semibold">
            Skákací hrady
          </Link>
          <Link href="/reference" className="text-gray-700 hover:text-primary font-semibold">
            Reference
          </Link>
          <Link href="/nejcastejsi-dotazy" className="text-gray-700 hover:text-primary font-semibold">
            Nejčastější dotazy
          </Link>
          <Button href="/objednat">
            Objednat!
          </Button>
        </div>
        
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
} 