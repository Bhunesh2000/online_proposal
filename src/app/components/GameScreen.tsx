"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  SCREEN_TEXTS,
  BUTTON_TEXTS,
  POPUP_TEXTS,
  SCREEN_IMAGES,
} from "../gameConfig";
import PopupModal from "./PopupModal";

interface GameScreenProps {
  screenNumber: number; // 1–7
  onNext: () => void;
  onFinalYes: () => void;
}

export default function GameScreen({
  screenNumber,
  onNext,
  onFinalYes,
}: GameScreenProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [yesHidden, setYesHidden] = useState(false);
  const [noHidden, setNoHidden] = useState(false);

  const isLastScreen = screenNumber === 7;
  const textKey = `text_${screenNumber}` as keyof typeof SCREEN_TEXTS;
  const screenText = SCREEN_TEXTS[textKey];
  const imageSrc = SCREEN_IMAGES[screenNumber];

  const handleYesClick = () => {
    if (isLastScreen) {
      // Last screen: YES takes you to the final celebration
      onFinalYes();
    } else {
      // Screens 1–6: show popup, then hide YES
      setShowPopup(true);
    }
  };

  const handleNoClick = () => {
    if (isLastScreen) {
      // Last screen: show popup, then hide NO
      setShowPopup(true);
    } else {
      // Screens 1–6: NO moves to next screen
      onNext();
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    if (isLastScreen) {
      // After popup closes on screen 7, squash and hide NO
      setNoHidden(true);
    } else {
      // After popup closes on screens 1–6, squash and hide YES
      setYesHidden(true);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center z-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
    >
      {/* Ambient background — light baby pink */}
      <div className="absolute inset-0 ambient-bg z-0" />

      {/* Top 20% — Text */}
      <div className="relative z-10 flex items-center justify-center w-full px-6 pt-6 pb-2" style={{ minHeight: "20%" }}>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-center gradient-text leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {screenText}
        </motion.h2>
      </div>

      {/* Bottom 70% — Image */}
      <div className="relative z-10 flex-1 w-full px-4 pb-4 flex flex-col items-center" style={{ maxHeight: "70%" }}>
        <motion.div
          className="photo-frame w-full max-w-sm h-full relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={`Screen ${screenNumber}`}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Buttons below the image */}
        <motion.div
          className="flex gap-4 mt-4 w-full max-w-sm justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          {/* YES Button — GREEN */}
          <AnimatePresence>
            {!yesHidden && (
              <motion.button
                key="yes-btn"
                className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg btn-glow text-lg pulse-border-green"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYesClick}
                exit={{
                  scale: 0,
                  opacity: 0,
                  rotate: 180,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {BUTTON_TEXTS.yes}
              </motion.button>
            )}
          </AnimatePresence>

          {/* NO Button — RED */}
          <AnimatePresence>
            {!noHidden && (
              <motion.button
                key="no-btn"
                className="flex-1 py-3 px-6 bg-gradient-to-r from-red-500 to-rose-600 text-white font-bold rounded-xl shadow-lg btn-glow text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNoClick}
                exit={{
                  scale: 0,
                  opacity: 0,
                  rotate: -180,
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {BUTTON_TEXTS.no}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <PopupModal
        isOpen={showPopup}
        message={
          isLastScreen ? POPUP_TEXTS.no_popup : POPUP_TEXTS.yes_popup
        }
        onClose={handlePopupClose}
      />
    </motion.div>
  );
}
