import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "સંદેશ મોકલવામાં આવ્યો!",
      description: "સંપર્ક કરવા બદલ આભાર. અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider">સંપર્ક કરો</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
            ચાલો કંઈક અદ્ભુત બનાવીએ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            તમારી કલ્પનાને સાકાર કરવા તૈયાર છો? આજે જ અમારો સંપર્ક કરો
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-up space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300">
              <h3 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent rounded-full" />
                સંપર્ક માહિતી
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2 text-lg">ફોન નંબર</p>
                    <a href="tel:+919825540996" className="text-muted-foreground hover:text-accent transition-colors text-lg">
                      +91 9825540996
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2 text-lg">ઈમેલ</p>
                    <a href="mailto:info@prasangcaterers.com" className="text-muted-foreground hover:text-accent transition-colors text-lg break-all">
                      info@prasangcaterers.com
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <MapPin className="w-7 h-7 text-background" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-2 text-lg">સ્થાન</p>
                    <p className="text-muted-foreground text-lg">
                      સુરત, ગુજરાત
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="mt-8 pt-8 border-t-2 border-accent/20">
                <p className="text-accent font-serif text-center text-lg italic">
                  "તમારી દરેક ઉજવણી માટે અમારી સેવા"
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300">
              <h3 className="text-3xl font-serif font-bold text-primary mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent rounded-full" />
                સંદેશ મોકલો
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium text-primary mb-2">તમારું નામ *</label>
                  <Input
                    name="name"
                    placeholder="નામ દાખલ કરો"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-primary mb-2">ઈમેલ એડ્રેસ *</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-primary mb-2">ફોન નંબર</label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-primary mb-2">તમારો સંદેશ *</label>
                  <Textarea
                    name="message"
                    placeholder="અમને તમારા ઇવેન્ટ વિશે જણાવો..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] border-2 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="gold" 
                  size="lg" 
                  className="w-full group text-lg"
                >
                  સંદેશ મોકલો
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Text */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <span className="text-accent font-serif text-xl">અમે તમારી સાથે જોડાવવા આતુર છીએ</span>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;