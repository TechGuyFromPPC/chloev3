import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-earth-dark/80 backdrop-blur-md border-b border-earth-card">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider text-earth-sand">
          @jarofhibiscus
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium text-earth-muted">
          <Link href="#map" className="hover:text-earth-sand transition-colors">Nomad Map</Link>
          <Link href="#series" className="hover:text-earth-sand transition-colors">Travel Series</Link>
          <Link href="#trips" className="hover:text-earth-sand transition-colors">Group Trips</Link>
          <Link href="/collabs" className="text-sm font-medium text-earth-sand/80 hover:text-earth-accent transition-colors">
  Collabs & Community
</Link>
<Link href="/about" className="text-sm font-medium text-earth-sand/80 hover:text-earth-accent transition-colors">
  About
</Link>
          <a 
            href="https://instagram.com/jarofhibiscus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-earth-sand text-earth-dark hover:bg-earth-accent transition-colors"
          >
            Instagram
          </a>
        </nav>
      </div>
    </header>
  );
}