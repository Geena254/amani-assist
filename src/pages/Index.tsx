
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, FileText, Share2, Presentation, User, ShieldCheck, Clock, Briefcase, Lock } from "lucide-react";
import Lottie from 'lottie-react';
import heroAnimation from '@/animations/Animation - orange.json';

const Index = () => {
  const services = [
    {
      icon: Calendar,
      title: "PA Services for Events & Projects",
      description: "Event coordination & support. Scheduling & administrative assistance. On-site or remote personal assistance."
    },
    {
      icon: FileText,
      title: "Data Entry & Management",
      description: "Accurate and efficient data entry. Organization and categorization of records.Basic research and documentation."
    },
    {
      icon: Share2,
      title: "Reporting & Documentation",
      description: "Conference & event rapporteur services. Note-taking & report compilation. Summary creation for key discussions."
    },
    {
      icon: Presentation,
      title: "Social Media Management",
      description: "Content creation. Community Management. Reporting and Analytics."
    }
  ];

  const testimonials = [
    {
      description: "Honestly, they made my life so much easier. Every errand was done perfectly, and I didn’t have to worry about a thing.",
      name: "Joseph Kitonga"
    },
    {
      description: "“10/10 would ask them again. Fast, reliable, and I barely had to explain anything",
      name: "Wairimu Sylvia"
    }
  ]

  const handleGetStarted = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleConsultation = () => {
    window.open('mailto:amani.assists@gmail.com?subject=Consultation Request', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="/amaniassist-logo.png"
              alt="Amani Assist Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-bold text-primary">Amani Assist</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#experience" className="text-foreground hover:text-primary transition-colors">Experience</a>
          </nav>

          {/* CTA Button */}
          <Button onClick={handleGetStarted}>Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Discreet, Reliable, Professional
                <span className="block text-primary mt-2">Support Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Get tailored support for your life and work. We handle the details so you can focus on what truly matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3" onClick={handleExploreServices}>
                  Explore Services
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3" onClick={handleContactUs}>
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right: Lottie Animation */}
            <div className="w-full max-w-md mx-auto">
              <Lottie animationData={heroAnimation} loop autoplay />
            </div>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          {/* Title and Description */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Amani Assist delivers reliable and efficient support for individuals and businesses,
              ensuring tasks are handled with professionalism and discretion. From Personal assistance services to data management and conference reporting, Amani Assist streamlines
              operations with precision and care. Services are flexible and customizable to meet each client's unique needs.
            </p>  
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-lg">
                To provide seamless, reliable, and personalized support, ensuring every task is handled with efficiency and
                attention to detail, so you feel valued and at ease.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To be the most trusted and versatile service provider, known for excellence, professionalism, and
                attention to detail.
              </p>
            </div>
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

      {/* Core Values Section */}
      <section id="about" className="py-20 px-4 bg-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              We are built on a foundation of trust, excellence, and intentional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Integrity */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-muted-foreground">
                We uphold honesty and transparency in all our dealings.
              </p>
            </div>

            {/* Reliability */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-muted-foreground">
                You can count on us to deliver every time, without fail.
              </p>
            </div>

            {/* Efficiency */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
              <p className="text-muted-foreground">
                We get things done promptly and with precision.
              </p>
            </div>

            {/* Professionalism */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
              <p className="text-muted-foreground">
                Every task is handled with expertise and excellence.
              </p>
            </div>

            {/* Client-Centered Service */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client-Centered</h3>
              <p className="text-muted-foreground">
                We tailor our services to each client’s unique needs and expectations.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Confidentiality</h3>
              <p className="text-muted-foreground">
                Your privacy and data are safeguarded at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet the Owner</h2>
            <p className="text-xl text-muted-foreground">
              The dedicated professional behind Amani Assist
            </p>
          </div>

          <Card className="mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                
                {/* Owner Bio Section */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                  {/* Profile Picture */}
                  <img
                    src="/owner.jpeg"
                    alt="Diana Ngina"
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
                  />

                  <h3 className="text-2xl font-bold mb-2 text-foreground">Diana Ngina</h3>
                  <p className="text-muted-foreground text-center md:text-left">
                    Project Management | Advocacy | Client Relationship Management | Sales and Marketing | Social Media Management
                  </p>
                </div>

                {/* Experience Section */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground text-center md:text-left">Experience</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li><strong>Data Entry & Documentation</strong> – Africa Cloud SpaceCloud School (Ongoing)</li>
                    <li><strong>PA Services</strong> – Elly Mathenge (MC Event Support)</li>
                    <li><strong>Assistant Rapporteur</strong> – Annual OSR Conference Kenya (Feb 5–6, 2025)</li>
                    <li><strong>Social Media Manager</strong> – m-tip (Fintech, Nov 2023 – Jun 2024)</li>
                  </ul>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from those who have experienced the Amani Assist difference.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonials, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">"{testimonials.description}"</p>
                  <p className="font-semibold text-foreground">- {testimonials.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <p className="text-center text-muted-foreground mt-8">
              NB: Personal Shopping & Errands: Due to the private nature of these tasks,
              specific experience details are not disclosed.
            </p>
          </div>
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

      {/* Contact + Footer Section */}
      <footer id="footer" className="bg-gray-200 text-gray-900 rounded-t-[60px] px-8 pt-20 pb-10 mt-16 mx-4 md:mx-10 lg:mx-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/amaniassist-logo.png"
                alt="Amani Assist Logo"
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-bold">Amani Assist</h3>
            </div>
            <p className="text-lg text-gray-700">
              Ready to experience professional, discreet support?
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Contact us today.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">amani.assists@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+2547-46-933-735</p>
            </div>
            <Button
              className="mt-4 w-full bg-white text-gray-900 hover:bg-gray-200"
              onClick={handleScheduleConsultation}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-10" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          {/* Left Side: Logo + Brand */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm text-gray-500">Amani Assist - For your support needs.</span>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-center md:text-right">
            © 2025 Amani Assist.
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Index;
