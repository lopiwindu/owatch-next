"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { Play, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import wallet button to avoid SSR issues
const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then((mod) => ({
      default: mod.WalletMultiButton,
    })),
  {
    ssr: false,
    loading: () => (
      <Button
        disabled
        size="sm"
        className="bg-purple-600 text-white px-4 py-2 text-sm"
      >
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
        Loading...
      </Button>
    ),
  }
);

interface LandingNavbarProps {
  // Reserved for future use
}

export function LandingNavbar({}: LandingNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", onClick: () => scrollToSection("hero") },
    { label: "How It Works", onClick: () => scrollToSection("how-it-works") },
    { label: "Features", onClick: () => scrollToSection("features") },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 shadow-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="h-4 w-4 text-white" />
            </div>
            <span className="text-white font-bold text-lg">O'Watch.ID</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <WalletMultiButton
              className="!bg-gradient-to-r !from-purple-500 !to-pink-500 hover:!from-purple-600 hover:!to-pink-600 !text-white !px-4 !py-2 !text-sm !rounded-lg !font-medium !transition-all !border-0"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <WalletMultiButton
                  className="!bg-gradient-to-r !from-purple-500 !to-pink-500 hover:!from-purple-600 hover:!to-pink-600 !text-white !px-4 !py-2 !text-sm !rounded-lg !font-medium !transition-all !border-0 !w-full"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}