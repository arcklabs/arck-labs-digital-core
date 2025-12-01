import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Arck Labs transformed our digital presence completely. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      color: "google-blue",
    },
    {
      name: "Michael Chen",
      role: "Founder, Creative Studio",
      content: "The team's creativity and technical expertise are unmatched. They delivered beyond our expectations.",
      rating: 5,
      color: "google-red",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, FinTech Co",
      content: "Outstanding work on our mobile app. The UI/UX design is intuitive and beautiful.",
      rating: 5,
      color: "google-green",
    },
    {
      name: "David Okonkwo",
      role: "Academy Graduate",
      content: "The bootcamp changed my career trajectory. I'm now a professional web developer thanks to Arck Labs.",
      rating: 5,
      color: "google-yellow",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-google-blue">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Success stories from businesses and individuals we've empowered
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-card border border-${testimonial.color}/20 rounded-2xl p-8 hover:border-${testimonial.color}/50 transition-all duration-300`}
            >
              <Quote className={`absolute top-6 right-6 w-12 h-12 text-${testimonial.color}/10`} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 fill-${testimonial.color} text-${testimonial.color}`} />
                ))}
              </div>

              <p className="text-foreground text-lg mb-6 relative z-10">
                "{testimonial.content}"
              </p>

              <div className={`flex items-center gap-3 border-t border-${testimonial.color}/20 pt-4`}>
                <div className={`w-12 h-12 bg-${testimonial.color}/10 rounded-full flex items-center justify-center font-bold text-${testimonial.color}`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
