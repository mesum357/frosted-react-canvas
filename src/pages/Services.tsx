import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code, Lightbulb, LineChart, Headphones, X } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import innovationImage from '@/assets/services-innovation.jpg';
import strategyImage from '@/assets/services-strategy.jpg';
import supportImage from '@/assets/services-support.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Lightbulb,
      title: 'Digital Innovation',
      shortDescription: 'Transform your business with cutting-edge digital solutions and technology.',
      fullDescription:
        'Our digital innovation services help you stay ahead of the curve with AI-powered solutions, cloud migration, and digital transformation strategies. We analyze your current infrastructure and design a roadmap for modernization that aligns with your business goals.',
      image: innovationImage,
      features: ['AI & Machine Learning', 'Cloud Architecture', 'IoT Solutions', 'Blockchain Integration'],
    },
    {
      icon: LineChart,
      title: 'Strategic Consulting',
      shortDescription: 'Data-driven insights and strategies to accelerate your business growth.',
      fullDescription:
        'Leverage our expertise in business analytics, process optimization, and strategic planning to make informed decisions. We provide comprehensive market analysis, competitive intelligence, and growth strategies tailored to your industry.',
      image: strategyImage,
      features: ['Market Analysis', 'Growth Strategy', 'Process Optimization', 'Performance Analytics'],
    },
    {
      icon: Code,
      title: 'Custom Development',
      shortDescription: 'Bespoke software solutions tailored to your unique business needs.',
      fullDescription:
        'From web applications to mobile apps and enterprise software, our development team builds scalable, secure, and high-performance solutions. We follow agile methodologies to ensure rapid delivery without compromising quality.',
      image: innovationImage,
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Integration'],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      shortDescription: 'Round-the-clock expert support to keep your operations running smoothly.',
      fullDescription:
        'Our dedicated support team is available 24/7 to address any issues, provide maintenance, and ensure optimal performance. We offer proactive monitoring, regular updates, and rapid response times to minimize downtime.',
      image: supportImage,
      features: ['24/7 Availability', 'Proactive Monitoring', 'Regular Maintenance', 'Priority Response'],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your
                business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 hover-lift cursor-pointer group"
                  onClick={() => setSelectedService(index)}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:animate-glow-pulse">
                    <service.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <div className="text-primary font-medium flex items-center">
                    Learn More
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="glass-card p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      {(() => {
                        const Icon = services[selectedService].icon;
                        return <Icon size={32} className="text-primary-foreground" />;
                      })()}
                    </div>
                    <h2 className="text-3xl font-bold">{services[selectedService].title}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 rounded-lg glass-panel hover:scale-110 transition-transform"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>

                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />

                <p className="text-lg text-muted-foreground mb-6">{services[selectedService].fullDescription}</p>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services[selectedService].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 glass-panel p-4 rounded-xl"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-secondary" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary w-full mt-8"
                  onClick={() => setSelectedService(null)}
                >
                  Get Started with {services[selectedService].title}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-12 sm:p-16 rounded-3xl text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Get <span className="text-gradient">Started</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business and achieve your goals.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-block"
              >
                Contact Us Today
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
