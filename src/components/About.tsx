import { Award, Heart, Star, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "૫૦૦+", label: "સફળ કાર્યક્રમો" },
  { icon: Heart, value: "૧૦૦૦+", label: "સંતુષ્ટ મહેમાનો" },
  { icon: Award, value: "૧૫+", label: "વર્ષોનો અનુભવ" },
  { icon: Star, value: "૧૦૦+", label: "વિશેષ વાનગીઓ" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-background relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/40 mb-4">
            <span className="text-accent text-sm font-semibold tracking-wider">અમારી વાર્તા</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            ૨૦૦૯ થી શ્રેષ્ઠતાની સેવા
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up space-y-6">
            <p className="text-lg text-background/95 leading-relaxed">
              <span className="text-2xl font-serif text-accent">પ્રસંગ કેટરર્સ અને ઇવેન્ટ મેનેજમેન્ટ</span> તમારા શ્રેષ્ઠ 
              કેટરિંગ અને સંપૂર્ણ ઇવેન્ટ આયોજન માટેનો વિશ્વાસપાત્ર સાથી છે. ૧૫ વર્ષથી વધુના 
              રસોઈ અનુભવ સાથે, અમે સ્વાદિષ્ટ અનુભવો બનાવવાની કળામાં માહિર છીએ.
            </p>
            
            <div className="border-l-4 border-accent pl-6 py-2">
              <p className="text-lg text-background/95 leading-relaxed italic">
                અમારી નિષ્ણાત રસોઈયાઓ અને ઇવેન્ટ વ્યાવસાયિકોની ટીમ દરેક ઉજવણીમાં જુસ્સો, 
                નવીનતા અને સૂક્ષ્મ ધ્યાન લાવે છે.
              </p>
            </div>
            
            <p className="text-lg text-background/95 leading-relaxed">
              પરિવારના આત્મીય સમારોહથી લઈને ભવ્ય લગ્નો અને કોર્પોરેટ કાર્યક્રમો સુધી, 
              અમે ગર્વ અને ચોકસાઈ સાથે સેવા આપીએ છીએ. અમે માનીએ છીએ કે ઉત્તમ ભોજન 
              લોકોને એક સાથે લાવે છે, અને તમારી ઉજવણીઓને અધિકૃત સ્વાદ અને 
              દોષરહિત સેવા સાથે યાદગાર બનાવવા અમે અહીં છીએ.
            </p>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-1 bg-accent rounded-full" />
              <span className="text-accent font-serif text-xl">સ્વાદમાં પરંપરા, સેવામાં ઉત્કૃષ્ટતા</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-background/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in border-2 border-accent/30 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-5xl font-bold font-serif mb-2 text-accent">{stat.value}</p>
                <p className="text-background/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;