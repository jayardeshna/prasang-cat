import { Calendar, Users, Utensils, Briefcase, Palette, PartyPopper } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Utensils,
    title: "પ્રીમિયમ કેટરિંગ",
    description: "પરંપરાગત અને સમકાલીન વાનગીઓ સાથે ઉત્કૃષ્ટ મલ્ટી-ક્યુઝીન મેનુ, નિષ્ણાત રસોઈયાઓ દ્વારા શ્રેષ્ઠ સામગ્રી સાથે તાજી તૈયાર.",
  },
  {
    icon: Users,
    title: "લગ્ન કેટરિંગ",
    description: "કસ્ટમાઇઝ્ડ મેનુ, લાઇવ કાઉન્ટર્સ અને દોષરહિત સેવા સાથે સંપૂર્ણ લગ્ન કેટરિંગ સોલ્યુશન્સ તમારા ખાસ દિવસને અવિસ્મરણીય બનાવવા.",
  },
  {
    icon: Briefcase,
    title: "કોર્પોરેટ કેટરિંગ",
    description: "વ્યવસાયિક કાર્યક્રમો, કોન્ફરન્સ અને મીટિંગ્સ માટે કાર્યક્ષમ સેવા અને વૈવિધ્યસભર મેનુ વિકલ્પો સાથે વ્યાવસાયિક કેટરિંગ.",
  },
  {
    icon: Calendar,
    title: "ઇવેન્ટ મેનેજમેન્ટ",
    description: "યાદગાર ઉજવણીઓ માટે દરેક વિગતના નિર્દોષ અમલીકરણની ખાતરી કરતી સંપૂર્ણ ઇવેન્ટ પ્લાનિંગ અને સંકલન.",
  },
  {
    icon: Palette,
    title: "કસ્ટમ મેનુ",
    description: "તમારી પસંદગીઓ, આહાર આવશ્યકતાઓ અને સાંસ્કૃતિક પરંપરાઓને અનુરૂપ વ્યક્તિગત મેનુ નિર્માણ.",
  },
  {
    icon: PartyPopper,
    title: "સામાજિક સમારોહ",
    description: "જન્મદિવસ, સગાઈ, મુંજ અને અન્ય તમામ સામાજિક કાર્યક્રમો માટે સંપૂર્ણ કેટરિંગ અને ડેકોરેશન સેવાઓ.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider">અમારી સેવાઓ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
            વિશિષ્ટ સેવાઓ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            તમારી અનન્ય દ્રષ્ટિ અને જરૂરિયાતો અનુસાર તૈયાર કરેલ અસાધારણ અનુભવો
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up border-2 border-border/50 hover:border-accent/50 bg-card/50 backdrop-blur-sm overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <service.icon className="w-10 h-10 text-background relative z-10" />
                </div>
                <CardTitle className="text-2xl font-serif text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
                
                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/20 group-hover:border-accent/40 transition-colors duration-300 rounded-tl-3xl" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Decorative Text */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <span className="text-accent font-serif text-xl">તમારી દરેક જરૂરિયાત માટે સંપૂર્ણ સમાધાન</span>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;