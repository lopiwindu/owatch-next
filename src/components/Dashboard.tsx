'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
// import { Progress } from '@/components/ui/progress'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Coins, 
  Clock, 
  TrendingUp, 
  Eye, 
  Trophy, 
  Calendar,
  PlayCircle,
  Target
} from 'lucide-react'

export function Dashboard(): JSX.Element {
  const stats = [
    {
      title: 'Total Earnings',
      value: '1,247',
      unit: 'OWATCH',
      change: '+12.5%',
      changeType: 'positive' as const,
      icon: Coins
    },
    {
      title: 'Watch Time Today',
      value: '2h 18m',
      unit: '',
      change: '+45min',
      changeType: 'positive' as const,
      icon: Clock
    },
    {
      title: 'Videos Watched',
      value: '23',
      unit: 'videos',
      change: '+5',
      changeType: 'positive' as const,
      icon: Eye
    },
    {
      title: 'Streak',
      value: '7',
      unit: 'days',
      change: 'New record!',
      changeType: 'positive' as const,
      icon: Trophy
    }
  ]

  const recentEarnings = [
    { title: 'Tech Review: iPhone 15', earnings: 25, duration: '8 min', time: '2 hours ago' },
    { title: 'Crypto Market Analysis', earnings: 35, duration: '12 min', time: '4 hours ago' },
    { title: 'Gaming Setup Tour', earnings: 20, duration: '6 min', time: '6 hours ago' },
    { title: 'NFT Collection Showcase', earnings: 30, duration: '10 min', time: '8 hours ago' },
    { title: 'DeFi Protocol Review', earnings: 40, duration: '15 min', time: '1 day ago' }
  ]

  const weeklyData = [
    { day: 'Mon', earnings: 120, watchTime: 85 },
    { day: 'Tue', earnings: 150, watchTime: 92 },
    { day: 'Wed', earnings: 180, watchTime: 110 },
    { day: 'Thu', earnings: 90, watchTime: 65 },
    { day: 'Fri', earnings: 200, watchTime: 125 },
    { day: 'Sat', earnings: 160, watchTime: 95 },
    { day: 'Sun', earnings: 140, watchTime: 88 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Track your earnings and watch progress</p>
        </div>
        <Badge variant="secondary" className="bg-green-100 text-green-700 w-fit">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Online
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                      {stat.unit && <span className="text-sm text-gray-500">{stat.unit}</span>}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-600">{stat.change}</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Weekly Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                      <span>Earnings</span>
                      <span>{day.earnings} OWATCH</span>
                    </div>
                    {/* <Progress value={(day.earnings / 200) * 100} className="h-2" /> */}
                  </div>
                  <div className="text-sm text-gray-500">{day.watchTime}min</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Goals & Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Goals & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Daily Goal */}
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Daily Watch Goal</h4>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">60%</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">Watch 30 minutes to earn 50 OWATCH</p>
              {/* <Progress value={60} className="h-2" /> */}
              <p className="text-xs text-gray-500 mt-1">18/30 minutes completed</p>
            </div>

            {/* Weekly Challenge */}
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">Weekly Challenge</h4>
                <Badge variant="secondary" className="bg-green-100 text-green-700">85%</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">Watch 50 videos this week</p>
              {/* a<Progress value={85} className="h-2" /> */}
              <p className="text-xs text-gray-500 mt-1">42/50 videos completed</p>
            </div>

            {/* Recent Achievement */}
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <div>
                <h4 className="font-medium text-gray-900">Achievement Unlocked!</h4>
                <p className="text-sm text-gray-600">7-day watch streak completed</p>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 mt-1">
                  +100 OWATCH Bonus
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Earnings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="w-5 h-5" />
            Recent Earnings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentEarnings.map((earning, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <PlayCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{earning.title}</h4>
                    <p className="text-sm text-gray-500">{earning.duration} • {earning.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">+{earning.earnings}</div>
                  <div className="text-xs text-gray-500">OWATCH</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
