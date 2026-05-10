"use client";

import { useEffect } from "react";

export function LocalhostRedirect() {
  useEffect(() => {
    if (window.location.protocol === "http:" && window.location.hostname === "localhost") {
      const target = new URL(window.location.href);
      target.hostname = "127.0.0.1";
      window.location.replace(target.toString());
    }
  }, []);

  return null;
}
