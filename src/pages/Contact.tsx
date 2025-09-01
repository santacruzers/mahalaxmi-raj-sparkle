import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      title: "📍 Store Location",
      details: ["Shop No. S-27 W Shah Arcade", "Santa Cruz, Panjim 403005", "Goa, India"],
      color: "border-saffron"
    },
    {
      title: "📱 Phone Numbers",
      details: ["+91 7843031866", "+91 9588675809"],
      color: "border-emerald"
    },
    {
      title: "📧 Email Address",
      details: ["laxmixerox65@gmail.com"],
      color: "border-royal-blue"
    },
    {
      title: "🕒 Store Hours",
      details: ["Monday - Saturday: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
      color: "border-mustard"
    }
  ];

  const quickActions = [
    {
      title: "Call Us Now",
      description: "Speak directly with our team",
      action: "tel:+917843031866",
      buttonText: "📞 Call +91 7843031866",
      color: "bg-emerald hover:bg-emerald/90 text-emerald-foreground"
    },
    {
      title: "WhatsApp Chat",
      description: "Quick responses via WhatsApp",
      action: "https://wa.me/919588675809",
      buttonText: "💬 WhatsApp Chat",
      color: "bg-royal-blue hover:bg-royal-blue/90 text-royal-blue-foreground"
    },
    {
      title: "Send Email",
      description: "For detailed inquiries",
      action: "mailto:laxmixerox65@gmail.com",
      buttonText: "📧 Send Email",
      color: "bg-saffron hover:bg-saffron/90 text-saffron-foreground"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-royal-blue">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our store in the heart of Panjim or get in touch through any of our communication channels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
              📍 Store Information
            </h2>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className={`shadow-sm border-2 ${info.color} hover:shadow-prosperity transition-all duration-300`}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-playfair text-foreground">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground font-medium">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="shadow-heritage border-border/50">
              <CardHeader>
                <CardTitle className="text-lg font-playfair text-foreground flex items-center gap-2">
                  🗺️ Find Us on Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🏪</div>
                    <p className="text-muted-foreground font-semibold">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Shah Arcade, Santa Cruz, Panjim</p>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="mt-4 border-emerald text-emerald hover:bg-emerald hover:text-emerald-foreground"
                    >
                      <a 
                        href="https://maps.google.com/?q=Shah+Arcade+Santa+Cruz+Panjim" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
              💬 Get in Touch
            </h2>
            
            {quickActions.map((action, index) => (
              <Card key={index} className="shadow-sm border-border/50 hover:shadow-royal transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {action.description}
                  </p>
                  <Button asChild className={action.color}>
                    <a href={action.action} target={action.action.startsWith('http') ? '_blank' : '_self'}>
                      {action.buttonText}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Business Hours Highlight */}
            <Card className="bg-gradient-divine shadow-heritage">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="font-playfair text-xl font-semibold text-gold-foreground mb-3">
                  Visit Our Store
                </h3>
                <div className="space-y-2 text-gold-foreground/90">
                  <p className="font-semibold">Monday - Saturday</p>
                  <p className="text-lg">9:00 AM - 8:00 PM</p>
                  <p className="font-semibold mt-4">Sunday</p>
                  <p className="text-lg">10:00 AM - 6:00 PM</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gold-foreground/20">
                  <p className="text-sm text-gold-foreground/80">
                    Located in the bustling Shah Arcade, we're easily accessible from all parts of Panjim
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="shadow-prosperity border-emerald/20">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-playfair text-foreground">
                  🌟 Why Choose Mahalaxmi Stationery?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3">
                    <div className="text-2xl mb-2">⚡</div>
                    <p className="text-sm font-semibold text-emerald">Quick Service</p>
                  </div>
                  <div className="p-3">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-sm font-semibold text-emerald">Best Prices</p>
                  </div>
                  <div className="p-3">
                    <div className="text-2xl mb-2">✅</div>
                    <p className="text-sm font-semibold text-emerald">Quality Assured</p>
                  </div>
                  <div className="p-3">
                    <div className="text-2xl mb-2">🤝</div>
                    <p className="text-sm font-semibold text-emerald">Trusted Service</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-royal shadow-heritage max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-bold text-primary-foreground mb-4">
                Ready to Visit or Place an Order?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-6">
                We're here to serve all your stationery and document needs with traditional Rajasthani hospitality
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold"
                >
                  <a href="tel:+917843031866">📞 Call Now</a>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-emerald hover:bg-emerald/90 text-emerald-foreground font-semibold"
                >
                  <a href="https://wa.me/919588675809" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;