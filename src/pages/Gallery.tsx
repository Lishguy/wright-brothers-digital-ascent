import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-roof.jpg";
import aboutImg from "@/assets/about-roof.jpg";

const projects = [
  { img: heroImg, title: "Luxury Estate Roof", category: "Residential" },
  { img: gallery1, title: "Modern Home Installation", category: "Residential" },
  { img: gallery2, title: "Metal Roof Upgrade", category: "Residential" },
  { img: gallery3, title: "Storm Damage Repair", category: "Emergency" },
  { img: gallery4, title: "Commercial Flat Roof", category: "Commercial" },
  { img: aboutImg, title: "Shingle Replacement", category: "Repair" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Our Work</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-foreground">
              Project <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 font-body leading-relaxed">
              Browse our portfolio of completed roofing projects across the Greater Houston area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-elevated cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                    <h3 className="font-display text-lg font-semibold text-background mt-1">{project.title}</h3>
                  </div>
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
            Want Results Like These?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto font-body">
            Let's discuss your project. Free estimates, no obligations.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-gold shadow-gold font-body font-semibold px-10">
              Start Your Project <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
