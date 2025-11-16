import portfolioWedding from "@/assets/portfolio-wedding.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioCatering from "@/assets/portfolio-catering.jpg";
import portfolioBranding from "@/assets/portfolio-branding.jpg";
import foodBuffet from "@/assets/food-buffet.jpg";
import foodAppetizers from "@/assets/food-appetizers.jpg";
import foodDesserts from "@/assets/food-desserts.jpg";
import foodLiveCooking from "@/assets/food-live-cooking.jpg";

const portfolioItems = [
  {
    image: foodBuffet,
    title: "Grand Wedding Buffet",
    category: "Wedding Catering",
  },
  {
    image: foodAppetizers,
    title: "Gourmet Appetizers",
    category: "Premium Dishes",
  },
  {
    image: foodDesserts,
    title: "Traditional Desserts",
    category: "Sweets & Mithai",
  },
  {
    image: foodLiveCooking,
    title: "Live Cooking Stations",
    category: "Interactive Catering",
  },
  {
    image: portfolioWedding,
    title: "Elegant Wedding Setup",
    category: "Wedding Events",
  },
  {
    image: portfolioCorporate,
    title: "Corporate Conference",
    category: "Corporate Events",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Our Culinary Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A taste of our exquisite dishes and memorable events
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-gold transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-semibold text-accent mb-2">{item.category}</p>
                  <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
