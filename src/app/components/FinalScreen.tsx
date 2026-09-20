"use client";

import { motion } from "framer-motion";
import { SCREEN_TEXTS, FINAL_IMAGE } from "../gameConfig";
import ConfettiEffect from "./ConfettiEffect";

export default function FinalScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background — warm celebration pink */}
      <div className="absolute inset-0 final-bg z-0" />

      {/* Confetti */}
      <ConfettiEffect />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 w-full h-full max-w-md mx-auto">
        {/* Celebration emoji */}
        <motion.div
          className="text-5xl sm:text-6xl mb-4"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 200,
            delay: 0.2,
          }}
        >
          🎉
        </motion.div>

        {/* Main text — dark burgundy gradient for readability */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center gradient-text leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {SCREEN_TEXTS.text_final}
        </motion.h1>

        {/* Decorative hearts row */}
        <motion.div
          className="flex gap-2 text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {["💕", "💖", "💗", "💝", "💕"].map((heart, i) => (
            <motion.span
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>

        {/* Photo */}
        <motion.div
          className="photo-frame w-full max-w-xs sm:max-w-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.2,
            type: "spring",
            damping: 15,
            stiffness: 150,
          }}
        >
          <div className="relative">
            {/* Glow effect behind photo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-400/30 via-rose-400/30 to-pink-400/30 rounded-2xl blur-xl animate-pulse" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={FINAL_IMAGE}
              alt="Our Journey"
              className="relative w-full rounded-xl shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Bottom sparkle text */}
        <motion.p
          className="mt-6 text-pink-800/70 text-sm sm:text-base text-center font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          ✨ Long drive pe chale, meri passenger princess 👸?? ✨
        </motion.p>
      </div>
    </motion.div>
  );
}
