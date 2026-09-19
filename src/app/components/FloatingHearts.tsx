"use client";

import { useEffect, useState, useMemo } from "react";

const HEARTS = ["💕", "💗", "💖", "💘", "💝", "❤️", "🩷", "✨", "🌸"];

interface Heart {
  id: number;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  // Generate hearts on mount (client-side only)
  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
      left: Math.random() * 100,
      size: 0.8 + Math.random() * 1.5,
      duration: 5 + Math.random() * 8,
      delay: Math.random() * 10,
    }));
    setHearts(generated);
  }, []);

  if (hearts.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}rem`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}
