// ============================================================
// 🎮 GAME CONFIGURATION — Edit all texts here before deploying!
// ============================================================

// 💕 Partner's name — appears on landing and final screens
export const PARTNER_NAME = "Name";

// 🖼️ Screen texts — text_0 is the landing screen, text_1 through text_7 are game screens
export const SCREEN_TEXTS = {
  // Landing screen (Screen 0) — no photo, just animated background
  text_0: `Are you ready to take this journey with ${PARTNER_NAME}?`,

  // Game screens (1–7) — each paired with its photo
  text_1: "Every love story is beautiful, but ours will be my favorite 💫",
  text_2: "I promise to always steal the blanket... and your heart 💕",
  text_3: "Life is better when we're laughing together 😄",
  text_4: "You're my favorite notification 📱💌",
  text_5: "I'd choose you in a hundred lifetimes 🌹",
  text_6: "So... are you really sure about this? Last chance! 😏",
  text_7: "This is it. The moment of truth. Choose wisely! 💍",

  // Final celebration screen
  text_final: `Congratulations! 🎉 Welcome onboard on a beautiful, fun-filled, lovely journey with ${PARTNER_NAME} 💕`,
};

// 🔘 Button texts
export const BUTTON_TEXTS = {
  landing_button: "Let's find out!!",
  yes: "Yes 💕",
  no: "No 🙅‍♀️",
};

// 💬 Popup messages
export const POPUP_TEXTS = {
  // Shown on screens 1–6 when YES is clicked
  yes_popup: "Are you sure? Maybe you should choose NO 😏",

  // Shown on screen 7 when NO is clicked
  no_popup: "You've come this far, maybe you should choose YES now 💕",
};

// 🖼️ Image paths — these map to files in /public/assets/
export const SCREEN_IMAGES: Record<number, string> = {
  1: "/assets/1.jpg",
  2: "/assets/2.jpg",
  3: "/assets/3.jpg",
  4: "/assets/4.jpg",
  5: "/assets/5.jpg",
  6: "/assets/6.jpg",
  7: "/assets/7.jpg",
};

export const FINAL_IMAGE = "/assets/final.jpg";
