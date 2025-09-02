"use client";

import dynamic from 'next/dynamic';
import { VideoContent } from "@/components/dashboard/VideoContent";

// Dynamically import wallet button to avoid SSR issues
const WalletButton = dynamic(
  () => import('@/components/WalletButton').then(mod => ({ default: mod.WalletButton })),
  {
    ssr: false,
    loading: () => <div className="w-32 h-10 bg-gray-700 rounded animate-pulse"></div>
  }
);

export default function VideosPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Wallet Button di Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <WalletButton />
      </div>

      {/* Main Content */}
      <div className="pt-16">
        <VideoContent />
      </div>
    </div>
  );
}
