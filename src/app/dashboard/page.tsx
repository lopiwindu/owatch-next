"use client";

import { useState } from "react";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { VideoContent } from "@/components/dashboard/VideoContent";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { Settings } from "@/components/dashboard/Settings";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";

export default function DashboardPage(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("dashboard");

  const renderContent = (): JSX.Element => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "videos":
        return <VideoContent />;
      case "profile":
        return <UserProfile />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="p-4 lg:p-8">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}
