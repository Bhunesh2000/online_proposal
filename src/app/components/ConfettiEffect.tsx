"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiEffect() {
  useEffect(() => {
    // Initial burst
    const fire = (particleRatio: number, opts: confetti.Options) => {
      confetti({
        origin: { y: 0.7 },
        ...opts,
        particleCount: Math.floor(200 * particleRatio),
      });
    };

    // Multi-burst sequence
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#f43f5e", "#fda4af", "#fecdd3"],
    });

    fire(0.2, {
      spread: 60,
      colors: ["#f43f5e", "#fb7185", "#fda4af"],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#fecdd3", "#fff1f2", "#fda4af"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#f43f5e", "#e11d48", "#fb7185"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#ffd700", "#ffb6c1", "#ff69b4"],
    });

    // Second wave after a short delay
    const timer = setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.35 },
        colors: ["#f43f5e", "#fda4af", "#fecdd3", "#ffd700", "#ff69b4"],
      });
    }, 800);

    // Continuous subtle confetti
    const interval = setInterval(() => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f43f5e", "#fda4af"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#fda4af", "#fecdd3"],
      });
    }, 400);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return null;
}
