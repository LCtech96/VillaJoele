import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TerritorioPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-rustic-50 to-white">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-rustic-800 via-rustic-700 to-baroque-900 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Territorio: L'Etna e Oltre
            </h1>
            <p className="text-xl text-rustic-200 max-w-3xl mx-auto">
              Il vulcano come nume tutelare, la Sicilia autentica come scoperta
            </p>
          </div>
        </section>

        {/* L'Etna come Nume Tutelare */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                L'Etna: Nume Tutelare
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <p className="text-lg text-baroque-700 leading-relaxed">
                  L'<strong>Etna</strong>, il vulcano più alto d'Europa, domina il paesaggio di Nicolosi 
                  come un <strong>nume tutelare</strong>, una presenza maestosa che accompagna ogni 
                  momento del soggiorno a Villa Joele. Questo gigante di fuoco e pietra, patrimonio 
                  UNESCO, non è solo uno spettacolo naturale, ma l'anima stessa del territorio.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Il contrasto tra il <strong>nero lavico</strong> delle colate e il lusso raffinato 
                  degli interni di Villa Joele crea un dialogo poetico tra natura e arte. È un 
                  richiamo costante alla forza primordiale della terra siciliana, alla sua capacità 
                  di creare e distruggere, di rigenerarsi continuamente.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto/Video dell'Etna visto da Villa Joele]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nicolosi e il Territorio */}
        <section className="py-20 px-4 bg-rustic-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                Una Sicilia Autentica
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center text-baroque-500">
                    <p className="text-center">[Foto del territorio circostante e di Nicolosi]</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <p className="text-lg text-baroque-700 leading-relaxed">
                  <strong>Nicolosi</strong>, il borgo ai piedi dell'Etna, offre un'esperienza di 
                  Sicilia autentica, lontana dai flussi turistici di massa. Qui, la tradizione 
                  si mescola con la modernità, creando un ambiente unico dove il tempo sembra 
                  scorrere più lentamente.
                </p>
                
                <p className="text-lg text-baroque-700 leading-relaxed">
                  Villa Joele è il <strong>punto di partenza perfetto</strong> per chi cerca una 
                  Sicilia vera, fatta di sapori autentici, di paesaggi mozzafiato, di storia e 
                  cultura. Dalle escursioni sull'Etna alle visite ai borghi medievali, dalle 
                  degustazioni di vini locali alle passeggiate tra i vigneti, ogni esperienza 
                  diventa un viaggio nella Sicilia più autentica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Esperienze */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
                Esperienze da Vivere
              </h2>
              <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-elegant p-6">
                <h3 className="text-2xl font-serif text-baroque-900 mb-4">
                  Escursioni sull'Etna
                </h3>
                <p className="text-baroque-700 leading-relaxed">
                  Esplora i crateri, i sentieri naturalistici e le grotte laviche del vulcano più 
                  attivo d'Europa, accompagnato da guide esperte.
                </p>
              </div>

              <div className="card-elegant p-6">
                <h3 className="text-2xl font-serif text-baroque-900 mb-4">
                  Borghi e Storia
                </h3>
                <p className="text-baroque-700 leading-relaxed">
                  Scopri i borghi medievali della zona etnea, i castelli normanni e le chiese 
                  barocche che costellano il territorio.
                </p>
              </div>

              <div className="card-elegant p-6">
                <h3 className="text-2xl font-serif text-baroque-900 mb-4">
                  Enogastronomia
                </h3>
                <p className="text-baroque-700 leading-relaxed">
                  Degusta i vini dell'Etna DOC, i prodotti tipici siciliani e i piatti della 
                  tradizione in ristoranti e cantine locali.
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

