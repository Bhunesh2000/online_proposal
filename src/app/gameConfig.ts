// ============================================================
// 🎮 GAME CONFIGURATION — Edit all texts here before deploying!
// ============================================================

// 💕 Partner's name — appears on landing and final screens
export const PARTNER_NAME = "Bhunesh";

// 🖼️ Screen texts — text_0 is the landing screen, text_1 through text_7 are game screens
export const SCREEN_TEXTS = {
  // Landing screen (Screen 0) — no photo, just animated background
  text_0: `Are you ready to take this journey with ${PARTNER_NAME}?`,

  // Game screens (1–7) — each paired with its photo
  text_1: "Meri har baat ko bina thope, itni importance kon dega? ❤️",
  text_2: "Bina bole mere dil ki baatein sabse achhe se kon samjhega? ✨",
  text_3: "Mera aane wala har ek lamha, har ek minute ab kiske naam hoga? 🥰",
  text_4: "Thak-haar ke aane ke baad, hath pakad ke kiske baju mein sukoon ki neend aayegi? 🥺💕",
  text_5: "Jab main naraz houngi, toh woh 'extra care' karke mujhe kon manayega? 🙈",
  text_6: "Zindagi ke har utaar-chadhaav mein, mera sachha 50-50 wala partner kon banega? 🤝❤️",
  text_7: "Aur budhape mein sath baithkar, yeh saari kisse-kahaniyan kiske sath yaad karungi? 👴👵💞",

  // Final celebration screen
  text_final: `Congratulations! 🎉 Welcome onboard on a beautiful, fun-filled, lovely journey with ${PARTNER_NAME} (tumhara Ravi 😉)💕`,
};

// 🔘 Button texts
export const BUTTON_TEXTS = {
  landing_button: "Let's begin!!",
  yes: "Yes 💕",
  no: "No 🙅‍♀️",
};

// 💬 Popup messages
export const POPUP_TEXTS = {
  // Shown on screens 1–6 when YES is clicked
  yes_popup: "Dekh le kiran, soch le abhi toh time hai",

  // Shown on screen 7 when NO is clicked
  no_popup: "Ab toh maan ja kiran, meri sunshine, meri cute kitty 😘",
};

// 🖼️ Image paths — these map to files in /public/assets/
export const SCREEN_IMAGES: Record<number, string> = {
  1: "/assets/1.JPEG",
  2: "/assets/2.PNG",
  3: "/assets/3.PNG",
  4: "/assets/4.PNG",
  5: "/assets/5.PNG",
  6: "/assets/6.PNG",
  7: "/assets/7.PNG",
};

export const FINAL_IMAGE = "/assets/final.PNG";
