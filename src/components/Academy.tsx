import { motion } from "framer-motion";
import { BookOpen, Clock, Award, Users } from "lucide-react";

const Academy = () => {
  const benefits = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Industry-relevant courses designed by experts",
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Learn at your own pace with lifetime access",
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Earn recognized certificates upon completion",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a network of passionate learners",
    },
  ];

  const courses = [
    { name: "Web Development Bootcamp", duration: "12 weeks", color: "google-blue" },
    { name: "UI/UX Design Masterclass", duration: "8 weeks", color: "google-red" },
    { name: "AI & Machine Learning", duration: "10 weeks", color: "google-yellow" },
    { name: "Digital Marketing Pro", duration: "6 weeks", color: "google-green" },
    { name: "Mobile App Development", duration: "12 weeks", color: "google-blue" },
    { name: "Photography & Video Editing", duration: "8 weeks", color: "google-red" },
  ];

  return (
    <section id="academy" className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Arck Labs <span className="text-google-green">Academy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your career with world-class technical training and certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:border-google-green/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-google-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-google-green" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Popular Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-background border border-${course.color}/20 rounded-2xl p-6 hover:border-${course.color}/50 transition-all duration-300 group cursor-pointer`}
              >
                <div className={`w-full h-2 bg-${course.color}/20 rounded-full mb-4`}>
                  <div className={`h-full w-3/4 bg-${course.color} rounded-full group-hover:w-full transition-all duration-500`} />
                </div>
                <h4 className="text-lg font-semibold mb-2">{course.name}</h4>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-google-green hover:bg-google-green/90 text-white rounded-full text-lg transition-colors">
            Browse All Courses
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Academy;
