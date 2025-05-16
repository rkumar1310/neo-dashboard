import Sidebar from '@/components/Sidebar'
import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BellIcon } from '@radix-ui/react-icons'
import { auth0 } from '@/lib/auth0'
import { redirect } from 'next/navigation'
import HeaderTitle from '@/components/HeaderTitle'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth0.getSession()
  if (!session) {
    return redirect('/auth/login')
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar user={session.user} />
      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="box-content flex h-16 items-center justify-between border-b border-border bg-background px-8">
          <HeaderTitle />
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
        {/* Main Content */}
        <main className="flex-1 bg-muted/50">{children}</main>
      </div>
    </div>
  )
}
