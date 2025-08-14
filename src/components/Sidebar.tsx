'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChart3, Play, User, Settings, Coins } from 'lucide-react'

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps): JSX.Element {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'videos', label: 'Watch & Earn', icon: Play },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-6">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Coins className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">O'Watch.ID</h1>
            <p className="text-xs text-gray-500">Watch to Earn</p>
          </div>
        </div>
      </div>

      {/* Token Balance Card */}
      <Card className="p-4 mb-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Coins className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-600">Balance</span>
          </div>
          <div className="text-2xl font-bold text-purple-600">1,247</div>
          <div className="text-xs text-gray-500">OWATCH tokens</div>
        </div>
      </Card>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          
          return (
            <Button
              key={item.id}
              variant={isActive ? 'default' : 'ghost'}
              className={`w-full justify-start gap-3 h-12 ${
                isActive 
                  ? 'bg-purple-600 text-white hover:bg-purple-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon className="w-5 h-5" />
              {item.label}
              {item.id === 'videos' && (
                <Badge variant="secondary" className="ml-auto bg-green-100 text-green-700">
                  New
                </Badge>
              )}
            </Button>
          )
        })}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-6 left-6 right-6">
        <Card className="p-3 bg-gray-50">
          <div className="text-xs text-gray-500 text-center">
            <div className="font-medium">Daily Goal</div>
            <div className="mt-1">Watch 30 min to earn 50 OWATCH</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-purple-600 h-2 rounded-full w-3/5"></div>
            </div>
            <div className="mt-1">18/30 min completed</div>
          </div>
        </Card>
      </div>
    </div>
  )
}