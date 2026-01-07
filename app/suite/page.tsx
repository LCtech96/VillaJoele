import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SuitePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-rustic-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-rustic-800 via-rustic-700 to-baroque-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Le Suite
            </h1>
            <p className="text-xl text-rustic-200 max-w-3xl mx-auto">
              Santuari di privacy e bellezza, dove ogni dettaglio è curato
            </p>
          </div>
        </section>

        {/* Descrizione Generale */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                Due Camere Matrimoniali d&apos;Élite
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="mb-12">
              <p className="text-lg text-baroque-700 leading-relaxed text-center max-w-4xl mx-auto">
                Villa Joele offre <strong>due ampie camere matrimoniali</strong>, ognuna concepita 
                come un santuario di privacy e bellezza. Ogni camera è un rifugio dove l&apos;arte incontra 
                il comfort, dove gli arredi d&apos;antiquariato dialogano con il design contemporaneo, 
                creando un&apos;esperienza di soggiorno unica e indimenticabile.
              </p>
            </div>
          </div>
        </section>

        {/* Camera 1 */}
        <section className="py-20 px-4 bg-rustic-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-serif text-baroque-900 mb-4">
                  Suite Principale
                </h3>
                <p className="text-lg text-baroque-700 leading-relaxed">
                  La prima suite accoglie gli ospiti in un ambiente raffinato, dove il letto 
                  decorato con madreperla diventa il fulcro della stanza. Gli arredi Barocchi 
                  e Liberty creano un'atmosfera di opulenza elegante, mentre la luce naturale 
                  filtra attraverso le finestre, illuminando ogni dettaglio decorativo.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Il <strong>bagno padronale privato</strong> è uno spazio di puro comfort e design, 
                  dove ogni elemento è curato nei minimi dettagli. Un rifugio personale dove 
                  rigenerarsi dopo una giornata di esplorazioni ai piedi dell'Etna.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto della prima camera matrimoniale]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-rustic-200 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-baroque-500 text-sm">
                  <p className="text-center">[Dettaglio del letto]</p>
                </div>
              </div>
              <div className="aspect-square bg-rustic-200 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-baroque-500 text-sm">
                  <p className="text-center">[Dettaglio degli arredi]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Camera 2 */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative order-2 md:order-1">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto della seconda camera matrimoniale]</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <h3 className="text-3xl font-serif text-baroque-900 mb-4">
                  Suite Secondaria
                </h3>
                <p className="text-lg text-baroque-700 leading-relaxed">
                  La seconda suite offre un'esperienza altrettanto raffinata, con un carattere 
                  distintivo che celebra l'eclettismo di Villa Joele. Gli elementi Art Nouveau 
                  dialogano con i pezzi Barocchi, creando un'atmosfera unica e coinvolgente.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Anche questa suite è dotata di <strong>bagno padronale privato</strong>, 
                  uno spazio di design dove il comfort incontra l&apos;estetica. Ogni dettaglio 
                  è pensato per offrire agli ospiti un&apos;esperienza di soggiorno indimenticabile, 
                  immersi nella bellezza e nella storia.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-rustic-200 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-baroque-500 text-sm">
                  <p className="text-center">[Dettaglio del bagno]</p>
                </div>
              </div>
              <div className="aspect-square bg-rustic-200 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-baroque-500 text-sm">
                  <p className="text-center">[Vista panoramica della camera]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-rustic-800 via-rustic-700 to-baroque-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Prenota la Tua Esperienza
            </h2>
            <p className="text-xl text-rustic-200 mb-8">
              Vieni a scrivere la tua storia tra le mura di Villa Joele
            </p>
            <a
              href="https://wa.me/393923491109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-rustic-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contattaci su WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

