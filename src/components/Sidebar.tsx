'use client'

import Logo from '@/app/icon/Logo'
import Analytics from '@/app/icon/Analytics'
import Supervisor from '@/app/icon/Supervisor'
import NeoAI from '@/app/icon/NeoAi'
import Accounts from '@/app/icon/Accounts'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'
import Logout from '@/app/icon/Logout'

export default function Sidebar({
  user,
  onSignOut,
}: {
  user: any
  onSignOut: () => void
}) {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside
      className={`flex flex-col justify-between border-r border-border bg-background transition-all duration-200 ${
        expanded ? 'w-64' : 'w-16 items-center'
      }`}
    >
      <div className="w-full">
        {/* Logo with border bottom and expand/collapse toggle */}
        <div className="relative box-content border-b border-border">
          <div
            className={`flex items-center gap-2 ${
              !expanded ? 'justify-center' : 'h-16 '
            }`}
          >
            {expanded && <Logo className="w-64" />}
          </div>
          <div
            className={`flex items-center ${
              !expanded ? 'h-16 justify-center' : ''
            }`}
          >
            <button
              type="button"
              aria-label="Toggle sidebar"
              onClick={() => setExpanded((v) => !v)}
              className={
                expanded
                  ? 'absolute bottom-0 right-0 z-20 translate-x-1/2 translate-y-1/2 rounded-full border border-border bg-background p-1 shadow-lg transition-colors hover:bg-accent'
                  : 'mx-auto rounded p-1 transition-colors hover:bg-accent'
              }
              style={
                expanded ? { boxShadow: '0 2px 8px rgba(0,0,0,0.08)' } : {}
              }
            >
              {expanded ? (
                <ChevronLeftIcon className="h-5 w-5" />
              ) : (
                <ChevronRightIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        {/* Menu */}
        <nav className="flex flex-col gap-2 py-4">
          <div>
            <div
              className={`mb-1 flex cursor-pointer items-center gap-2 p-1 font-medium text-muted-foreground hover:bg-accent ${
                expanded ? 'text-md pl-6' : 'justify-center'
              }`}
            >
              <Analytics className="h-5 w-5" />
              {expanded && 'Neo Analytics'}
            </div>
            {expanded && (
              <ul>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Dashboard
                </li>
              </ul>
            )}
          </div>
          <div className="mt-4">
            <div
              className={`mb-1 flex cursor-pointer items-center gap-2 p-1 font-medium text-muted-foreground hover:bg-accent ${
                expanded ? 'text-md pl-6' : 'justify-center'
              }`}
            >
              <Supervisor className="h-5 w-5" />
              {expanded && 'Supervisor'}
            </div>
            {expanded && (
              <ul>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  All Autotask
                </li>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  L1 Queue
                </li>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  L2 Queue
                </li>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Azure
                </li>
              </ul>
            )}
          </div>
          <div className="mt-4">
            <div
              className={`mb-1 flex cursor-pointer items-center gap-2 p-1 font-medium text-muted-foreground hover:bg-accent ${
                expanded ? 'text-md pl-6' : 'justify-center'
              }`}
            >
              <NeoAI className="h-5 w-5" />
              {expanded && 'Neo AI'}
            </div>
            {expanded && (
              <ul>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Chat Assistant
                </li>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Knowledge Base
                </li>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Skills
                </li>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Workflows{' '}
                  <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-800">
                    10
                  </span>
                </li>
              </ul>
            )}
          </div>
          <div className="mt-4">
            <div
              className={`mb-1 flex cursor-pointer items-center gap-2 p-1 font-medium text-muted-foreground hover:bg-accent ${
                expanded ? 'text-md pl-6' : 'justify-center'
              }`}
            >
              <Accounts className="h-5 w-5" />
              {expanded && 'Accounts'}
            </div>
            {expanded && (
              <ul>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Customers
                </li>
                <li
                  className={`cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Integrations
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
      {/* User Info Bottom Row */}
      <div
        className={`flex items-center gap-3 rounded-lg bg-muted/40 p-2 transition-all duration-200 ${
          expanded ? '' : 'flex-col p-1'
        }`}
      >
        <div className="flex flex-1 items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-muted text-lg font-bold text-primary">
            {(() => {
              const name = user?.user_metadata?.name
              const email = user?.email
              if (name) {
                const parts = name.trim().split(' ')
                if (parts.length === 1) return parts[0][0]?.toUpperCase()
                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
              }
              if (email) return email.slice(0, 2).toUpperCase()
              return 'U'
            })()}
          </div>
          <div>
            <div className="text-xs leading-tight text-muted-foreground">
              Helpdesk Technician
            </div>
            <div className="text-xs font-semibold leading-tight">
              {user?.user_metadata?.name || user?.email || 'User Name'}
            </div>
          </div>
        </div>
        <form action={onSignOut}>
          <Button size="sm" variant="ghost">
            <Logout className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </aside>
  )
}
