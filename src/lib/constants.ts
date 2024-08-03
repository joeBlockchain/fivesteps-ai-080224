import { Metadata } from "next/types";

export const SaaS_NAME = "FiveSteps-AI";
export const SaaS_GITHUB_URL = "https://github.com/joeBlockchain";
export const SaaS_TWITTER_URL = "https://twitter.com/JoeTaylor_86753";
export const SaaS_MEDIUM_URL = "https://medium.com/@learningsomethingnew";

export const APP_NAME = "FiveStep AI";
export const APP_URL = "https://fivestep-ai.com"; // Update with your actual URL
export const APP_TWITTER_HANDLE = "@FiveStep-AI"; // Update with your actual Twitter handle

export const APP_METADATA: Metadata = {
  title: "FiveSteps-AI: Simplify Your Goals with AI",
  description:
    "AI-powered system that breaks down your goals into 5 simple steps.",
  keywords: [
    "AI task management",
    "productivity",
    "5-step method",
    "goal achievement",
    "AI assistant",
  ],
  authors: [{ name: "FiveStep-AI Team" }],
  creator: "FiveStep-AI",
  publisher: "FiveStep-AI Inc.",
  openGraph: {
    title: "FiveStep-AI: Achieve Your Goals, One Step at a Time",
    description:
      "Simplify complex tasks into 5 manageable steps with AI assistance.",
    url: APP_URL,
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FiveStep-AI: Your AI-Powered Goal Simplifier",
    description: "Break down any goal into 5 simple steps with AI guidance.",
    creator: APP_TWITTER_HANDLE,
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};
