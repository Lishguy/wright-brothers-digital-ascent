import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Users, Award, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-roof.jpg";

const values = [
  { icon: Shield, title: "Quality First", desc: "We use only the finest materials from trusted manufacturers." },
  { icon: Users, title: "Customer Focus", desc: "Your satisfaction drives every decision we make." },
  { icon: Award, title: "Expert Team", desc: "Licensed, insured, and continuously trained professionals." },
  { icon: Clock, title: "Always Available", desc: "Open 24/7 — because emergencies don't wait." },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">About Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-foreground">
              Built on <span className="text-gradient-gold">Trust</span> & Craftsmanship
            </h1>
            <p className="text-muted-foreground text-lg mt-4 font-body leading-relaxed">
              For over 15 years, Wright Brothers Roofing has been Houston's go-to roofing contractor for quality, reliability, and honest service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={aboutImg}
                alt="Wright Brothers roofer at work"
                className="rounded-2xl shadow-elevated w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Wright Brothers Roofing was founded with a simple mission: to provide Houston homeowners and businesses with honest, high-quality roofing services at fair prices.
                </p>
                <p>
                  What started as a small family operation has grown into one of Houston's most respected roofing companies, completing over 500 projects across the Greater Houston area.
                </p>
                <p>
                  Located at 5803 Gulf Fwy in the South Gulf Plaza, we're proud to serve our local community with the dedication and expertise that every roof deserves.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {["Licensed & Fully Insured", "GAF Certified Contractor", "BBB A+ Rated", "Free Estimates & Inspections"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-primary shrink-0" />
                    <span className="text-foreground font-body font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
              Why Choose Wright Brothers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Work With the Best</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto font-body">
            Experience the Wright Brothers difference. Get started with a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-gold shadow-gold font-body font-semibold px-10">
              Contact Us <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
