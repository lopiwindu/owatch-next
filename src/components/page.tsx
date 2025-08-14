 'use client'

import { useState } from 'react'
import { Dashboard } from '@/components/dashboard'
import { VideoContent } from '@/components/video-content'
import { UserProfile } from '@/components/user-profile'
import { Settings } from '@/components/settings'
import { Sidebar } from '@/components/sidebar'
import { MobileNav } from '@/components/mobile-nav'

export default function DashboardPage(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>('dashboard')

  const renderContent = (): JSX.Element => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />
      case 'videos':
        return <VideoContent />
      case 'profile':
        return <UserProfile />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-64">
          <div className="p-4 lg:p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  )
}