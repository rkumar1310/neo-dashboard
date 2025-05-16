'use client'

import { usePathname } from 'next/navigation'

export default function HeaderTitle() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  const currentPage = segments[segments.length - 1] || 'Dashboard'
  const formattedName =
    currentPage.charAt(0).toUpperCase() + currentPage.slice(1)

  return (
    <div className="flex items-center gap-2">
      <h1 className="text-xl font-bold">NeoAI</h1>
      <span className="text-muted-foreground">/</span>
      <span className="text-muted-foreground">{formattedName}</span>
    </div>
  )
}
