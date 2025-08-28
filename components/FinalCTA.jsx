"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Users, Bell } from "lucide-react";
import { motion, useInView } from "framer-motion";

const FinalCTA = ({ onJoinWaitlist }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { icon: Users, value: "500+", label: "Teachers Waiting" },
    { icon: Bell, value: "0", label: "Spam Emails" },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-dashed border-primary rounded-full"
        ></motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-20 w-16 h-16 bg-primary/15 rounded-full blur-lg"
        ></motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-foreground mb-6"
        >
          Be the First to Try It
        </motion.h2>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center space-x-8 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full"
            >
              <stat.icon className="h-5 w-5 text-primary" />
              <div className="text-left">
                <div className="font-bold text-primary text-sm">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-6"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgb(var(--primary) / 0)",
                "0 0 0 10px rgb(var(--primary) / 0.1)",
                "0 0 0 20px rgb(var(--primary) / 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="inline-block rounded-full"
          >
            <Button
              onClick={onJoinWaitlist}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transform transition-all duration-300 text-xl px-12 py-6 group shadow-2xl hover:shadow-primary/25 relative overflow-hidden"
            >
              {/* Button Background Animation */}
              <motion.div
                animate={{
                  x: [-100, 300],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              ></motion.div>

              <span className="relative z-10 cursor-pointer">
                Join the Waitlist
              </span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground"
        >
          We'll ping you the second it's ready.
        </motion.p>

        {/* Animated Notification Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={
            isInView
              ? {
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0],
                  y: [50, 0, 0, -20],
                }
              : { opacity: 0, scale: 0, y: 50 }
          }
          transition={{
            duration: 4,
            delay: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 5,
          }}
          className="fixed bottom-8 right-8 max-w-sm bg-background border border-primary/20 rounded-lg shadow-2xl p-4 z-50"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Bell className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm text-foreground">
                TeachPlan is ready! 🎉
              </div>
              <div className="text-xs text-muted-foreground">
                Your planning tool awaits
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
