import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Import hero images
import hero1 from '@/assets/images/hero-1.jpg';
import hero2 from '@/assets/images/hero-2.jpg';
import hero3 from '@/assets/images/hero-3.jpg';

const heroImages = [hero1, hero2, hero3];

const Home: React.FC = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: "Premium Stationery",
      description: "High-quality pens, notebooks, and office supplies",
      icon: "✒️",
      color: "bg-gradient-royal"
    },
    {
      title: "Xerox & Printing",
      description: "Fast, affordable copying and printing services",
      icon: "🖨️",
      color: "bg-gradient-prosperity"
    },
    {
      title: "Document Services",
      description: "Binding, lamination, and document preparation",
      icon: "📋",
      color: "bg-gradient-heritage"
    },
    {
      title: "Custom Orders",
      description: "Personalized stationery and bulk orders",
      icon: "🎨",
      color: "bg-gradient-divine"
    }
  ];

  const features = [
    "Quality Assurance",
    "Quick Service",
    "Competitive Prices",
    "Professional Staff",
    "Wide Selection",
    "Custom Solutions"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-1000">
          <img 
            src={heroImages[currentHero]} 
            alt={`Mahalaxmi Stationery Hero ${currentHero + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-saffron">Mahalaxmi</span><br />
              <span className="text-emerald">Stationery</span><br />
              <span className="text-royal-blue">& Xerox</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter">
              Your trusted partner for all stationery and document needs in the heart of Goa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-saffron hover:bg-saffron/90 text-saffron-foreground shadow-royal font-semibold"
              >
                <Link to="/order">Place Order Now</Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-emerald text-emerald hover:bg-emerald hover:text-emerald-foreground"
              >
                <Link to="/contact">Visit Our Store</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHero 
                  ? 'bg-gold scale-125' 
                  : 'bg-gold/40 hover:bg-gold/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
              Serving Goa with <span className="text-saffron">Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Located in the bustling Shah Arcade of Santa Cruz, Panjim, Mahalaxmi Stationery & Xerox 
              has been the go-to destination for quality stationery and professional document services. 
              We blend traditional Rajasthani values of hospitality with modern business solutions.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-4 rounded-lg bg-muted hover:bg-accent transition-colors duration-300"
                >
                  <span className="text-emerald font-semibold">✓ {feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-royal-blue">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From everyday stationery to professional document services, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-heritage transition-all duration-300 transform hover:-translate-y-2 border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-2xl mb-4 mx-auto group-hover:animate-glow`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-royal relative overflow-hidden">
        <div className="absolute inset-0 bg-saffron/10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Place Your Order?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the convenience of our WhatsApp ordering system or visit our store in person
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-gold-foreground shadow-prosperity font-semibold"
            >
              <Link to="/order">📱 Order via WhatsApp</Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              <Link to="/contact">🏪 Visit Our Store</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;