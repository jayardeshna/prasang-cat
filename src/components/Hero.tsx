import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-accent/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-32 h-32 border-2 border-accent/20 rotate-45 animate-spin-slow" style={{ animationDuration: '20s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
        <div className="inline-block mb-4 px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/40">
          <span className="text-accent text-sm font-semibold tracking-wider">આપનું સ્વાગત છે</span>
        </div>
        
        <h1 className="text-3xl md:text-6xl font-serif font-bold text-background mb-4 leading-tight">
          રસોઈનો રાજસી સ્વાદ
          <span className="block text-accent mt-3 text-2xl md:text-5xl drop-shadow-lg">ઉજવણીનો યાદગાર અનુભવ</span>
        </h1>
        
        <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
        
        <p className="text-lg md:text-2xl text-background/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          ઉચ્ચ ગુણવત્તાવાળી કેટરિંગ અને વ્યાવસાયિક ઇવેન્ટ મેનેજમેન્ટ સાથે<br className="hidden md:block" />
          તમારી દરેક ઉજવણીને બનાવો અવિસ્મરણીય
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="gold"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="text-lg group relative overflow-hidden"
          >
            <span className="relative z-10">આયોજન શરૂ કરો</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="premium"
            size="lg"
            onClick={() => scrollToSection("portfolio")}
            className="text-lg bg-background/15 border-2 border-background/60 text-background hover:bg-background/25 backdrop-blur-sm"
          >
            અમારું કાર્ય જુઓ
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-background/70 rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-background/80 text-xs mt-2 font-light tracking-widest">નીચે સ્ક્રોલ કરો</p>
      </div>
    </section>
  );
};

export default Hero;