import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="font-display text-primary-foreground font-bold text-lg">W</span>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-foreground">Wright Brothers</span>
                <span className="block text-xs tracking-[0.2em] uppercase text-muted-foreground">Roofing</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Houston's most trusted roofing contractor. Premium craftsmanship, unmatched reliability, 24/7 service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "About", "Gallery", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Roof Installation</span>
              <span>Roof Repair</span>
              <span>Storm Damage</span>
              <span>Commercial Roofing</span>
              <span>Roof Inspection</span>
              <span>Gutter Services</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-foreground font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+19362097110" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" /> (936) 209-7110
              </a>
              <a href="mailto:info@wrightbrothersroofing.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> info@wrightbrothersroofing.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                <span>5803 Gulf Fwy, Houston, TX 77023<br />South Gulf Plaza</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" /> Open 24/7
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Wright Brothers Roofing. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Serving Greater Houston Area — Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
