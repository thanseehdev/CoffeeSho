import { motion } from "framer-motion";
import { Zap, Heart, Brain, Droplets, Smile, ShieldCheck, Activity, Coffee } from "lucide-react";

const coffeeBenefits = [
  { icon: <Zap />, title: "Energy Boost", desc: "Coffee is rich in caffeine, which helps improve focus and energy levels." },
  { icon: <ShieldCheck />, title: "Antioxidants", desc: "It's one of the largest sources of antioxidants in the modern diet." },
  { icon: <Activity />, title: "Performance", desc: "Improves physical performance by increasing adrenaline levels." },
  { icon: <Brain />, title: "Brain Health", desc: "May help protect your brain against cognitive decline." },
];

const teaBenefits = [
  { icon: <Heart />, title: "Digestion", desc: "Certain herbal teas can help improve digestion and gut health." },
  { icon: <Smile />, title: "Stress Relief", desc: "Theanine in tea helps promote relaxation and reduces stress." },
  { icon: <ShieldCheck />, title: "Immunity", desc: "Packed with polyphenols that support a healthy immune system." },
  { icon: <Droplets />, title: "Hydration", desc: "Contrary to myths, tea contributes to your daily fluid intake." },
];

const BenefitCard = ({ icon, title, desc, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-effect p-6 rounded-3xl hover:border-coffee-light/40 transition-all group"
  >
    <div className="w-12 h-12 bg-coffee-accent/20 text-coffee-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-xl font-display font-bold text-coffee-cream mb-2">{title}</h4>
    <p className="text-coffee-cream/60 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const HealthBenefits = () => {
  return (
    <section id="benefits" className="py-24 bg-coffee-medium relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-coffee-accent rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Coffee className="text-coffee-cream w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4"
          >
            Fuel Your <span className="text-coffee-light">Body & Mind</span>
          </motion.h2>
          <p className="text-coffee-cream/60 max-w-2xl mx-auto text-lg">
            Beyond the incredible taste, our beverages are packed with natural benefits
            to keep you going through the day.
          </p>
        </div>

        <div className="space-y-20">
          {/* Coffee Section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-coffee-accent rounded-full" />
              Coffee Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coffeeBenefits.map((benefit, i) => (
                <BenefitCard key={benefit.title} {...benefit} index={i} />
              ))}
            </div>
          </div>

          {/* Tea Section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3 justify-end text-right">
              Tea Benefits
              <span className="w-8 h-1 bg-coffee-accent rounded-full" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teaBenefits.map((benefit, i) => (
                <BenefitCard key={benefit.title} {...benefit} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-coffee-accent/5 rounded-full blur-[120px]" />
    </section>
  );
};

export default HealthBenefits;
