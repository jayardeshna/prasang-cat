import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "પ્રિયા અને રાહુલ શર્મા",
    role: "લગ્ન યુગલ",
    content: "પ્રસંગ કેટરર્સે અમારા લગ્નની ભોજન વ્યવસ્થાને ખરેખર શાનદાર બનાવી! ખોરાક સ્વાદિષ્ટ હતો, રજૂઆત સુંદર હતી અને દરેક મહેમાન પ્રભાવિત થયા. લાઇવ કાઉન્ટર્સ ખૂબ જ લોકપ્રિય રહ્યા!",
    rating: 5,
  },
  {
    name: "અમિત પટેલ",
    role: "કોર્પોરેટ ક્લાયન્ટ",
    content: "અમે અમારા તમામ કોર્પોરેટ કાર્યક્રમો માટે પ્રસંગનો ઉપયોગ કરી રહ્યા છીએ. ખોરાકની ગુણવત્તા સતત ઉત્તમ છે, સેવા વ્યાવસાયિક છે અને તેઓ હંમેશા સમયસર ડિલિવરી આપે છે. ખૂબ ભલામણ કરું છું!",
    rating: 5,
  },
  {
    name: "નેહા દેસાઈ",
    role: "ઇવેન્ટ ઓર્ગેનાઈઝર",
    content: "પ્રસંગ કેટરર્સની વાનગીઓની વિવિધતા અને અધિકૃત સ્વાદ ક્યારેય નિરાશ કરતા નથી. તેમની ટીમ પ્રતિભાવશીલ છે, મેનુ આયોજનમાં સર્જનાત્મક છે અને બધું સરળતાથી હેન્ડલ કરે છે!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-4">
            <span className="text-accent text-sm font-semibold tracking-wider">ગ્રાહક પ્રતિસાદ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
            અમારા ગ્રાહકો શું કહે છે
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            અમારા શબ્દો જ નહીં - અમે સેવા આપવાનો આનંદ મેળવ્યો છે તે લોકો પાસેથી સાંભળો
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up border-2 border-border/50 hover:border-accent/30 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-16 h-16 text-accent" />
              </div>

              <CardContent className="pt-8 pb-6 relative">
                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-accent text-accent animate-pulse"
                      style={{ animationDelay: `${i * 100}ms`, animationDuration: '2s' }}
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="relative mb-6">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent rounded-full" />
                  <p className="text-muted-foreground leading-relaxed italic pl-4 text-base">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t-2 border-accent/20 pt-4 mt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-lg">{testimonial.name}</p>
                      <p className="text-sm text-accent font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Text */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <span className="text-accent font-serif text-xl">તમારી સંતુષ્ટિ અમારી સફળતા</span>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;