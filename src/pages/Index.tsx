
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, FileText, Share2, Presentation, User, Target, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "Personal Errands & Shopping Assistance",
      description: "Let us handle your daily tasks and shopping needs so you can focus on what matters most. From grocery runs to appointment scheduling, we've got you covered."
    },
    {
      icon: Calendar,
      title: "PA Services for Events & Projects",
      description: "Professional coordination and management for your events and projects, ensuring seamless execution from start to finish with meticulous attention to detail."
    },
    {
      icon: FileText,
      title: "Data Entry & Management",
      description: "Accurate and efficient data management services to keep your information organized and accessible, handled with precision and confidentiality."
    },
    {
      icon: Presentation,
      title: "Conference & Event Reporting",
      description: "Comprehensive reporting and documentation services for conferences and events, capturing key insights and outcomes with professional thoroughness."
    },
    {
      icon: Share2,
      title: "Social Media Management & Reporting",
      description: "Strategic social media presence management and detailed reporting to enhance your brand and engage with your audience effectively."
    }
  ];

  const handleGetStarted = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleConsultation = () => {
    window.open('mailto:info@amaniassist.com?subject=Consultation Request', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 font-bold text-primary bg-primary rounded-full">A</div>
            <span className="text-2xl font-bold text-primary">Amani Assist</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button onClick={handleGetStarted}>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Reliable, Discreet, Professional
            <span className="block text-primary mt-2">Support Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            At Amani Assist, we specialize in providing reliable, discreet, and professional support for individuals and businesses. 
            We ensure every task is handled with precision, efficiency, and a personal touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" onClick={handleExploreServices}>
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3" onClick={handleContactUs}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission is simple: to make your life and business run smoother, so you can focus on what matters most. 
              Whether you need help managing errands, coordinating events, documenting conferences, handling data entry, or managing social media, 
              we're here to help you stay organized, prepared, and ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional support tailored to your unique needs, delivered with discretion and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Amani Assist?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              With a strong foundation built on integrity, reliability, professionalism, and client-centered service, 
              Amani Assist has supported diverse clients, from corporate conferences to private individuals, fintech startups, and public events.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discreet</h3>
              <p className="text-muted-foreground">
                Complete confidentiality and privacy in all our services and interactions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable</h3>
              <p className="text-muted-foreground">
                Consistent, dependable service delivery you can count on every time.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Presentation className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-muted-foreground">
                Expert service delivery with attention to detail and quality standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible</h3>
              <p className="text-muted-foreground">
                Adaptable solutions tailored to your unique needs and requirements.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We pride ourselves on being flexible, efficient, and attentive to detail. 
              Our diverse experience spans corporate conferences, private individuals, fintech startups, and public events, 
              ensuring we understand the unique challenges across different sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet the who handles all the work</h2>
            <p className="text-xl text-muted-foreground">
              The dedicated professional behind Amani Assist
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Diana Ngina</h3>
              <p className="text-muted-foreground mb-6">
                [Add owner bio, qualifications, and experience here. This section can be customized to highlight the owner's background, expertise, and passion for providing exceptional support services.]
              </p>
              <div className="text-sm text-muted-foreground">
                <p>Years of Experience: [Add years]</p>
                <p>Specialization: [Add specialization]</p>
                <p>Contact: info@amaniassist.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us handle the details while you focus on what matters most to you.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3" onClick={handleContactUs}>
            Contact Amani Assist Today
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to experience professional, discreet support? Contact us today.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="grid gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-muted-foreground mb-4">
                    Reach out to discuss your specific needs and how we can help.
                  </p>
                </div>
                
                <Separator />
                
                <div className="text-center space-y-2">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@amaniassist.com</p>
                </div>
                
                <div className="text-center space-y-2">
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
                
                <Button className="w-full mt-4" onClick={handleScheduleConsultation}>
                  Schedule a Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary/10 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary font-bold text-primary rounded-full">A</div>
              <span className="text-lg font-semibold text-primary">Amani Assist</span>
            </div>
            <p className="text-muted-foreground text-center md:text-right">
              © 2025 Amani Assist.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
