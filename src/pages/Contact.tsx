import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    currentWebsite: "",
    serviceInquiry: "",
    budgetRange: "",
    additionalInfo: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Design Street", "Creative District, NY 10001"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@giglabs.com", "support@giglabs.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"]
    }
  ];

  const serviceOptions = [
    "Website Design",
    "Website Development", 
    "Graphic Design",
    "Animation"
  ];

  const budgetOptions = [
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Hourly Rates ($50-150/hr)"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*New Contact Form Submission*

*Full Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Business Name:* ${formData.businessName}
*Current Website:* ${formData.currentWebsite || 'Not provided'}
*Service Inquiry:* ${formData.serviceInquiry}
*Budget Range:* ${formData.budgetRange}
*Additional Information:* ${formData.additionalInfo || 'None provided'}
    `.trim();

    // Replace with your WhatsApp number (without + or spaces)
    const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your ideas into reality? Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden backdrop-blur-sm">
              {/* Background decoration with theme colors */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/15 via-primary/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
              <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-1000"></div>
              
              <div className="text-center mb-12 relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                >
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Start Your Project
                  </span>
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-lg text-muted-foreground"
                >
                  Fill out the form below and we'll get back to you within 24 hours.
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Phone Number */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="+1 (555) 123-4567"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Business Name */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="businessName" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                      Business Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="Your company name"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Current Website */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="currentWebsite" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                      Current Website <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        id="currentWebsite"
                        name="currentWebsite"
                        value={formData.currentWebsite}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg"
                        placeholder="https://www.yourwebsite.com"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>

                  {/* Service Inquiry */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="serviceInquiry" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                      Service Inquiry *
                    </label>
                    <div className="relative">
                      <select
                        id="serviceInquiry"
                        name="serviceInquiry"
                        required
                        value={formData.serviceInquiry}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground appearance-none cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-primary/60 group-focus-within:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Budget Range */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <label htmlFor="budgetRange" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                    Budget Range *
                  </label>
                  <div className="relative">
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      required
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground appearance-none cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg"
                    >
                      <option value="">Select your budget range</option>
                      {budgetOptions.map((budget, index) => (
                        <option key={index} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-primary/60 group-focus-within:text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Additional Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-foreground mb-3 group-focus-within:text-primary transition-colors duration-300">
                    Anything else we should know?
                  </label>
                  <div className="relative">
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={5}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 border-2 border-gray-200/80 rounded-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gradient-to-r from-gray-50/80 to-gray-50/40 hover:from-white hover:to-white/90 hover:border-primary/30 text-foreground placeholder-gray-400 resize-none shadow-sm hover:shadow-md focus:shadow-lg"
                      placeholder="Tell us about your project goals, timeline, or any specific requirements..."
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/8 to-primary/4 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="text-center pt-6"
                >
                  <Button 
                    type="submit"
                    size="lg" 
                    className="gradient-primary text-white shadow-button hover:shadow-glow transition-spring group px-16 py-5 text-lg font-semibold rounded-2xl relative overflow-hidden transform hover:scale-105 active:scale-95"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      Send Message
                      <svg className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2 group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </Button>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2"
                  >
                    <span className="inline-block w-4 h-4 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Your information is secure and will be sent directly to our team via WhatsApp
                  </motion.p>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;