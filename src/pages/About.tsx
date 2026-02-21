import { motion } from 'framer-motion';
import { Award, Target, Heart, Rocket } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import teamImage from '@/assets/about-team.jpg';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in every project we undertake.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering cutting-edge solutions that push the boundaries of possibility.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical business practices.',
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'Fostering continuous improvement and evolution for our clients and team.',
    },
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2020', title: '100+ Clients', description: 'Reached a major milestone in client satisfaction' },
    { year: '2022', title: 'Global Expansion', description: 'Opened offices across three continents' },
    { year: '2024', title: 'Industry Leader', description: 'Recognized as a top innovator in tech solutions' },
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
                About <span className="text-gradient">Northex</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
                We're a team of passionate innovators dedicated to transforming businesses through technology and
                creative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-3xl overflow-hidden"
            >
              <img
                src={teamImage}
                alt="Northex team collaborating"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Northex, we believe technology should empower, not complicate. Our mission is to deliver
                  innovative solutions that simplify complex challenges and drive meaningful results for businesses of
                  all sizes.
                </p>
                <p className="text-lg text-muted-foreground">
                  We combine deep technical expertise with creative thinking to build products that not only meet today's
                  needs but anticipate tomorrow's opportunities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8 sm:p-12 rounded-3xl"
              >
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  To be the world's most trusted technology partner, recognized for innovation, excellence, and the
                  positive impact we create for our clients and communities.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient">500+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="h-16 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient">98%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="h-16 w-px bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Values</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every decision we make.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 hover-lift text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                    <value.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Key milestones that shaped our growth and success story.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden lg:block" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="glass-card p-6 sm:p-8 hover-lift inline-block w-full lg:w-auto">
                        <div className="text-3xl font-bold text-gradient mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="hidden lg:block w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 relative z-10" />

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
