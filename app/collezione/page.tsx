import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function CollezionePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-rustic-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-rustic-800 via-rustic-700 to-baroque-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              La Collezione
            </h1>
            <p className="text-xl text-rustic-200 max-w-3xl mx-auto">
              Un viaggio nel tempo attraverso l&apos;arte artigianale siciliana
            </p>
          </div>
        </section>

        {/* L'Arte della Certosina */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                L'Arte della Certosina
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Tra i tesori di Villa Joele spicca un <strong>mobile &ldquo;alla certosina&rdquo; originale</strong>, 
                  un capolavoro di artigianato che celebra la pazienza e la maestria degli antichi maestri. 
                  Realizzato in <strong>avorio ed ebano</strong>, questo pezzo unico testimonia la preziosità 
                  dei materiali e la complessità della tecnica dell&apos;intarsio.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  La tecnica certosina, che prende il nome dai monaci certosini che la perfezionarono, 
                  richiede una precisione millimetrica e un'arte che si tramanda di generazione in generazione. 
                  Ogni tassello di avorio e ebano è posizionato con cura maniacale, creando motivi geometrici 
                  che riflettono la luce in modi sempre diversi.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto dettagliata del mobile alla certosina]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sogni in Madreperla */}
        <section className="py-20 px-4 bg-rustic-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                Sogni in Madreperla
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto dei letti decorati con madreperla]</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <p className="text-lg text-baroque-700 leading-relaxed">
                  I <strong>letti di fine &apos;800 e inizio &apos;900</strong> sono veri e propri capolavori 
                  dell&apos;artigianato siciliano. Realizzati in <strong>ferro e lamiera siciliana</strong>, 
                  questi letti sono decorati con <strong>muse dipinte</strong> e intarsi in 
                  <strong> madreperla</strong> nella laccatura, che catturano e riflettono la luce 
                  creando effetti cangianti e ipnotici.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Ogni dettaglio racconta la storia di un&apos;epoca in cui l&apos;arte decorativa raggiunse 
                  vette di raffinatezza. La madreperla, con i suoi riflessi iridescenti, trasforma 
                  questi letti in oggetti d&apos;arte che accompagnano i sogni dei nostri ospiti, 
                  creando un&apos;esperienza di puro comfort e bellezza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Il Viaggio degli Stili */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                Il Viaggio degli Stili
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Villa Joele celebra l&apos;<strong>eclettismo</strong> come forma d&apos;arte superiore. 
                  Negli ambienti convivono armoniosamente lo <strong>stile Barocco</strong>, con le 
                  sue curve sinuose e la sua opulenza decorativa, l&apos;<strong>Art Nouveau</strong>, 
                  con le sue linee organiche ispirate alla natura, e il <strong>Liberty</strong>, 
                  con la sua eleganza floreale e geometrica.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Questo incontro di stili non è casuale, ma un viaggio nel tempo e nell&apos;arte siciliana. 
                  Ogni pezzo racconta una storia diversa, creando un&apos;estetica eclettica che celebra 
                  la ricchezza culturale della Sicilia e la sua capacità di assorbire e reinterpretare 
                  le correnti artistiche europee.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto panoramica degli arredi eclettici]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

