import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface OrderForm {
  name: string;
  contact: string;
  email: string;
  services: string[];
  quantity: string;
  notes: string;
}

const Order: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    contact: '',
    email: '',
    services: [],
    quantity: '',
    notes: ''
  });

  const services = [
    { id: 'stationery', label: 'Premium Stationery Items', emoji: '✒️' },
    { id: 'xerox', label: 'Xerox & Photocopying', emoji: '🖨️' },
    { id: 'printing', label: 'Document Printing', emoji: '📄' },
    { id: 'binding', label: 'Binding & Lamination', emoji: '📚' },
    { id: 'custom', label: 'Custom Stationery Design', emoji: '🎨' },
    { id: 'bulk', label: 'Bulk Orders', emoji: '📦' }
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceId]
        : prev.services.filter(s => s !== serviceId)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.contact || formData.services.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, contact number, and select at least one service.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const selectedServices = formData.services.map(serviceId => 
      services.find(s => s.id === serviceId)?.label
    ).join(', ');

    const message = `🙏 Namaste! I would like to place an order:

👤 Name: ${formData.name}
📱 Contact: ${formData.contact}
${formData.email ? `📧 Email: ${formData.email}` : ''}

🛍️ Services Required:
${selectedServices}

${formData.quantity ? `📊 Quantity/Pages: ${formData.quantity}` : ''}
${formData.notes ? `📝 Additional Notes: ${formData.notes}` : ''}

Please let me know the pricing and availability. Thank you!`;

    const whatsappUrl = `https://wa.me/919588675809?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Order Sent!",
      description: "Your order has been sent via WhatsApp. We'll respond shortly!",
    });

    // Reset form
    setFormData({
      name: '',
      contact: '',
      email: '',
      services: [],
      quantity: '',
      notes: ''
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Place Your <span className="text-emerald">Order</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below and we'll contact you via WhatsApp with pricing and availability
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-prosperity border-border/50">
            <CardHeader className="bg-gradient-prosperity text-center rounded-t-lg">
              <CardTitle className="text-2xl font-playfair text-emerald-foreground flex items-center justify-center gap-2">
                📱 WhatsApp Order Form
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-foreground border-b border-saffron pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                        className="mt-1 focus:ring-saffron focus:border-saffron"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contact" className="text-foreground font-semibold">
                        Contact Number *
                      </Label>
                      <Input
                        id="contact"
                        type="tel"
                        value={formData.contact}
                        onChange={(e) => setFormData(prev => ({...prev, contact: e.target.value}))}
                        className="mt-1 focus:ring-saffron focus:border-saffron"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground font-semibold">
                      Email Address (Optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      className="mt-1 focus:ring-saffron focus:border-saffron"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Services Selection */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-foreground border-b border-emerald pb-2">
                    Select Services *
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors">
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                          className="border-emerald data-[state=checked]:bg-emerald"
                        />
                        <Label htmlFor={service.id} className="flex items-center gap-2 cursor-pointer text-foreground">
                          <span>{service.emoji}</span>
                          {service.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-foreground border-b border-royal-blue pb-2">
                    Additional Details
                  </h3>
                  
                  <div>
                    <Label htmlFor="quantity" className="text-foreground font-semibold">
                      Quantity/Pages (if applicable)
                    </Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => setFormData(prev => ({...prev, quantity: e.target.value}))}
                      className="mt-1 focus:ring-royal-blue focus:border-royal-blue"
                      placeholder="e.g., 100 pages, 5 notebooks, etc."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="notes" className="text-foreground font-semibold">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({...prev, notes: e.target.value}))}
                      className="mt-1 focus:ring-royal-blue focus:border-royal-blue"
                      placeholder="Any special requirements, colors, sizes, or other details..."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-divine hover:opacity-90 text-gold-foreground font-semibold text-lg py-6 shadow-heritage"
                  >
                    📱 Send Order via WhatsApp
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    By clicking submit, you'll be redirected to WhatsApp with your order details pre-filled.
                    We'll respond with pricing and availability within 24 hours.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* eBay Link Card */}
          <Card className="mt-8 shadow-royal border-border/50">
            <CardContent className="p-6 text-center">
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-4">
                🛒 Alternative: Browse Our eBay Store
              </h3>
              <p className="text-muted-foreground mb-4">
                For immediate online purchases, visit our eBay store for select items
              </p>
              <Button 
                asChild 
                variant="outline"
                className="border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-royal-blue-foreground"
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Visit eBay Store
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Order;