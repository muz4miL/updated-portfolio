"use client";
import React, { useState } from "react";
import { ArrowLeft, Mail, MapPin, Phone, Calendar, Send } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      // Show success message (you can add a toast here)
      alert("Message sent successfully! I'll get back to you soon.");
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "muzamil@example.com",
      description: "Send me an email anytime",
      link: "mailto:muzamil@example.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      description: "Open to remote opportunities",
      link: null,
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 300 123 4567",
      description: "Mon - Fri, 9am - 6pm",
      link: "tel:+923001234567",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      value: "Book a meeting",
      description: "Let's discuss your project",
      link: "https://calendly.com/muzamil",
    },
  ];

  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/#contact"
          className="group inline-flex items-center gap-2 text-slate hover:text-teal transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="font-mono text-sm uppercase tracking-widest">
            Back to Home
          </span>
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
            Got a project in mind? Let&apos;s discuss how we can work together
            to bring your ideas to life. I&apos;m always excited to hear about
            new opportunities and creative challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-slate leading-relaxed mb-8">
                I&apos;m currently available for freelance work and interesting
                project opportunities. Whether you need a website, web
                application, or just want to say hello, I&apos;d love to hear
                from you.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="group">
                  {method.link ? (
                    <a
                      href={method.link}
                      className="flex items-start gap-4 p-4 rounded-xl border border-slate/10 hover:border-teal/30 hover:bg-lightNavy/20 transition-all duration-300"
                    >
                      <method.icon
                        size={24}
                        className="text-teal mt-1 flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-heading text-white font-semibold mb-1">
                          {method.title}
                        </h3>
                        <p className="text-teal text-sm mb-1">{method.value}</p>
                        <p className="text-slate text-xs">
                          {method.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate/10">
                      <method.icon
                        size={24}
                        className="text-teal mt-1 flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-heading text-white font-semibold mb-1">
                          {method.title}
                        </h3>
                        <p className="text-teal text-sm mb-1">{method.value}</p>
                        <p className="text-slate text-xs">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate/20">
              <h3 className="font-mono text-teal text-sm uppercase tracking-widest mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-slate hover:text-teal transition-colors font-mono text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-lightNavy/20 rounded-2xl p-8 border border-slate/10">
              <h2 className="font-heading text-2xl text-white mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate text-sm font-mono mb-2 uppercase tracking-widest">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-slate/20 rounded-lg text-white placeholder-slate/50 focus:border-teal focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate text-sm font-mono mb-2 uppercase tracking-widest">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-navy border border-slate/20 rounded-lg text-white placeholder-slate/50 focus:border-teal focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate text-sm font-mono mb-2 uppercase tracking-widest">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-navy border border-slate/20 rounded-lg text-white placeholder-slate/50 focus:border-teal focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate text-sm font-mono mb-2 uppercase tracking-widest">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-navy border border-slate/20 rounded-lg text-white placeholder-slate/50 focus:border-teal focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal/10 border border-teal text-teal font-mono py-4 rounded-lg hover:bg-teal hover:text-navy transition-all duration-300 uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-teal border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate text-xs">
                  I typically respond within 24 hours. Looking forward to
                  connecting with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
