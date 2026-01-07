import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ArchitetturaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-rustic-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-rustic-800 via-rustic-700 to-baroque-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Architettura e Anima
            </h1>
            <p className="text-xl text-rustic-200 max-w-3xl mx-auto">
              La geometria sacra dell&apos;esagono che si trasforma in dimora
            </p>
          </div>
        </section>

        {/* Architettura Vernacolare */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                Architettura Vernacolare
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Villa Joele incarna l&apos;essenza dell&apos;<strong>architettura vernacolare siciliana</strong>, 
                  dove la tradizione incontra l&apos;innovazione geometrica. La struttura è composta da 
                  <strong> due volumi esagonali che si fondono</strong> in un&apos;unica dimora armoniosa, 
                  creando uno spazio che celebra la perfezione della forma esagonale.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  L&apos;esagono, con la sua geometria perfetta, evoca immagini di nido d&apos;api, di armonia 
                  naturale, di equilibrio tra cielo e terra. Questa forma sacra si trasforma in 
                  architettura vivente, dove ogni angolo racconta una storia di maestria artigianale 
                  e di rispetto per la tradizione siciliana.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto/Video della struttura esagonale esterna]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Il Salone */}
        <section className="py-20 px-4 bg-rustic-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                Il Salone: Il Cuore Pulsante
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto/Video del salone su due livelli]</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Il <strong>grande salone su due livelli</strong> è il cuore pulsante di Villa Joele. 
                  Questo spazio monumentale è inondato dalla luce naturale che filtra attraverso 
                  <strong> quattro ampie finestre</strong>, creando un gioco di chiaroscuri che esalta 
                  ogni dettaglio degli arredi d&apos;antiquariato.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  La luce, elemento fondamentale dell&apos;architettura mediterranea, danza tra i mobili 
                  Barocchi e gli elementi Liberty, creando atmosfere che cambiano con il trascorrere 
                  delle ore. È qui che l&apos;arte incontra la vita quotidiana, dove ogni momento diventa 
                  un&apos;esperienza estetica.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

