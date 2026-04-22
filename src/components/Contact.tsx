import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="location" className="py-24 bg-coffee-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Location Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
                Find Us <span className="text-coffee-light">Nearby</span>
              </h2>
              <p className="text-coffee-cream/60 text-lg max-w-md">
                We're located in the heart of the city. Come visit us for a unique
                coffee experience or reach out for inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coffee-accent/20 text-coffee-accent rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-cream mb-1">Our Address</h4>
                  <p className="text-coffee-cream/60 text-sm">123 Espresso Street, Caffeine District, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coffee-accent/20 text-coffee-accent rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-cream mb-1">Call Us</h4>
                  <p className="text-coffee-cream/60 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coffee-accent/20 text-coffee-accent rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-cream mb-1">Email Us</h4>
                  <p className="text-coffee-cream/60 text-sm">hello@thecoffeehouse.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-coffee-accent/20 text-coffee-accent rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-cream mb-1">Opening Hours</h4>
                  <p className="text-coffee-cream/60 text-sm">Mon - Sun: 7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Google Map Image Placeholder */}
            <div className="relative group overflow-hidden rounded-3xl border border-white/10 aspect-square sm:aspect-video">
              <img
                src="/map.png"
                alt="Location Map"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-coffee-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-coffee-light hover:text-white transition-colors"
                >
                  View on Google Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-coffee-medium/40 p-8 md:p-12 rounded-[2rem] border border-white/5 relative"
          >
            <h3 className="text-3xl font-display font-bold mb-8">Send an <span className="text-coffee-light">Enquiry</span></h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-coffee-cream/60 ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-coffee-dark/50 border border-white/10 rounded-2xl px-5 py-4 text-coffee-cream focus:outline-none focus:border-coffee-light transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-coffee-cream/60 ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-coffee-dark/50 border border-white/10 rounded-2xl px-5 py-4 text-coffee-cream focus:outline-none focus:border-coffee-light transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-coffee-cream/60 ml-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-coffee-dark/50 border border-white/10 rounded-2xl px-5 py-4 text-coffee-cream focus:outline-none focus:border-coffee-light transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-coffee-cream/60 ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-coffee-dark/50 border border-white/10 rounded-2xl px-5 py-4 text-coffee-cream focus:outline-none focus:border-coffee-light transition-colors resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-coffee-accent hover:bg-coffee-light text-coffee-cream py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl transition-all"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
