import { Coffee, Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-coffee-accent rounded-xl">
                <Coffee className="w-6 h-6 text-coffee-cream" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight text-coffee-cream">
                THE COFFEE HOUSE
              </span>
            </div>
            <p className="text-coffee-cream/60 leading-relaxed max-w-xs">
              Brewing moments of joy, one cup at a time. Join our community of coffee lovers
              and experience the true essence of premium beans.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-coffee-medium rounded-full flex items-center justify-center text-coffee-cream/80 hover:bg-coffee-accent hover:text-coffee-cream transition-all border border-white/5"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-auto">
            <h4 className="text-lg font-bold text-coffee-cream mb-8 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Menu", "Benefits", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-coffee-cream/60 hover:text-coffee-light transition-colors flex items-center group">
                    {item}
                    <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:ml-auto">
            <h4 className="text-lg font-bold text-coffee-cream mb-8 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-coffee-cream/60">
              <li className="flex flex-col">
                <span className="text-xs font-bold text-coffee-light uppercase tracking-tighter mb-1">Email</span>
                hello@thecoffeehouse.com
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-coffee-light uppercase tracking-tighter mb-1">Phone</span>
                +1 (555) 123-4567
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold text-coffee-light uppercase tracking-tighter mb-1">Location</span>
                123 Espresso Street, NY
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:ml-auto">
            <h4 className="text-lg font-bold text-coffee-cream mb-8 uppercase tracking-widest">Newsletter</h4>
            <p className="text-coffee-cream/60 text-sm mb-6">Subscribe to get the latest updates and special offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-coffee-medium/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-coffee-cream focus:outline-none focus:border-coffee-light w-full"
              />
              <button className="bg-coffee-accent hover:bg-coffee-light text-coffee-cream p-3 rounded-xl transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-coffee-cream/40 text-sm">
            © {currentYear} The Coffee House. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-coffee-cream/40">
            <a href="#" className="hover:text-coffee-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coffee-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative background logo */}
      <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none">
        <Coffee className="w-[500px] h-[500px]" />
      </div>
    </footer>
  );
};

export default Footer;
