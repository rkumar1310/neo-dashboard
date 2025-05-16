import { cookies } from 'next/headers'
import { createServerClient } from '@/utils/supabase'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import {
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Logo from './icon/Logo'
import Analytics from './icon/Analytics'
import Supervisor from './icon/Supervisor'
import NeoAI from './icon/NeoAi'
import Accounts from './icon/Accounts'
import ThemeToggle from '@/components/ThemeToggle'
import Sidebar from '@/components/Sidebar'

export default async function DashboardPage() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }

  const signOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/login')
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar user={user} onSignOut={signOut} />
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="box-content flex h-16 items-center justify-between border-b border-border bg-background px-8">
          <h1 className="text-xl font-bold">Supervisor</h1>
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="outline"
              className="relative rounded-xl"
            >
              <BellIcon className="h-5 w-5" />
              <span className="absolute right-1 top-1 block h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            {/* Theme Toggle */}
            <ThemeToggle side="bottom" />
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 rounded-xl"
                >
                  <span role="img" aria-label="US Flag">
                    🇺🇸
                  </span>
                  <span className="text-xs">Eng (US)</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Eng (US)</DropdownMenuItem>
                <DropdownMenuItem>Français (FR)</DropdownMenuItem>
                <DropdownMenuItem>Deutsch (DE)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        {/* Main Content Placeholder */}
        <main className="flex-1 bg-muted/50 p-10">
          <div className="text-2xl font-semibold text-muted-foreground">
            Welcome to the Supervisor Dashboard
          </div>
        </main>
      </div>
    </div>
  )
}
