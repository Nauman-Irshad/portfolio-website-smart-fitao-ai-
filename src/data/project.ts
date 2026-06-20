/** Edit team / advisor — synced with Open House standee poster. */
export const PROJECT_META = {
  name: "Smart Fitao AI",
  altName: "Smart Fitao AI",
  tagline: "Tailor Crafted · Virtually Try-On",
  courseCode: "F25CS046",

  advisor: {
    title: "Advisor",
    name: "MR ASIF FAROOQ",
  },

  team: [
    { name: "Nauman Irshad Ali Shah", id: "L1F22BSCS0122" },
    { name: "Muhammad Umer Amir", id: "L1F22BSCS1196" },
    { name: "Ali Ahmad", id: "L1F22BSCS0800" },
    { name: "Abdul Rehman", id: "L1F22BSCS0522" },
  ],
};

export const LOGO_PATH = "/logo/app.png";
export const STANDEE_PDF = "/poster/standee.pdf";
export const STANDEE_IMAGE = "/poster/standee.png";

export const HERO = {
  title: "Smart Fitao AI",
  problem:
    "No international platform supports tailor customization, LLC registration cost, or brand connections. Users lack order tracking security and cannot try clothes at home.",
  solution:
    "Smart Fitao AI solves this with a 3D Marketplace featuring Order Tracking, 3D Studio for tailors, Kameez Size Prediction (age/height/weight), 33-landmark A-Pose detection, 2D Virtual Try-On, and AI Chatbot for 3D product recommendation.",
  tagline: "3D Marketplace + Order Tracking + AI Virtual Try-On",
};

export const INTRODUCTION =
  "In Smart Fitao AI, we surveyed 14 tailor shops to identify real problems: lack of connection with international clients, no platform supports tailor customization and brand connections. It provides users with order tracking security and the ability to try clothes at home. The platform features a 3D Marketplace with Order Tracking, 3D Studio for tailors, Cloth Size Prediction (age/height/weight), 33-landmark A-Pose detection, 2D Kurta Virtual Try-On, and 3D Product Recommendation AI Chatbot. Built with Django, React, Flutter.";

export const ABSTRACT = HERO.solution;

export const METHODS = [
  "Cloth Size Prediction Model: Train a model that predicts kameez size using age, height, weight and custom questions.",
  "Make Kurta Dataset: With BERT & Random Forest on 50,000 body rows from 14 tailor surveys + 1,200 cloth sizes.",
  "33 Body Landmarks: Computer Vision using MediaPipe, BlazePose for capture.",
  "2D Virtual Try-On: Fine-tuned IDM-VTON to work for Kurta and Kameez try-on.",
  "3D Product Recommendation Chatbot: TF-IDF, FAISS & Groq Llama for product recommendations in 3D visualization way.",
];

export const RESULTS = [
  "Smart Fitao AI successfully bridged the gap between international customers and Pakistani local tailors.",
  "2D Virtual Try-On for Kurta and Kameez at home.",
  "Kameez Size Prediction from user age, height, and weight.",
  "3D Product Recommendation Chatbot.",
];

export const CONCLUSION = RESULTS[0];

export const DISCUSSION =
  "Continuing work on PIFuHD metaverse model for 3D body try-on creation from single picture, fine-tuning to capture both back and front sides with JSON files to create 3D base body. 3D body try-on remains in progress.";

export const ACCURACY_METRICS = [
  { model: "Cloth Size Prediction (BERT)", accuracy: "87.6%" },
  { model: "NLP 3D Chatbot Answer Match", accuracy: "87.84%" },
  { model: "33 Landmark Detection", accuracy: "94%" },
  { model: "2D Virtual Try-On", accuracy: "91%" },
];

export const TEST_RESULTS = [
  { feature: "Web/App Login Auth", testCase: "TC-1", defects: 1, correct: 1 },
  { feature: "AI Cloth Prediction", testCase: "TC-2", defects: 1, correct: 1 },
  { feature: "33 Landmark Calculation Accuracy", testCase: "TC-3", defects: 1, correct: 1 },
  { feature: "2D Virtual Try-On", testCase: "TC-4", defects: 2, correct: 2 },
  { feature: "3D Chatbot Response", testCase: "TC-5", defects: 2, correct: 2 },
  { feature: "3D Product Render", testCase: "TC-6", defects: 6, correct: 6 },
];

export const REFERENCES = [
  "Choi et al. (2024). IDM-VTON. arXiv:2403.05139",
  "Nashita et al. (2024). Cloth Size Prediction using Random Forest. IEEE (10.1109/ICSSEECC12345)",
  "Gondal et al. (2025). RAG + FAISS for Fashion Chatbot. arXiv:2511.19149",
];

export const STANDEE_FEATURES = [
  { fig: "Fig#1", label: "Logo" },
  { fig: "Fig#3", label: "3D Marketplace (Web, App)" },
  { fig: "Fig#5", label: "3D Tailor Studio" },
  { fig: "Fig#7", label: "Size Prediction Model · Kurta Dataset" },
  { fig: "Fig#4", label: "AI Chatbot" },
  { fig: "Fig#8", label: "33 Body Landmarks · A-Pose Detection" },
  { fig: "Fig#9", label: "IDM-VTON Fine-Tuned" },
];
