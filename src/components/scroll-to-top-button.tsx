"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-[20vh] bg-white right-10 w-[48px] h-[48px] rounded-full border border-gray-400 grid place-content-center",
        isVisible ? "visible" : "hidden",
      )}
    >
      <ChevronUpIcon />
    </button>
  );
};
