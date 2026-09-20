"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SCREEN_TEXTS, BUTTON_TEXTS } from "./gameConfig";
import FloatingHearts from "./components/FloatingHearts";
import GameScreen from "./components/GameScreen";
import FinalScreen from "./components/FinalScreen";

type GameState = "landing" | "playing" | "final";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("landing");
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleLandingStart = useCallback(() => {
    setGameState("playing");
    setCurrentScreen(1);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentScreen((prev) => prev + 1);
  }, []);

  const handleFinalYes = useCallback(() => {
    setGameState("final");
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      {/* Floating hearts — always visible */}
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {/* ===== LANDING SCREEN (Screen 0) ===== */}
        {gameState === "landing" && (
          <motion.div
            key="landing"
            className="fixed inset-0 flex flex-col items-center justify-center z-10 landing-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative top sparkles */}
            <motion.div
              className="absolute top-10 left-1/2 -translate-x-1/2 text-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨💕✨
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center gradient-text leading-tight px-8 max-w-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                damping: 15,
              }}
            >
              {SCREEN_TEXTS.text_0}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-4 text-pink-700/70 text-base sm:text-lg text-center px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Let me show you a trailer to help you decide if you want to watch the full movie!! 🎬
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="mt-10 py-4 px-10 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-xl font-bold rounded-2xl shadow-xl btn-glow pulse-border-pink"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLandingStart}
            >
              {BUTTON_TEXTS.landing_button}
            </motion.button>

            {/* Decorative bottom */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 text-2xl opacity-40"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💌
            </motion.div>
          </motion.div>
        )}

        {/* ===== GAME SCREENS (1–7) ===== */}
        {gameState === "playing" && (
          <AnimatePresence mode="wait">
            <GameScreen
              key={`screen-${currentScreen}`}
              screenNumber={currentScreen}
              onNext={handleNext}
              onFinalYes={handleFinalYes}
            />
          </AnimatePresence>
        )}

        {/* ===== FINAL CELEBRATION SCREEN ===== */}
        {gameState === "final" && (
          <FinalScreen key="final" />
        )}
      </AnimatePresence>
    </main>
  );
}
