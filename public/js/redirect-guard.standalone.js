/*! redirect-guard.dynamic.js - security-first, dynamic URLs */
(function () {
  "use strict";

  const CONFIG = Object.freeze({
    allowedHostnames: Object.freeze([
      location.hostname // sempre considera il dominio attuale come interno
    ]),
    title: "Stai per lasciare il sito di schema.gov",
    message:
      "Stai per visitare un sito esterno. Sei sicuro di voler continuare?"
  });

  let modalRoot = null;
  let lastFocusedElement = null;
  let restoredOverflow = "";
  let previousBodyAriaHidden = null;

  // Rendiamo origOpen disponibile nello scope superiore per poterlo riutilizzare
  let origOpen = window.open;

  onceConfigure();

  function onceConfigure() {
    // Intercetta click su <a>
    document.addEventListener("click", onDocumentClick, true);

    // Intercetta window.open
    origOpen = window.open;
    window.open = function (url, target, features) {
      if (shouldBlock(url)) {
        showConfirm(url, () => origOpen.call(window, url, target, features));
        return null;
      }
      return origOpen.call(window, url, target, features);
    };
  }

  function onDocumentClick(event) {
    const a = event.target.closest("a");
    if (!a || !a.href) return;

    if (shouldBlock(a.href)) {
      event.preventDefault();
      showConfirm(a.href, () => {
        // usa origOpen per evitare che l'override ritriggeri il guard
        origOpen.call(
          window,
          a.href,
          a.target || "_blank",
          "noopener,noreferrer"
        );
      });
    }
  }

  function shouldBlock(url) {
    try {
      const u = new URL(url, location.href);
      const isHttp = ["https:", "http:"].includes(u.protocol);
      const isSecure = u.protocol === "https:";
      const isAllowed = CONFIG.allowedHostnames.includes(
        u.hostname.toLowerCase()
      );
      return isHttp && !isAllowed && isSecure;
    } catch {
      return false;
    }
  }

  function showConfirm(url, onConfirm) {
    const u = new URL(url);
    const hostname = u.hostname;
    openConfirmModal({
      title: CONFIG.title,
      message: CONFIG.message,
      hostname,
      onConfirm,
      onCancel: () => {}
    });
  }

  // --- Popup identico a quello del tuo script originale ---
  function openConfirmModal({ title, message, hostname, onConfirm, onCancel }) {
    if (modalRoot && document.body.contains(modalRoot)) return;

    const host = document.createElement("div");
    host.setAttribute("role", "dialog");
    host.setAttribute("aria-modal", "true");
    host.style.position = "fixed";
    host.style.inset = "0";
    host.style.display = "grid";
    host.style.placeItems = "center";
    host.style.backgroundColor = "rgba(0,0,0,0.45)";
    host.style.zIndex = "2147483647";

    const shadow = host.attachShadow({ mode: "open" });

    const card = document.createElement("div");
    card.style.minWidth = "300px";
    card.style.maxWidth = "92vw";
    card.style.backgroundColor = "#fff";
    card.style.borderRadius = "14px";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
    card.style.padding = "18px";
    card.style.fontFamily =
      'system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial';
    card.style.color = "#111";
    card.style.lineHeight = "1.4";

    const h = document.createElement("h2");
    h.style.margin = "0 0 8px 0";
    h.style.fontSize = "18px";
    h.textContent = title;

    const p = document.createElement("p");
    p.style.margin = "0 0 12px 0";
    p.style.fontSize = "14px";
    p.textContent = `${message}`;
    const destinationLine = document.createElement("span");
    destinationLine.textContent = `Destinazione: ${hostname}`;
    p.append(document.createElement("br"), destinationLine);

    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.gap = "8px";
    row.style.justifyContent = "flex-end";
    row.style.marginTop = "8px";

    const btnNo = document.createElement("button");
    btnNo.textContent = "Annulla";
    styleButton(btnNo, false);

    const btnYes = document.createElement("button");
    btnYes.textContent = "Continua";
    styleButton(btnYes, true);

    lastFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    restoredOverflow = document.body.style.overflow;
    previousBodyAriaHidden = document.body.getAttribute("aria-hidden");
    document.body.style.overflow = "hidden";

    function cleanup() {
      if (lastFocusedElement) lastFocusedElement.focus();
      if (previousBodyAriaHidden === null) {
        document.body.removeAttribute("aria-hidden");
      } else {
        document.body.setAttribute("aria-hidden", previousBodyAriaHidden);
      }
      document.body.style.overflow = restoredOverflow;
      if (host && document.body.contains(host)) document.body.removeChild(host);
      modalRoot = null;
    }

    btnYes.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      cleanup();
      onConfirm?.();
    });
    btnNo.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      cleanup();
      onCancel?.();
    });

    row.append(btnNo, btnYes);
    card.append(h, p, row);
    shadow.append(card);
    document.body.appendChild(host);
    modalRoot = host;
    try {
      btnYes.focus();
    } catch {}
  }

  function styleButton(btn, primary) {
    btn.style.padding = "10px 12px";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";
    btn.style.border = primary ? "1px solid #0b5cff" : "1px solid #ccc";
    btn.style.background = primary ? "#0b5cff" : "#f6f6f6";
    btn.style.color = primary ? "#fff" : "#111";
  }
})();
