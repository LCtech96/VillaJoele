export default function Footer() {
  return (
    <footer className="bg-baroque-900 text-rustic-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4 text-rustic-200">Villa Joele</h3>
            <p className="text-rustic-300 text-sm leading-relaxed">
              Affittacamere d'élite<br />
              Nicolosi (CT), Sicilia<br />
              Ai piedi dell'Etna
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rustic-200">Contatti</h4>
            <a
              href="https://wa.me/393923491109"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rustic-300 hover:text-rustic-100 transition-colors block mb-2"
            >
              WhatsApp: +39 392 349 1109
            </a>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-rustic-200">Esplora</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-rustic-300 hover:text-rustic-100 transition-colors">
                Home
              </a>
              <a href="/architettura" className="block text-rustic-300 hover:text-rustic-100 transition-colors">
                Architettura
              </a>
              <a href="/collezione" className="block text-rustic-300 hover:text-rustic-100 transition-colors">
                Collezione
              </a>
              <a href="/suite" className="block text-rustic-300 hover:text-rustic-100 transition-colors">
                Le Suite
              </a>
              <a href="/territorio" className="block text-rustic-300 hover:text-rustic-100 transition-colors">
                Territorio
              </a>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-rustic-800 pt-8 text-center">
          <p className="text-rustic-400 text-sm mb-2">
            © {new Date().getFullYear()} Villa Joele. Tutti i diritti riservati.
          </p>
          <p className="text-rustic-500 text-sm">
            Realizzato da{' '}
            <a
              href="https://facevoice.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rustic-300 hover:text-rustic-100 transition-colors font-semibold underline"
            >
              Facevoice.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

