/**
 * MST Website Analytics & B2B Conversion Tracking Engine
 * Supports Google Analytics 4 (GA4) and Google Tag Manager (GTM).
 *
 * NOTE: IDs are driven by environment variables:
 * - VITE_GA_MEASUREMENT_ID (e.g., G-XXXXXXXXXX)
 * - VITE_GTM_CONTAINER_ID (e.g., GTM-XXXXXXX)
 *
 * Tracking remains in dormant/preparation mode without throwing errors
 * or injecting unverified dummy tracking IDs.
 */

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
const GTM_ID = import.meta.env.VITE_GTM_CONTAINER_ID || "";

let isInitialized = false;

export const initAnalytics = (): void => {
  if (typeof window === "undefined" || isInitialized) return;

  // Initialize GA4 if ID is configured
  if (GA_ID && GA_ID.startsWith("G-")) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, {
      send_page_view: false, // Managed by React Router to prevent duplicates in SPA
      anonymize_ip: true,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    isInitialized = true;
  }

  // Initialize GTM if Container ID is configured
  if (GTM_ID && GTM_ID.startsWith("GTM-")) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtmScript);
    isInitialized = true;
  }

  if (!GA_ID && !GTM_ID && import.meta.env.DEV) {
    console.info(
      "[MST Analytics] Ready. Provide VITE_GA_MEASUREMENT_ID or VITE_GTM_CONTAINER_ID to activate live tracking."
    );
  }
};

/**
 * Dispatches custom B2B events (contact form submission, catalog inquiry, exhibition booking)
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, unknown> = {}
): void => {
  if (typeof window === "undefined") return;

  const payload = {
    ...eventParams,
    timestamp: new Date().toISOString(),
  };

  if (window.gtag && GA_ID) {
    window.gtag("event", eventName, payload);
  } else if (window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...payload });
  } else if (import.meta.env.DEV) {
    console.log(`[MST Analytics Event Logged (Pending ID)]: ${eventName}`, payload);
  }
};

/**
 * React hook to track SPA page views on route change without duplicate counts
 */
export const usePageTracking = (): void => {
  const location = useLocation();
  const lastPath = useRef<string>("");

  useEffect(() => {
    initAnalytics();

    const currentPath = location.pathname + location.search;
    if (currentPath === lastPath.current) return;
    lastPath.current = currentPath;

    if (window.gtag && GA_ID) {
      window.gtag("event", "page_view", {
        page_path: currentPath,
        page_title: document.title,
        page_location: window.location.href,
      });
    } else if (window.dataLayer) {
      window.dataLayer.push({
        event: "virtual_page_view",
        page_path: currentPath,
        page_title: document.title,
      });
    }
  }, [location]);
};
