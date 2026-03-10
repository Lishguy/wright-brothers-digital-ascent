import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Shield, Clock, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-roof.jpg";

const stats = [
  { value: "500+", label: "Roofs Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Rate" },
];

const services = [
  {
    icon: Shield,
    title: "Roof Installation",
    desc: "Premium materials and expert installation for new construction and complete replacements.",
  },
  {
    icon: Clock,
    title: "Emergency Repairs",
    desc: "24/7 storm damage response. We're there when you need us most.",
  },
  {
    icon: Award,
    title: "Roof Inspections",
    desc: "Comprehensive inspections with detailed reports and honest recommendations.",
  },
];

const testimonials = [
  {
    name: "James M.",
    text: "Wright Brothers replaced our entire roof after the last Houston storm. Professional, fast, and the quality is outstanding.",
    rating: 5,
  },
  {
    name: "Sarah L.",
    text: "Best roofing company in Houston. They were transparent about costs and finished ahead of schedule.",
    rating: 5,
  },
  {
    name: "Robert K.",
    text: "Called them for an emergency leak at 2 AM. They were at our house within the hour. Incredible service.",
    rating: 5,
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury home with premium roofing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30 dark:from-background/95 dark:via-background/80 dark:to-background/40" />
        </div>

        <div className="relative container mx-auto px-4 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm border border-primary/30">
              Houston's #1 Roofing Contractor
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-background dark:text-foreground">
              Roofing <span className="text-gradient-gold">Excellence</span> Above All
            </h1>
            <p className="text-lg md:text-xl text-background/80 dark:text-foreground/70 mb-8 max-w-xl font-body leading-relaxed">
              Premium residential & commercial roofing services backed by decades of expertise. Open 24/7 for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold shadow-gold font-body font-semibold text-base px-8">
                  Get Free Estimate
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+19362097110">
                <Button size="lg" variant="outline" className="border-background/30 text-black hover:bg-background/10 dark:border-foreground/30 dark:text-foreground dark:hover:bg-foreground/10 font-body font-semibold text-base px-8">
                  <Phone size={18} className="mr-2" />
                  (936) 209-7110
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-8 px-6 text-center border-r border-border last:border-r-0"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1 font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">What We Do</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
              Our Core Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-elevated hover:shadow-gold transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all duration-500">
                  <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="font-body font-semibold">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-background border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground font-body leading-relaxed mb-6">"{t.text}"</p>
                <div className="font-display font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-sm">Houston, TX</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-background dark:text-foreground mb-6">
              Ready to Protect Your Home?
            </h2>
            <p className="text-background/70 dark:text-foreground/60 text-lg max-w-xl mx-auto mb-10 font-body">
              Get a free, no-obligation roof inspection and estimate. Available 24 hours a day, 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-gold shadow-gold font-body font-semibold text-base px-10">
                  Schedule Free Inspection
                </Button>
              </Link>
              <a href="tel:+19362097110">
                <Button size="lg" variant="outline" className="border-background/30 text-black hover:bg-background/10 dark:border-foreground/30 dark:text-foreground dark:hover:bg-foreground/10 font-body font-semibold text-base px-10">
                  <Phone size={18} className="mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
