export type DeploymentCategory =
  | "vercel"
  | "render"
  | "supabase"
  | "github"
  | "console";

export interface DeploymentEntry {
  id: string;
  category: DeploymentCategory;
  label: string;
  url: string;
  description: string;
  /** GET URL for automated health ping (optional). */
  healthUrl?: string;
}

export const DEPLOYMENT_CATEGORY_META: Record<
  DeploymentCategory,
  { title: string; subtitle: string }
> = {
  vercel: {
    title: "Vercel — Frontends",
    subtitle: "Shop, dashboards, Flutter web, 3D studio",
  },
  render: {
    title: "Render — Backends (APIs)",
    subtitle: "Size ML, 2D try-on, Stripe payments, Django (optional)",
  },
  supabase: {
    title: "Supabase — PostgreSQL",
    subtitle: "Django backend database (orders, tracking, catalog)",
  },
  github: {
    title: "GitHub — Source repos",
    subtitle: "Deployment branches pushed from local FYP workspace",
  },
  console: {
    title: "Cloud dashboards",
    subtitle: "Vercel, Render, Supabase admin",
  },
};

const SHOP = "https://fyp-web-code-deployment.vercel.app";
const WEBSITE = `${SHOP}/messages`;
const DASHBOARD = `${SHOP}/login?pick=1`;
const STUDIO = "https://3d-studio-deploymentt.vercel.app/ladies_try_on/";
const SIZE_API = "https://fyp-backend-hi10.onrender.com";
const TRYON_API = "https://threed-studio-deploymentt.onrender.com";
const STRIPE_API = "https://smartfitao-stripe-api.onrender.com";
const DJANGO_API = "https://smartfitao-django-api.onrender.com";
const CV_VERCEL =
  "https://qr-code-scan-computer-visionj-git-main-nauman-irshads-projects.vercel.app";

export const ALL_DEPLOYMENTS: DeploymentEntry[] = [
  // —— Vercel ——
  {
    id: "v-shop",
    category: "vercel",
    label: "Shop website (messages)",
    url: WEBSITE,
    description: "Main React marketplace — messages page",
    healthUrl: WEBSITE,
  },
  {
    id: "v-shop-home",
    category: "vercel",
    label: "Shop website (home)",
    url: `${SHOP}/`,
    description: "Landing page & 3D hero",
    healthUrl: `${SHOP}/`,
  },
  {
    id: "v-size",
    category: "vercel",
    label: "AI Size Finder",
    url: `${SHOP}/size-finder/`,
    description: "Measurement wizard → Render /predict",
    healthUrl: `${SHOP}/size-finder/`,
  },
  {
    id: "v-chat",
    category: "vercel",
    label: "SmartFitao NLP Chat",
    url: `${SHOP}/smart-fitao-chat/`,
    description: "FAQ + 3D product chatbot",
    healthUrl: `${SHOP}/smart-fitao-chat/`,
  },
  {
    id: "v-dashboard",
    category: "vercel",
    label: "Tailor & Seller Dashboard",
    url: DASHBOARD,
    description: "Role picker on shop site — tailor/seller login",
    healthUrl: `${SHOP}/`,
  },
  {
    id: "v-flutter",
    category: "vercel",
    label: "Flutter App (Web)",
    url: "https://app-deployment-flutter-smart-fitao.vercel.app/",
    description: "Full SmartFitao app in browser",
    healthUrl: "https://app-deployment-flutter-smart-fitao.vercel.app/",
  },
  {
    id: "v-studio",
    category: "vercel",
    label: "3D Try-On Studio (Ladies Kurti)",
    url: STUDIO,
    description: "TryKurti Three.js studio",
    healthUrl: STUDIO,
  },
  {
    id: "v-studio-home",
    category: "vercel",
    label: "3D Studio home",
    url: "https://3d-studio-deploymentt.vercel.app/",
    description: "Studio landing page",
    healthUrl: "https://3d-studio-deploymentt.vercel.app/",
  },
  {
    id: "v-cv-standalone",
    category: "vercel",
    label: "Computer Vision (standalone)",
    url: CV_VERCEL,
    description: "QR + pose API on Vercel",
    healthUrl: CV_VERCEL,
  },

  // —— Render ——
  {
    id: "r-size",
    category: "render",
    label: "Size prediction API",
    url: SIZE_API,
    description: "Flask — POST /predict, kameez measurements",
    healthUrl: `${SIZE_API}/api/health`,
  },
  {
    id: "r-tryon",
    category: "render",
    label: "2D Try-on API (IDM-VTON)",
    url: TRYON_API,
    description: "FastAPI — POST /api/tryon",
    healthUrl: `${TRYON_API}/health`,
  },
  {
    id: "r-stripe",
    category: "render",
    label: "Stripe payment API",
    url: STRIPE_API,
    description: "Django — checkout sessions",
    healthUrl: `${STRIPE_API}/api/payment-mode/`,
  },
  {
    id: "r-django",
    category: "render",
    label: "Django API (orders / tracking)",
    url: DJANGO_API,
    description: "Auth, checkout, catalog, integrations",
    healthUrl: `${DJANGO_API}/api/health/`,
  },
  {
    id: "r-django-status",
    category: "render",
    label: "Django status dashboard",
    url: `${DJANGO_API}/status/`,
    description: "Tools ON/OFF hub — linked modules probe",
    healthUrl: `${DJANGO_API}/status/`,
  },
  {
    id: "r-django-integrations",
    category: "render",
    label: "Integrations API",
    url: `${DJANGO_API}/api/integrations/`,
    description: "Registry of linked FYP modules",
    healthUrl: `${DJANGO_API}/api/integrations/`,
  },
  {
    id: "r-tryon-render-ui",
    category: "render",
    label: "Try-on API docs",
    url: `${TRYON_API}/docs`,
    description: "FastAPI Swagger UI",
    healthUrl: `${TRYON_API}/docs`,
  },

  // —— Supabase ——
  {
    id: "sb-dashboard",
    category: "supabase",
    label: "Supabase Project",
    url: "https://supabase.com/dashboard/project/icdpmxbdfuogpfhycuhq",
    description: "Project ref: icdpmxbdfuogpfhycuhq",
  },
  {
    id: "sb-database",
    category: "supabase",
    label: "Database settings",
    url: "https://supabase.com/dashboard/project/icdpmxbdfuogpfhycuhq/settings/database",
    description: "PostgreSQL connection string (Django)",
  },
  {
    id: "sb-tables",
    category: "supabase",
    label: "Table Editor",
    url: "https://supabase.com/dashboard/project/icdpmxbdfuogpfhycuhq/editor",
    description: "View orders / tracking tables",
  },
  {
    id: "sb-sql",
    category: "supabase",
    label: "SQL Editor",
    url: "https://supabase.com/dashboard/project/icdpmxbdfuogpfhycuhq/sql",
    description: "Run queries on Postgres",
  },

  // —— GitHub ——
  {
    id: "gh-portfolio",
    category: "github",
    label: "portfolio-website-smart-fitao-ai",
    url: "https://github.com/Nauman-Irshad/portfolio-website-smart-fitao-ai-",
    description: "This portfolio hub — all live links",
  },
  {
    id: "gh-shop",
    category: "github",
    label: "fyp-web-code-deployment",
    url: "https://github.com/Nauman-Irshad/fyp-web-code-deployment",
    description: "Shop + Render size API + Django branch",
  },
  {
    id: "gh-flutter",
    category: "github",
    label: "APP-Deployment-flutter-smart-fitao-ai",
    url: "https://github.com/Nauman-Irshad/APP-Deployment-flutter-smart-fitao-ai-",
    description: "Flutter app → Vercel web + APK",
  },
  {
    id: "gh-tryon",
    category: "github",
    label: "3d-try-on-work",
    url: "https://github.com/Nauman-Irshad/3d-try-on-work-",
    description: "2D try-on + size prediction source",
  },

  // —— Consoles ——
  {
    id: "c-vercel",
    category: "console",
    label: "Vercel — all projects",
    url: "https://vercel.com/nauman-irshads-projects",
    description: "Deployments & env vars",
  },
  {
    id: "c-render",
    category: "console",
    label: "Render Dashboard",
    url: "https://dashboard.render.com/",
    description: "fyp-backend-hi10, try-on, Stripe, Django",
  },
  {
    id: "c-cloudflare",
    category: "console",
    label: "Cloudflare Dashboard",
    url: "https://dash.cloudflare.com/",
    description: "R2 bucket smartfitao media",
  },
  {
    id: "c-stripe",
    category: "console",
    label: "Stripe Dashboard (test)",
    url: "https://dashboard.stripe.com/test/payments",
    description: "Payments after checkout",
  },
];

export const DEPLOYMENT_CATEGORY_ORDER: DeploymentCategory[] = [
  "vercel",
  "render",
  "supabase",
  "github",
  "console",
];
