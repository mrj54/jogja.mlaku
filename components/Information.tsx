export default function Information() {
  return (
    <section className="py-8 md:py-4 bg-gradient-to-b from-[#ffffff] to-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl text-gradient font-playfair mb-4 md:mb-6">
            Discover Yogyakarta
          </h2>
          <p className="text-[#9ebecb] max-w-2xl mx-auto text-sm md:text-base">
            Immerse yourself in the rich tapestry of Yogyakarta's culture, from ancient temples to vibrant art scenes
          </p>
        </div>
        
        {/* Menggunakan overflow-x-auto untuk scroll horizontal di mobile */}
        <div className="overflow-x-auto pb-4">
          {/* Container untuk cards dengan padding horizontal yang lebih kecil di mobile */}
          <div className="flex flex-row justify-start md:justify-center gap-4 md:gap-8 px-4 md:px-8 min-w-min">
            {/* Card dengan ukuran yang lebih kecil di mobile */}
            <div className="info-card group relative h-[300px] md:h-[350px] w-[280px] md:max-w-[350px] rounded-[20px] overflow-hidden transition-all duration-500 shadow-lg flex-shrink-0 card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <img
                src="/img/borobudur.jpg"
                alt="Destinasi wisata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-20 transform transition-transform duration-300 group-hover:-translate-y-4">
                <h3 className="text-white text-2xl md:text-3xl font-playfair mb-2 md:mb-4">Cultural Heritage</h3>
                <p className="text-gray-200 text-xs md:text-sm mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore ancient temples and historical landmarks that tell stories of Java's rich past
                </p>
                <button className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  Discover More →
                </button>
              </div>
            </div>
            
            <div className="info-card group relative h-[300px] md:h-[350px] w-[280px] md:max-w-[350px] rounded-[20px] overflow-hidden transition-all duration-500 shadow-lg flex-shrink-0 card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <img
                src="/img/frstival.jpeg"
                alt="Festival budaya"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-20 transform transition-transform duration-300 group-hover:-translate-y-4">
                <h3 className="text-white text-2xl md:text-3xl font-playfair mb-2 md:mb-4">Cultural Events</h3>
                <p className="text-gray-200 text-xs md:text-sm mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Experience traditional ceremonies and modern cultural festivals throughout the year
                </p>
                <button className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  View Events →
                </button>
              </div>
            </div>
            
            <div className="info-card group relative h-[300px] md:h-[350px] w-[280px] md:max-w-[350px] rounded-[20px] overflow-hidden transition-all duration-500 shadow-lg flex-shrink-0 card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <img
                src="/img/music.jpeg"
                alt="Event musik"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-20 transform transition-transform duration-300 group-hover:-translate-y-4">
                <h3 className="text-white text-2xl md:text-3xl font-playfair mb-2 md:mb-4">Event & Music</h3>
                <p className="text-gray-200 text-xs md:text-sm mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Dive into contemporary art exhibitions and musical performances
                </p>
                <button className="glass-effect px-4 md:px-6 py-2 md:py-3 rounded-full text-white text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                  Explore Arts →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}