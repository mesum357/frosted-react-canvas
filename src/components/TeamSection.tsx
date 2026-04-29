import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

import farasatImg from '@/assets/team/farasat.jpeg';
import rizwanImg from '@/assets/team/rizwan.jpeg';
import raheelImg from '@/assets/team/raheel.jpeg';
import shahImg from '@/assets/team/shah.jpeg';
import mesumImg from '@/assets/team/Gemini_Generated_Image_eon7akeon7akeon7-Picsart-AiImageEnhancer.jpg';
import yasirImg from '@/assets/team/yasir.png';

const team = [
  {
    name: 'Farasat Ali',
    designation: 'Founder',
    image: farasatImg,
    linkedin: 'https://www.linkedin.com/in/web-developer-farasat-ali/',
  },
  {
    name: 'Rizwan Ali',
    designation: 'Co-founder',
    image: rizwanImg,
    linkedin: 'https://www.linkedin.com/in/web-developer-49j983/',
  },
  {
    name: 'Raheel Khan',
    designation: 'Project Manager',
    image: raheelImg,
    linkedin: 'https://www.linkedin.com/in/webdeveloperraheel-khan-141838265/',
  },
  {
    name: 'Syed Sajjad Hussain',
    designation: 'Finance Secretary',
    image: shahImg,
    linkedin: 'https://www.linkedin.com/in/webdevelopersyed-sajjad-hussain-94949a262/',
  },
  {
    name: 'Mesum Abbas',
    designation: 'Full Stack Developer',
    image: mesumImg,
    linkedin: 'https://www.linkedin.com/in/mesum357/',
  },
  {
    name: 'Yasir Rahim',
    designation: 'Digital Marketer',
    image: yasirImg,
    linkedin: 'https://www.linkedin.com/in/yasirrahimb36b0371/',
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Who we are</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the people behind nordex — dedicated experts helping you grow with technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative"
            >
              <div
                className="relative h-full rounded-2xl overflow-hidden glass-card border border-border/60
                  transition-all duration-500 ease-out shadow-card
                  hover:-translate-y-2 hover:shadow-glow hover:border-primary/50"
              >
                <div className="relative aspect-[4/5] overflow-hidden shrink-0">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 pt-12">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.designation}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground
                      bg-gradient-to-r from-primary to-secondary px-4 py-2.5 rounded-xl
                      shadow-lg hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-300"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={18} className="shrink-0" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
