import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-primary text-sm font-semibold tracking-[0.15em] uppercase">Contact Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 text-foreground">
              Get Your <span className="text-gradient-gold">Free Estimate</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 font-body leading-relaxed">
              Reach out today and we'll respond within hours. Open 24/7 for your convenience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Full Name</label>
                    <Input
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="font-body"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Phone</label>
                    <Input
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="font-body"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="font-body"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 font-body text-foreground"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="installation">Roof Installation</option>
                    <option value="repair">Roof Repair</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="storm">Storm Damage</option>
                    <option value="commercial">Commercial Roofing</option>
                    <option value="gutters">Gutter Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground font-body mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="font-body"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-gold shadow-gold font-body font-semibold">
                  <Send size={16} className="mr-2" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>

              <div className="space-y-6">
                <a href="tel:+19362097110" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-gold transition-all">
                    <Phone size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground font-body">(936) 209-7110</div>
                  </div>
                </a>

                <a href="mailto:info@wrightbrothersroofing.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-gold transition-all">
                    <Mail size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground font-body">info@wrightbrothersroofing.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground font-body">
                      5803 Gulf Fwy<br />
                      Houston, TX 77023<br />
                      South Gulf Plaza
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">Hours</div>
                    <div className="text-muted-foreground font-body">Open 24 Hours — 7 Days a Week</div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-elevated mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.8!2d-95.3!3d29.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQzJzEyLjAiTiA5NcKwMTgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wright Brothers Roofing Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
