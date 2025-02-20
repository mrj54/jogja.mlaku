"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, ArrowRight, Info } from "lucide-react";
import { useLanguage } from "./hooks/useLanguage";
import { translations } from "./i18n/translations";
import Information from "@/components/Information";
import Festivals from "@/components/Festivals";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center mb-8">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:"url(/img/hro.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl md:ml-20">
            <h1 className="text-6xl font-bold text-white mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <Information/>

      {/* Information Cards */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tourist Attractions</h3>
              <p className="text-muted-foreground mb-4">
                Explore iconic landmarks, temples, and natural wonders across Yogyakarta
              </p>
              <Button variant="ghost" className="w-full">
                View Destinations <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Festivals</h3>
              <p className="text-muted-foreground mb-4">
                Experience traditional ceremonies and vibrant cultural celebrations
              </p>
              <Button variant="ghost" className="w-full">
                View Festivals <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                <Info className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Events</h3>
              <p className="text-muted-foreground mb-4">
                Join contemporary events and modern cultural gatherings
              </p>
              <Button variant="ghost" className="w-full">
                View Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Destinations Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold tracking-tight mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
      {t.destinations.title}
    </h2>
    <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
      {t.destinations.subtitle}
    </p>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa",
          title: t.destinations.urban.title,
          description: t.destinations.urban.description
        },
        {
          image: "https://images.unsplash.com/photo-1604999333679-b86d54738315",
          title: t.destinations.nature.title,
          description: t.destinations.nature.description
        },
        {
          image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
          title: t.destinations.beach.title,
          description: t.destinations.beach.description
        },
        {
          image: "https://images.unsplash.com/photo-1583266999030-aec6f78e37d4",
          title: t.destinations.monuments.title,
          description: t.destinations.monuments.description
        },
        {
          image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
          title: t.destinations.camping.title,
          description: t.destinations.camping.description
        }
      ].map((category, index) => (
        <Card 
          key={index} 
          className="group relative bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              style={{ backgroundImage: `url(${category.image})` }}
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              {category.title}
            </h3>
            <div className="h-0 group-hover:h-20 overflow-hidden transition-all duration-300">
              <p className="text-muted-foreground">
                {category.description}
              </p>
            </div>
            <Button 
              className="w-full mt-4 bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 transition-colors" 
              variant="outline"
            >
              {t.button.letsGo}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

 <Festivals />

    

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Jogja.Melaku</h2>
          <p className="mb-8 text-white/90 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest events, festivals, and travel tips
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}