import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Home, Building2, CloudRain, Search, Wrench, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Residential Roofing",
    desc: "Complete roof installation and replacement for homes of all sizes. We use only premium shingles, tiles, and metal roofing materials.",
    features: ["Asphalt Shingles", "Metal Roofing", "Tile Roofing", "Flat Roofs"],
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    desc: "Specialized solutions for commercial properties including TPO, EPDM, and built-up roofing systems.",
    features: ["TPO Membrane", "EPDM Systems", "Built-Up Roofing", "Metal Panels"],
  },
  {
    icon: Wrench,
    title: "Roof Repair",
    desc: "Fast, reliable repairs for leaks, missing shingles, flashing issues, and general wear. We fix it right the first time.",
    features: ["Leak Repair", "Shingle Replacement", "Flashing Repair", "Ventilation Fix"],
  },
  {
    icon: CloudRain,
    title: "Storm Damage Restoration",
    desc: "24/7 emergency response for storm, hail, and wind damage. We work directly with your insurance company.",
    features: ["Emergency Tarping", "Insurance Claims", "Hail Damage", "Wind Damage"],
  },
  {
    icon: Search,
    title: "Roof Inspections",
    desc: "Thorough inspections with detailed reports. Perfect for home buyers, sellers, and routine maintenance.",
    features: ["Pre-Purchase", "Maintenance Check", "Drone Inspection", "Detailed Reports"],
  },
  {
    icon: Shield,
    title: "Gutter & Siding",
    desc: "Complete gutter installation, repair, and cleaning. Plus premium siding solutions to complement your roof.",
    features: ["Seamless Gutters", "Gutter Guards", "Vinyl Siding", "Fascia & Soffit"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Our Services</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-foreground">
              Comprehensive Roofing <span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 font-body leading-relaxed">
              From installation to emergency repairs, Wright Brothers Roofing delivers premium craftsmanship for every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 shadow-elevated hover:shadow-gold transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-gradient-gold transition-all duration-500">
                  <service.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-5">{service.desc}</p>
                <div className="space-y-2">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      <span className="font-body">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need a Roofing Solution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto font-body">
            Contact us today for a free consultation and estimate. We're available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-gold shadow-gold font-body font-semibold px-8">
                Get Free Estimate <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+19362097110">
              <Button size="lg" variant="outline" className="font-body font-semibold px-8">
                <Phone size={16} className="mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
