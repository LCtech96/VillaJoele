export default function Intro() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rustic-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-baroque-900 mb-4">
            Benvenuti in un Capolavoro d'Architettura
          </h2>
          <div className="ornament-liberty w-32 h-1 bg-liberty-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-baroque-700 leading-relaxed">
              Villa Joele è molto più di un affittacamere: è una <strong>dimora storica d&apos;artista</strong> 
              che incarna l&apos;essenza dell&apos;architettura vernacolare siciliana. La struttura unica, 
              composta da <strong>due esagoni uniti</strong>, crea uno spazio armonioso che celebra 
              la perfezione geometrica e l&apos;arte artigianale.
            </p>
            
            <p className="text-lg text-baroque-700 leading-relaxed">
              Ogni dettaglio racconta una storia: dai mobili Barocchi agli elementi Art Nouveau e Liberty, 
              passando per pezzi unici come il mobile &ldquo;alla certosina&rdquo; in avorio ed ebano, fino ai letti 
              di fine &apos;800 decorati con muse e intarsi in madreperla.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-video bg-rustic-200 rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder per immagine/video */}
              <div className="w-full h-full flex items-center justify-center text-baroque-500">
                <p className="text-center">[Immagine/Video della struttura esagonale]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

