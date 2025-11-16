import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShoppingCart, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Menu Item interface
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: string;
}

// Menu items organized by category
const menuItems: MenuItem[] = [
  // Bread Category
  { id: "bread-1", name: "રોટલી (Roti)", description: "પરંપરાગત ઘઉંની રોટલી", category: "Bread" },
  { id: "bread-2", name: "પરાઠા (Paratha)", description: "મખ્ખણ વાળી પરાઠા", category: "Bread" },
  { id: "bread-3", name: "નાન (Naan)", description: "તંદૂરી નાન", category: "Bread" },
  { id: "bread-4", name: "પૂરી (Puri)", description: "તળેલી ફૂલી પૂરી", category: "Bread" },
  { id: "bread-5", name: "ભાખરી (Bhakri)", description: "બાજરીની ભાખરી", category: "Bread" },

  // Rice Category
  { id: "rice-1", name: "સાદા ચોખા (Plain Rice)", description: "બાફેલા સફેદ ચોખા", category: "Rice" },
  { id: "rice-2", name: "જીરા રાઇસ (Jeera Rice)", description: "જીરા અને મસાલા સાથે", category: "Rice" },
  { id: "rice-3", name: "પુલાવ (Pulav)", description: "શાકભાજી પુલાવ", category: "Rice" },
  { id: "rice-4", name: "બિર્યાની (Biryani)", description: "સુગંધિત બિર્યાની", category: "Rice" },

  // Dal (Lentils)
  { id: "dal-1", name: "તુવેર દાળ (Tuvar Dal)", description: "ગુજરાતી સ્ટાઇલ દાળ", category: "Dal" },
  { id: "dal-2", name: "મૂંગ દાળ (Moong Dal)", description: "પીળી મૂંગ દાળ", category: "Dal" },
  { id: "dal-3", name: "દાળ ફ્રાય (Dal Fry)", description: "તડકા વાળી દાળ", category: "Dal" },
  { id: "dal-4", name: "દાળ મખની (Dal Makhani)", description: "ક્રીમી દાળ મખની", category: "Dal" },

  // Vegetables
  { id: "veg-1", name: "આલૂ ગોભી (Aloo Gobi)", description: "બટાકા અને ફૂલગોભી", category: "Vegetables" },
  { id: "veg-2", name: "ભીંડા (Bhinda)", description: "મસાલેદાર ભીંડા", category: "Vegetables" },
  { id: "veg-3", name: "પનીર મસાલા (Paneer Masala)", description: "પનીર સાથે સમૃદ્ધ ગ્રેવી", category: "Vegetables" },
  { id: "veg-4", name: "રીંગણ (Ringan)", description: "વેંગણનું શાક", category: "Vegetables" },
  { id: "veg-5", name: "મિક્સ વેજ (Mix Veg)", description: "મિશ્ર શાકભાજી", category: "Vegetables" },

  // Snacks
  { id: "snack-1", name: "ધોકલા (Dhokla)", description: "નરમ ખમણ ધોકલા", category: "Snacks" },
  { id: "snack-2", name: "ફાફડા (Fafda)", description: "ક્રિસ્પી ફાફડા", category: "Snacks" },
  { id: "snack-3", name: "સમોસા (Samosa)", description: "તળેલા સમોસા", category: "Snacks" },
  { id: "snack-4", name: "કચોરી (Kachori)", description: "મસાલેદાર કચોરી", category: "Snacks" },
  { id: "snack-5", name: "પકોડા (Pakoda)", description: "મિક્સ વેજ પકોડા", category: "Snacks" },

  // Desserts
  { id: "dessert-1", name: "ગુલાબ જામુન (Gulab Jamun)", description: "ગરમ ગુલાબ જામુન", category: "Desserts" },
  { id: "dessert-2", name: "રસગુલ્લા (Rasgulla)", description: "તાજા રસગુલ્લા", category: "Desserts" },
  { id: "dessert-3", name: "જલેબી (Jalebi)", description: "તળેલી જલેબી", category: "Desserts" },
  { id: "dessert-4", name: "ખીર (Kheer)", description: "ચોખાની ખીર", category: "Desserts" },

  // Beverages
  { id: "bev-2", name: "લસ્સી (Lassi)", description: "મીઠી લસ્સી", category: "Beverages" },
  { id: "bev-5", name: "કેરીનો રસ (Keri No Ras)", description: "તાજો કેરીનો રસ", category: "Beverages" },
  { id: "bev-6", name: "લિક્વિડ મઠો (Liquid Matho)", description: "મીઠું દહીં, પીવાની સ્ટાઇલ", category: "Beverages" },
  { id: "bev-7", name: "શ્રીખંડ (Shrikhand Drink Style)", description: "થોડું પાતળું પીવાની સ્ટાઇલ શ્રીખંડ", category: "Beverages" },
  { id: "bev-8", name: "રબડી (Rabdi)", description: "ઘાડી મીઠી રબડી", category: "Beverages" },
  { id: "bev-9", name: "બાસુંદી (Basundi)", description: "મીઠી, ઘાડી દૂધની બાસુંદી", category: "Beverages" },
  { id: "bev-10", name: "મીઠો મઠો (Sweet Matho)", description: "દહીં + શક્કરની મીઠી પીણું", category: "Beverages" },
  { id: "bev-11", name: "છાસ સ્પેશ્યલ (Masala Buttermilk)", description: "મસાલેદાર છાશ", category: "Beverages" },
  { id: "bev-12", name: "મીઠું લસી (Sweet Lassi)", description: "પંજાબી સ્ટાઇલ મીઠી લસી", category: "Beverages" },
  { id: "bev-13", name: "કેરી લસી (Mango Lassi)", description: "કેરી અને દહીંનું પેય", category: "Beverages" },
  { id: "bev-14", name: "ફ્રૂટ મિલ્કશેક (Fruit Milkshake)", description: "કેરી/ચીકૂ/બનાના ઓપ્શન", category: "Beverages" },
];

// Get unique categories
const categories = Array.from(new Set(menuItems.map(item => item.category)));

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(categories));
  const [isRFQDialogOpen, setIsRFQDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    message: "",
  });
  const { toast } = useToast();

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const toggleItemSelection = (itemId: string) => {
    const newSelection = new Set(selectedItems);
    if (newSelection.has(itemId)) {
      newSelection.delete(itemId);
    } else {
      newSelection.add(itemId);
    }
    setSelectedItems(newSelection);
  };

  const handleRequestQuotation = () => {
    if (selectedItems.size === 0) {
      toast({
        title: "કૃપા કરીને આઇટમ પસંદ કરો",
        description: "કોટેશન માટે ઓછામાં ઓછી એક આઇટમ પસંદ કરો.",
        variant: "destructive",
      });
      return;
    }
    setIsRFQDialogOpen(true);
  };

  const handleFormSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.eventDate || !formData.guestCount) {
      toast({
        title: "Please fill all required fields",
        description: "Required fields are empty.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    const selectedItemsData = menuItems.filter((item) => selectedItems.has(item.id));

    // Group items by category for email
    const itemsByCategory = selectedItemsData.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item.name);
      return acc;
    }, {} as Record<string, string[]>);

    // Format items list for email
    let itemsList = '';
    Object.entries(itemsByCategory).forEach(([category, items]) => {
      itemsList += `\n${category}:\n`;
      items.forEach(item => {
        itemsList += `  • ${item}\n`;
      });
    });

    const emailParams = {
      to_email: 'jayardeshna.1011@gmail.com',
      customer_name: formData.name,
      customer_phone: formData.phone,
      event_date: formData.eventDate,
      guest_count: formData.guestCount,
      customer_message: formData.message || 'No additional message',
      selected_items: itemsList,
      total_items: selectedItems.size,
      submission_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      // EmailJS Configuration
      const EMAILJS_SERVICE_ID = 'service_ayqn1hj';
      const EMAILJS_TEMPLATE_ID = 'template_2wl83ff';
      const EMAILJS_PUBLIC_KEY = 'GMybU3v5Z0pIM1qxp';

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);

      toast({
        title: "Quotation request sent!",
        description: "We will contact you shortly.",
      });

      setFormData({ name: "", phone: "", eventDate: "", guestCount: "", message: "" });
      setSelectedItems(new Set());
      setIsRFQDialogOpen(false);
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to send request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedItemsData = menuItems.filter((item) => selectedItems.has(item.id));

  // Group items by category for the dialog
  const itemsByCategory = selectedItemsData.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-accent rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-4">
            <span className="text-primary text-sm font-semibold tracking-wider">Our Items</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">
            Design Your Meal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Choose your desired dishes from all categories.
          </p>
        </div>

        {/* Selected Items Summary - Bottom Fixed Bar */}
        {selectedItems.size > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t-2 border-accent/30 p-4 shadow-lg">
            <div className="container mx-auto px-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                  <span className="text-lg font-semibold text-primary">
                    {selectedItems.size} આઇટમ્સ પસંદ કરેલી
                  </span>
                </div>
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleRequestQuotation}
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  કોટેશન માટે વિનંતી કરો
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Menu Categories */}
        <div className="space-y-6 pb-24">
          {categories.map((category, index) => {
            const categoryItems = menuItems.filter(item => item.category === category);
            const isExpanded = expandedCategories.has(category);
            const selectedInCategory = categoryItems.filter(item => selectedItems.has(item.id)).length;

            return (
              <Card
                key={category}
                className="animate-fade-up border-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div
                  className="bg-muted/50 p-4 cursor-pointer hover:bg-muted/70 transition-colors"
                  onClick={() => toggleCategory(category)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-serif font-bold text-primary">
                        {category}
                      </h3>
                      {selectedInCategory > 0 && (
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                          {selectedInCategory} પસંદ કરેલ
                        </span>
                      )}
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </div>
                </div>

                {/* Category Items */}
                {isExpanded && (
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categoryItems.map((item) => {
                        const isSelected = selectedItems.has(item.id);
                        return (
                          <div
                            key={item.id}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
                              isSelected
                                ? "border-accent bg-accent/5 shadow-sm"
                                : "border-border hover:border-accent/50"
                            }`}
                            onClick={() => toggleItemSelection(item.id)}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1">
                                <h4 className="font-semibold text-primary mb-1">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {item.description}
                                </p>
                              </div>
                              <div
                                className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                  isSelected
                                    ? "bg-accent"
                                    : "bg-background border-2 border-border"
                                }`}
                              >
                                <Checkbox
                                  checked={isSelected}
                                  onCheckedChange={() => toggleItemSelection(item.id)}
                                  className="pointer-events-none"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>

        {/* Request Quotation Button (when no items selected) */}
        {selectedItems.size === 0 && (
          <div className="text-center mt-12 animate-fade-up">
            <p className="text-muted-foreground mb-6">
              કોટેશન માટે ઓછામાં ઓછી એક આઇટમ પસંદ કરો
            </p>
          </div>
        )}

        {/* RFQ Form Dialog */}
        <Dialog open={isRFQDialogOpen} onOpenChange={setIsRFQDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl font-serif text-primary">
                Request for Quotation
              </DialogTitle>
              <DialogDescription className="text-base">
                Please fill in the information below and we will contact you
              </DialogDescription>
            </DialogHeader>

            {/* Selected Items Summary in Dialog */}
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-primary mb-3">Selected Items:</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {Object.entries(itemsByCategory).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-sm text-accent mb-2">{category}</h4>
                    <div className="space-y-1 ml-3">
                      {items.map((item) => (
                        <div key={item.id} className="text-sm">
                          <span className="text-foreground">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <span className="font-bold text-primary">Total Items: {selectedItems.size}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Event Date *
                  </label>
                  <Input
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleFormChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Number of Guests *
                  </label>
                  <Input
                    name="guestCount"
                    type="number"
                    placeholder="How many guests?"
                    value={formData.guestCount}
                    onChange={handleFormChange}
                    required
                    min="1"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message (Optional)
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us more about your event..."
                  value={formData.message}
                  onChange={handleFormChange}
                  className="min-h-[120px] resize-none"
                />
              </div>

              <DialogFooter className="flex-col sm:flex-row gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsRFQDialogOpen(false)}
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleFormSubmit}
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit Quote Request'
                  )}
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Menu;