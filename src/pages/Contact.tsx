import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Camera, Building2, Users } from "lucide-react";

// Import office photos
import office1 from "@/assets/photos/image 1.jpg";
import office2 from "@/assets/photos/image 2.jpg";
import office3 from "@/assets/photos/image 3.jpg";

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
    "Web Design",
    "Wireframes",
    "Hi-Fi (High Fidelity) Design",
    "Web and App Prototypes",
    "WordPress Sites",
    "Logo Design",
    "Social Media Banners",
    "Product Mockups",
    "Advertisement Mockups",
    "Brand and Visual Design",
    "Website Development",
    "Graphic Design",
    "Animation",
    "UI/UX Consultation"
  ];

  const budgetOptions = [
    "₹10,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,50,000",
    "₹2,50,000 - ₹5,00,000",
    "₹5,00,000+",
    "Hourly Rates (₹500-1500/hr)"
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
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-20 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed px-4">
              Ready to transform your ideas into reality? Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </section>

        {/* Contact Info Cards */}
        <section className="container mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border-2 border-blue-200 md:border-primary"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 gradient-primary rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-xs md:text-sm">
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
            id="start-project"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-xl border border-blue-200 relative overflow-hidden backdrop-blur-sm">
              {/* Background decoration with theme colors */}
              <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-primary/8 via-primary/3 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

              <div className="text-center mb-8 relative z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3"
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
                  className="text-base md:text-lg text-muted-foreground"
                >
                  Fill out the form below and we'll get back to you within 24 hours.
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {/* Full Name */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg text-sm md:text-base"
                        placeholder="Enter your full name"
                      />
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
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg text-sm md:text-base"
                        placeholder="your.email@example.com"
                      />
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
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-primary/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg text-sm md:text-base"
                        placeholder="+1 (555) 123-4567"
                      />
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
                    <label htmlFor="businessName" className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-green-600 transition-colors duration-300">
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
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-green-500/30 text-foreground placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg text-sm md:text-base"
                        placeholder="Your company name"
                      />
                    </div>
                  </motion.div>

                  {/* Service Inquiry */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="serviceInquiry" className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-green-600 transition-colors duration-300">
                      Service Inquiry *
                    </label>
                    <div className="relative">
                      <select
                        id="serviceInquiry"
                        name="serviceInquiry"
                        required
                        value={formData.serviceInquiry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-green-500/30 text-foreground appearance-none cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg text-sm md:text-base"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-green-600/60 group-focus-within:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>

                  {/* Budget Range */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <label htmlFor="budgetRange" className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-green-600 transition-colors duration-300">
                      Budget Range *
                    </label>
                    <div className="relative">
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        required
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-green-500/30 text-foreground appearance-none cursor-pointer shadow-sm hover:shadow-md focus:shadow-lg text-sm md:text-base"
                      >
                        <option value="">Select your budget range</option>
                        {budgetOptions.map((budget, index) => (
                          <option key={index} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-green-600/60 group-focus-within:text-green-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Additional Information - Made it single column and shorter */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <label htmlFor="additionalInfo" className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-green-600 transition-colors duration-300">
                    Anything else we should know?
                  </label>
                  <div className="relative">
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 bg-gray-50/50 hover:bg-white hover:border-green-500/30 text-foreground placeholder-gray-400 resize-none shadow-sm hover:shadow-md focus:shadow-lg text-sm md:text-base"
                      placeholder="Tell us about your project goals, timeline, or any specific requirements..."
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center pt-4"
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="gradient-primary text-white shadow-button hover:shadow-glow transition-spring group px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl relative overflow-hidden transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Send Message
                      <svg className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1 group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                  </Button>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="text-xs md:text-sm text-muted-foreground mt-3 flex items-center justify-center gap-2"
                  >
                    <span className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-primary to-primary/70 rounded-full flex items-center justify-center">
                      <svg className="w-1.5 h-1.5 md:w-2 md:h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Location Section */}
        <section className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Location Header */}
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              >
                Visit Our{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Office
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                We'd love to meet you in person! Visit our creative studio where innovation meets design.
                Schedule an appointment or drop by during business hours.
              </motion.p>
            </div>

            {/* Map Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary relative overflow-hidden backdrop-blur-sm">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 via-primary/2 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  {/* Map iframe with enhanced styling */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-primary group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2414.9822337398414!2d74.85639813391701!3d12.867848182443554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b08f42d4aab%3A0x5531aeacffeee4f5!2sGigabyte%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1754458663819!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-96 md:h-[450px] transition-all duration-300 group-hover:scale-[1.01]"
                      title="Gigabyte Labs Office Location"
                    />
                  </div>

                  {/* Location Details Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-8 grid md:grid-cols-3 gap-6"
                  >
                    {/* Address */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-2xl p-6 border border-gray-200/50 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/70 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            Our Address
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            Gigabyte Labs Private Limited<br />
                            [Your complete address here]<br />
                            City, State, PIN Code
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Directions */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-2xl p-6 border border-gray-200/50 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/70 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            Get Directions
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            Easy access via public transport and ample parking available.
                          </p>
                          <a
                            href="https://maps.google.com/?q=Gigabyte Labs Private Limited"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-300"
                          >
                            Open in Maps
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Visit Info */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-2xl p-6 border border-gray-200/50 hover:border-primary/30 transition-colors duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/70 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            Visit Us
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            Mon - Fri: 9:00 AM - 6:00 PM<br />
                            Sat: 10:00 AM - 4:00 PM<br />
                            Sun: Closed
                          </p>
                          <p className="text-xs text-primary font-medium">
                            Appointments recommended
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Office Gallery Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                Our Workspace
              </h3>
              {/* Office Photos Grid - Portrait Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Office Image 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg bg-white p-1"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={office1}
                      alt="GigLabs Modern Office Reception"
                      className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Office Image 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg bg-white p-1"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={office2}
                      alt="GigLabs Team Workspace"
                      className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>

                {/* Office Image 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg bg-white p-1"
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={office3}
                      alt="GigLabs Recreation Area"
                      className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;