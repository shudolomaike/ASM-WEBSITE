import { AnalyticsEvent } from '../types';

export interface AnalyticsPayload {
  division?: string;
  product?: string;
  page?: string;
  campaign?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  [key: string]: any;
}

const analyticsLog: { event: AnalyticsEvent; payload: AnalyticsPayload; timestamp: string }[] = [];

/**
 * Centralized typed analytics wrapper (Section 27)
 * Safe client logger that forwards to dataLayer or analytics provider if present
 */
export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}): void {
  const enhancedPayload: AnalyticsPayload = {
    ...payload,
    timestamp: new Date().toISOString(),
    page: payload.page || (typeof window !== 'undefined' ? window.location.pathname : '/'),
    referrer: typeof document !== 'undefined' ? document.referrer : '',
  };

  analyticsLog.push({
    event,
    payload: enhancedPayload,
    timestamp: new Date().toISOString(),
  });

  // Keep last 100 events in memory
  if (analyticsLog.length > 100) {
    analyticsLog.shift();
  }

  // Safe dispatch to window.dataLayer if Google Analytics or GTM is present
  if (typeof window !== 'undefined') {
    const win = window as any;
    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event,
        ...enhancedPayload,
      });
    }
  }

  // Dev environment diagnostics
  if (process.env.NODE_ENV !== 'production') {
    // Helpful log for debugging event flow
    console.debug(`[ASMG Analytics] ${event}`, enhancedPayload);
  }
}

export function getRecentAnalyticsEvents() {
  return [...analyticsLog];
}
