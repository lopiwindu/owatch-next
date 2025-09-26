"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Card, Badge, ThemeToggle } from "@/components/ui";
import { BarChart3, Play, User, Settings, Coins } from "lucide-react";

export function Sidebar(): JSX.Element {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BarChart3,
      href: "/dashboard",
    },
    {
      id: "videos",
      label: "Watch & Earn",
      icon: Play,
      href: "/dashboard/videos",
    },
    { id: "profile", label: "Profile", icon: User, href: "/dashboard/profile" },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white/5 backdrop-blur-md border-r border-white/10 p-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Coins className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">O'Watch.ID</h1>
            <p className="text-xs text-slate-400">Watch to Earn</p>
          </div>
        </div>
      </div>

      {/* Token Balance Card */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Coins className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-slate-300">Balance</span>
          </div>
          <div className="text-2xl font-bold text-purple-400">1,247</div>
          <div className="text-xs text-slate-400">OWATCH tokens</div>
        </div>
      </Card>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={item.id} href={item.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={`w-full justify-start gap-3 h-12 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
                {item.id === "videos" && (
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-green-500/20 text-green-300 border-green-500/30"
                  >
                    New
                  </Badge>
                )}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="mt-6 flex justify-center">
        <ThemeToggle variant="outline" />
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <Card className="p-3 bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="text-xs text-slate-400 text-center">
            <div className="font-medium text-white">Daily Goal</div>
            <div className="mt-1">Watch 30 min to earn 50 OWATCH</div>
            <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/5"></div>
            </div>
            <div className="mt-1">18/30 min completed</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
