import { motion } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import coldCoffeeImg from "../assets/images/cold_coffee.png";
import cappuccinoImg from "../assets/images/cappuccino.png";
import masalaTeaImg from "../assets/images/masala_tea.png";
import espressoImg from "../assets/images/espresso.png";
import chaiLatteImg from "../assets/images/chai_latte.png";

const menuItems = [
  { id: 1, name: "Cold Coffee", price: "₹120", rating: 4.8, image: coldCoffeeImg },
  { id: 2, name: "Cappuccino", price: "₹129", rating: 4.9, image: cappuccinoImg },
  { id: 3, name: "Masala Tea", price: "₹80", rating: 4.7, image: masalaTeaImg },
  { id: 4, name: "Espresso", price: "₹160", rating: 4.6, image: espressoImg },
  { id: 5, name: "Chai Latte", price: "₹250", rating: 4.8, image: chaiLatteImg },
  { id: 6, name: "Iced Latte", price: "₹150", rating: 4.7, image: coldCoffeeImg }, // Reusing cold coffee since iced latte failed
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-coffee-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4"
          >
            Explore Our <span className="text-coffee-light">Menu</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-coffee-cream/60 max-w-xl mx-auto"
          >
            Handcrafted with love and the finest beans to ensure every cup is a masterpiece.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-coffee-medium/40 border border-white/5 rounded-3xl p-4 transition-all hover:bg-coffee-medium/60 hover:border-coffee-light/20"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-coffee-accent text-coffee-accent" />
                  <span className="text-xs font-bold text-coffee-cream">{item.rating}</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-display font-bold text-coffee-cream mb-1">
                    {item.name}
                  </h3>
                  <p className="text-coffee-light font-display font-bold text-2xl">
                    {item.price}
                  </p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-coffee-accent text-coffee-cream rounded-2xl hover:bg-coffee-light transition-colors shadow-lg"
                >
                  <ShoppingBag className="w-6 h-6" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-96 h-96 bg-coffee-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[500px] h-[500px] bg-coffee-light/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Menu;
