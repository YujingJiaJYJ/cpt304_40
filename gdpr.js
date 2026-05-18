"use strict";

// GDPR: Cookie Banner + Privacy Policy
// Uses localStorage to remember consent. No actual cookies are set.
// Call initGdpr() once on app load (after i18n is ready).

const CONSENT_KEY = "financeTrackerConsent";

const initGdpr = () => {
  // Don't show banner if user already responded
  if (storageAvailable && !localStorage.getItem(CONSENT_KEY)) {
    showCookieBanner();
  }
};

const showCookieBanner = () => {
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.style.display = "flex";
};

const hideCookieBanner = () => {
  const banner = document.getElementById("cookieBanner");
  if (banner) banner.style.display = "none"; // hide banner
};

const openPrivacyModal = () => {
  const modal = document.getElementById("privacyModal");
  if (modal) modal.classList.add("is-open");
};

const closePrivacyModal = () => {
  const modal = document.getElementById("privacyModal");
  if (modal) modal.classList.remove("is-open");
};

// Apply translated text to GDPR elements
const renderGdprText = () => {
  const set = (id, key) => {
    const el = document.getElementById(id);
    if (el) el.textContent = i18n.t(key);
  };
  set("cookieText", "cookieText");
  set("cookieAcceptBtn", "cookieAccept");
  set("cookieDeclineBtn", "cookieDecline");
  set("cookiePrivacyLink", "privacyLink");
  set("privacyTitle", "privacyTitle");
  set("privacyBody", "privacyBody");
  set("privacyCloseBtn", "privacyClose");
};

// Wire up GDPR events (called once from initializeApp)
const initGdprEvents = () => {
  document.getElementById("cookieAcceptBtn")?.addEventListener("click", () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    hideCookieBanner();
  });

  document.getElementById("cookieDeclineBtn")?.addEventListener("click", () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    hideCookieBanner();
  });

  document.getElementById("cookiePrivacyLink")?.addEventListener("click", (e) => {
    e.preventDefault();
    openPrivacyModal();
  });

  document.getElementById("privacyCloseBtn")?.addEventListener("click", closePrivacyModal);

  // Close privacy modal on backdrop click
  document.getElementById("privacyModal")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("privacyModal")) closePrivacyModal();
  });
};