export type PortfolioTab = "website" | "app" | "web" | "dashboards" | "studio";

export interface LiveLink {
  label: string;
  url: string;
  description?: string;
}

export interface PortfolioSection {
  id: PortfolioTab;
  navLabel: string;
  heading: string;
  subtitle: string;
  screenshotFolder: string;
  screenshotHint: string;
  primaryAction?: {
    label: string;
    url: string;
    external?: boolean;
  };
  links: LiveLink[];
  extraButtons?: { label: string; url: string; variant?: "primary" | "secondary" }[];
}

/** One-click open for FYP judges — live app URL + optional Vercel project page. */
export interface DeploymentLauncher {
  id: string;
  label: string;
  subtitle: string;
  liveUrl: string;
  vercelProjectUrl?: string;
  gradient: string;
  border: string;
}

const SHOP = "https://fyp-web-code-deployment.vercel.app";
const DASHBOARD = `${SHOP}/login?pick=1`;
const FLUTTER_WEB = "https://app-deployment-flutter-smart-fitao.vercel.app/";
const STUDIO = "https://3d-studio-deploymentt.vercel.app/ladies_try_on/";

export const DEPLOYMENT_LAUNCHERS: DeploymentLauncher[] = [
  {
    id: "shop",
    label: "Shop Website",
    subtitle: "Marketplace · size finder · 2D try-on",
    liveUrl: `${SHOP}/`,
    vercelProjectUrl:
      "https://vercel.com/nauman-irshads-projects/fyp-web-code-deployment",
    gradient: "from-brand-500 to-brand-600",
    border: "border-brand-200",
  },
  {
    id: "dashboard",
    label: "Tailor Dashboard",
    subtitle: "Seller & tailor login · orders",
    liveUrl: DASHBOARD,
    vercelProjectUrl:
      "https://vercel.com/nauman-irshads-projects/fyp-web-code-deployment",
    gradient: "from-amber-500 to-orange-600",
    border: "border-amber-200",
  },
  {
    id: "flutter-web",
    label: "Flutter App (Web)",
    subtitle: "Full mobile app in browser",
    liveUrl: FLUTTER_WEB,
    vercelProjectUrl:
      "https://vercel.com/nauman-irshads-projects/app-deployment-flutter-smart-fitao-ai",
    gradient: "from-indigo-500 to-violet-600",
    border: "border-indigo-200",
  },
  {
    id: "studio",
    label: "3D Try-On Studio",
    subtitle: "Virtual kurta · Three.js studio",
    liveUrl: STUDIO,
    vercelProjectUrl:
      "https://vercel.com/nauman-irshads-projects/3d-studio-deploymentt",
    gradient: "from-teal-500 to-cyan-600",
    border: "border-teal-200",
  },
];

/** Vercel live URLs — update APK path when you upload the build. */
export const APK_DOWNLOAD_URL = "/downloads/smartfitao.apk";

/** Django + ML APIs (Render + local dev). */
const DJANGO_API = "https://smartfitao-django-api.onrender.com";

export const BACKEND_LINKS: LiveLink[] = [
  {
    label: "Django API health",
    url: `${DJANGO_API}/api/health/`,
    description: "Server + Supabase DB status",
  },
  {
    label: "Status dashboard (Render)",
    url: `${DJANGO_API}/status/`,
    description: "Tools ON/OFF hub — integrations probe",
  },
  {
    label: "Django API index",
    url: `${DJANGO_API}/api/`,
    description: "Auth, checkout, tracking, catalog",
  },
  {
    label: "Integrations API",
    url: `${DJANGO_API}/api/integrations/`,
    description: "Linked modules registry",
  },
  {
    label: "Size prediction API",
    url: "https://fyp-backend-hi10.onrender.com/api/health",
    description: "Flask — POST /predict (kameez size)",
  },
  {
    label: "2D Try-on API",
    url: "https://threed-studio-deploymentt.onrender.com/health",
    description: "FastAPI — IDM-VTON kurta try-on",
  },
  {
    label: "Local Django (dev)",
    url: "http://127.0.0.1:8000/api/health/",
    description: "manage.py runserver 8000",
  },
  {
    label: "Local Flask camera",
    url: "http://127.0.0.1:5000/",
    description: "Pose capture — port 5000",
  },
];

export const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  {
    id: "website",
    navLabel: "Website",
    heading: "2 · Shop Website (Vercel)",
    subtitle:
      "Traditional wear marketplace — landing, products, reels, tailor portfolio, and checkout on Vercel.",
    screenshotFolder: "/screenshots/website",
    screenshotHint: "Add PNG/JPG files to public/screenshots/website/",
    primaryAction: {
      label: "Open live website",
      url: `${SHOP}/`,
      external: true,
    },
    links: [
      {
        label: "Shop home",
        url: `${SHOP}/`,
        description: "Main storefront & 3D landing",
      },
      {
        label: "AI Size Finder",
        url: `${SHOP}/size-finder/`,
        description: "Cloth size prediction wizard",
      },
      {
        label: "SmartFitao NLP Chat",
        url: `${SHOP}/smart-fitao-chat/`,
        description: "FAQ + 3D product chatbot",
      },
    ],
  },
  {
    id: "app",
    navLabel: "Mobile App",
    heading: "2 · Flutter Mobile App (APK)",
    subtitle:
      "Android app — 3D marketplace, camera body scan, size prediction, 2D try-on, tailor chat & orders.",
    screenshotFolder: "/screenshots/app",
    screenshotHint: "Add phone screenshots to public/screenshots/app/",
    primaryAction: {
      label: "Open Flutter Web",
      url: FLUTTER_WEB,
      external: true,
    },
    links: [
      {
        label: "Flutter Web (live)",
        url: FLUTTER_WEB,
        description: "Same app in browser — no install needed",
      },
      {
        label: "Download APK",
        url: APK_DOWNLOAD_URL,
        description: "Enable “Install unknown apps” on Android, then open the APK.",
      },
    ],
    extraButtons: [
      {
        label: "Open shop website",
        url: `${SHOP}/`,
        variant: "secondary",
      },
    ],
  },
  {
    id: "web",
    navLabel: "Flutter Web",
    heading: "2 · Flutter Web App",
    subtitle:
      "Same Flutter codebase in the browser — marketplace, measurement flow, and camera embed (Edge/Chrome).",
    screenshotFolder: "/screenshots/web",
    screenshotHint: "Add browser screenshots to public/screenshots/web/",
    links: [
      {
        label: "Flutter Web (live)",
        url: FLUTTER_WEB,
        description: "Deployed Flutter app on Vercel",
      },
      {
        label: "Run locally (Edge)",
        url: "http://localhost:65106",
        description: "flutter run -d edge --web-port=65106",
      },
      {
        label: "Shop website (React)",
        url: `${SHOP}/`,
        description: "Deployed React shop (separate from Flutter web build)",
      },
    ],
    extraButtons: [
      {
        label: "Open Flutter Web",
        url: FLUTTER_WEB,
        variant: "primary",
      },
    ],
  },
  {
    id: "dashboards",
    navLabel: "Web Dashboards",
    heading: "Web Dashboards (Tailor & Seller)",
    subtitle: "Unified login on the shop site — tailor & seller roles, orders, rates, and seller tools.",
    screenshotFolder: "/screenshots/dashboards",
    screenshotHint: "Add dashboard screenshots to public/screenshots/dashboards/",
    primaryAction: {
      label: "Open dashboard login",
      url: DASHBOARD,
      external: true,
    },
    links: [
      {
        label: "Role picker (Tailor / Seller)",
        url: DASHBOARD,
        description: "Choose dashboard role — live on shop site",
      },
      {
        label: "Shop website",
        url: `${SHOP}/`,
        description: "Customer storefront",
      },
      ...BACKEND_LINKS.slice(0, 4),
    ],
  },
  {
    id: "studio",
    navLabel: "3D Studio",
    heading: "3D Virtual Try-On Studio",
    subtitle:
      "React + Three.js studio — GLB catalog, snapmeasure handoff, landscape mobile view, cart & buy.",
    screenshotFolder: "/screenshots/studio",
    screenshotHint: "Add studio screenshots to public/screenshots/studio/",
    primaryAction: {
      label: "Open 3D Studio",
      url: STUDIO,
      external: true,
    },
    links: [
      {
        label: "Ladies Kurti Try-On (live)",
        url: STUDIO,
        description: "TryKurti virtual kurta try-on studio",
      },
      {
        label: "3D Studio home",
        url: "https://3d-studio-deploymentt.vercel.app/",
        description: "Studio landing page",
      },
      {
        label: "Size Finder → Studio",
        url: `${SHOP}/size-finder/`,
        description: "Predict sizes then open studio with measurements",
      },
      {
        label: "Catalog API",
        url: `${SHOP}/api/catalog`,
        description: "JSON product list for Flutter app",
      },
    ],
  },
];

export const DEFAULT_SCREENSHOTS: Record<PortfolioTab, string[]> = {
  website: [],
  app: [],
  web: [],
  dashboards: [],
  studio: [],
};

/** Placeholder tiles until you add real screenshots in public/screenshots/… */
export const PLACEHOLDER_SCREEN_COUNT = 6;
