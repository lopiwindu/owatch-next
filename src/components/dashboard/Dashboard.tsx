"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Coins,
  Clock,
  TrendingUp,
  Eye,
  Trophy,
  Calendar,
  PlayCircle,
  Target,
} from "lucide-react";

export function Dashboard(): JSX.Element {
  const stats = [
    {
      title: "Total Earnings",
      value: "1,247",
      unit: "OWATCH",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Coins,
    },
    {
      title: "Watch Time Today",
      value: "2h 18m",
      unit: "",
      change: "+45min",
      changeType: "positive" as const,
      icon: Clock,
    },
    {
      title: "Videos Watched",
      value: "23",
      unit: "videos",
      change: "+5",
      changeType: "positive" as const,
      icon: Eye,
    },
    {
      title: "Streak",
      value: "7",
      unit: "days",
      change: "New record!",
      changeType: "positive" as const,
      icon: Trophy,
    },
  ];

  const recentEarnings = [
    {
      title: "Tech Review: iPhone 15",
      earnings: 25,
      duration: "8 min",
      time: "2 hours ago",
    },
    {
      title: "Crypto Market Analysis",
      earnings: 35,
      duration: "12 min",
      time: "4 hours ago",
    },
    {
      title: "Gaming Setup Tour",
      earnings: 20,
      duration: "6 min",
      time: "6 hours ago",
    },
    {
      title: "NFT Collection Showcase",
      earnings: 30,
      duration: "10 min",
      time: "8 hours ago",
    },
    {
      title: "DeFi Protocol Review",
      earnings: 40,
      duration: "15 min",
      time: "1 day ago",
    },
  ];

  const weeklyData = [
    { day: "Mon", earnings: 120, watchTime: 85 },
    { day: "Tue", earnings: 150, watchTime: 92 },
    { day: "Wed", earnings: 180, watchTime: 110 },
    { day: "Thu", earnings: 90, watchTime: 65 },
    { day: "Fri", earnings: 200, watchTime: 125 },
    { day: "Sat", earnings: 160, watchTime: 95 },
    { day: "Sun", earnings: 140, watchTime: 88 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="relative z-10 space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-white">
              Dashboard
            </h1>
            <p className="text-slate-300 mt-1">
              Track your earnings and watch progress
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-300 border-green-500/30 w-fit"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Online
            </Badge>
            <ThemeToggle />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-400">
                        {stat.title}
                      </p>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-2xl font-bold text-white">
                          {stat.value}
                        </span>
                        {stat.unit && (
                          <span className="text-sm text-slate-400">
                            {stat.unit}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-xs text-green-400">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weekly Overview */}
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Calendar className="w-5 h-5 text-purple-400" />
                Weekly Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 text-sm font-medium text-slate-400">
                      {day.day}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                        <span>Earnings</span>
                        <span>{day.earnings} OWATCH</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(day.earnings / 200) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400">
                      {day.watchTime}min
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Goals & Achievements */}
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Target className="w-5 h-5 text-purple-400" />
                Goals & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Daily Goal */}
              <div className="p-4 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Daily Watch Goal</h4>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                  >
                    60%
                  </Badge>
                </div>
                <p className="text-sm text-slate-300 mb-2">
                  Watch 30 minutes to earn 50 OWATCH
                </p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  18/30 minutes completed
                </p>
              </div>

              {/* Weekly Challenge */}
              <div className="p-4 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">Weekly Challenge</h4>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-300 border-green-500/30"
                  >
                    85%
                  </Badge>
                </div>
                <p className="text-sm text-slate-300 mb-2">
                  Watch 50 videos this week
                </p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  42/50 videos completed
                </p>
              </div>

              {/* Recent Achievement */}
              <div className="flex items-center gap-3 p-3 bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 rounded-lg">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <div>
                  <h4 className="font-medium text-white">
                    Achievement Unlocked!
                  </h4>
                  <p className="text-sm text-slate-300">
                    7-day watch streak completed
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mt-1"
                  >
                    +100 OWATCH Bonus
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Earnings */}
        <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <PlayCircle className="w-5 h-5 text-purple-400" />
              Recent Earnings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentEarnings.map((earning, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">
                        {earning.title}
                      </h4>
                      <p className="text-sm text-slate-400">
                        {earning.duration} • {earning.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-400">
                      +{earning.earnings}
                    </div>
                    <div className="text-xs text-slate-400">OWATCH</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
