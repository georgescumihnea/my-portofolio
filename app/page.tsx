// app/page.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Curve from "@/components/Curve";
import { Header } from "@/components/Header";
import { SpotlightCard } from "@/components/Spotlight";
import { WelcomeCard } from "@/components/WelcomeCard";
import { AboutMeCard } from "@/components/AboutMeCard";
import { CvCard } from "@/components/CvCard";
import { NowCard } from "@/components/NowCard";
import { PortfolioProjectsCard } from "@/components/PortofolioProjectsCard";
import { TimeZoneCard } from "@/components/TimeZoneCard";
import { ContactCard } from "@/components/ContactCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { QuoteCard } from "@/components/QuoteCard";
import { LanguagesCard } from "@/components/LanguagesCard";
import { ContactFormCard } from "@/components/ContactFormCard";

export default function Page() {
  // Check if user prefers reduced motion
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { when: "afterChildren" }
        : { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <Curve>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <Header />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Welcome Card */}
            <motion.div variants={cardVariants} className="md:col-span-4">
              <SpotlightCard className="shadow-lg h-full">
                <WelcomeCard />
              </SpotlightCard>
            </motion.div>

            {/* About Me Card */}
            <motion.div variants={cardVariants} className="md:col-span-2">
              <SpotlightCard className="shadow-lg h-full">
                <AboutMeCard />
              </SpotlightCard>
            </motion.div>

            {/* Portfolio & Projects Card */}
            <motion.div variants={cardVariants} className="md:col-span-4">
              <SpotlightCard className="shadow-lg h-full">
                <PortfolioProjectsCard />
              </SpotlightCard>
            </motion.div>

            {/* New 2x2 Grid for CV, Now, Study, and Experience */}
            <motion.div variants={cardVariants} className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4 h-full w-full">
                {/* CV Card */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="shadow-lg h-full">
                    <CvCard />
                  </SpotlightCard>
                </motion.div>
                {/* Now Card */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="shadow-lg h-full">
                    <NowCard />
                  </SpotlightCard>
                </motion.div>
                {/* Experience Card */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="shadow-lg h-full">
                    <ExperienceCard />
                  </SpotlightCard>
                </motion.div>
                {/* SkillCard (ProgramminLanguages) */}
                <motion.div variants={cardVariants}>
                  <SpotlightCard className="shadow-lg h-full">
                    <LanguagesCard />
                  </SpotlightCard>
                </motion.div>
                {/* Time Zone Card */}
                <motion.div variants={cardVariants} className="col-span-2">
                  <SpotlightCard className="shadow-lg h-full">
                    <TimeZoneCard />
                  </SpotlightCard>
                </motion.div>
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div variants={cardVariants} className="md:col-span-3">
              <SpotlightCard className="shadow-lg h-full">
                <QuoteCard />
              </SpotlightCard>
            </motion.div>

            {/* Contact Card */}
            <motion.div variants={cardVariants} className="md:col-span-3">
              <SpotlightCard className="shadow-lg h-full">
                <ContactCard />
              </SpotlightCard>
            </motion.div>

            {/* Instagram Tattoo Card */}
            <motion.div variants={cardVariants} className="md:col-span-6">
              <SpotlightCard className="shadow-lg h-full">
                <ContactFormCard />
              </SpotlightCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Curve>
  );
}
