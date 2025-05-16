'use client'

import Accounts from '@/app/icon/Accounts'
import Analytics from '@/app/icon/Analytics'
import Logo from '@/app/icon/Logo'
import Logout from '@/app/icon/Logout'
import NeoAI from '@/app/icon/NeoAI'
import Supervisor from '@/app/icon/Supervisor'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

export default function Sidebar({ user }: { user: any }) {
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
                <a
                  href="/dashboard"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Dashboard
                </a>
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
                <a
                  href="/dashboard/all-autotask"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  All Autotask
                </a>
                <a
                  href="/dashboard/l1-queue"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  L1 Queue
                </a>
                <a
                  href="/dashboard/l2-queue"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  L2 Queue
                </a>
                <a
                  href="/dashboard/azure"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Azure
                </a>
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
                <a
                  href="/dashboard/chat-assistant"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Chat Assistant
                </a>
                <a
                  href="/dashboard/knowledge-base"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Knowledge Base
                </a>
                <a
                  href="/dashboard/skills"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Skills
                </a>
                <a
                  href="/dashboard/workflows"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Workflows{' '}
                  <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-800">
                    10
                  </span>
                </a>
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
                <a
                  href="/dashboard/customers"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Customers
                </a>
                <a
                  href="/dashboard/integrations"
                  className={`block cursor-pointer rounded py-1 ${
                    expanded ? 'pl-12' : 'flex justify-center'
                  } hover:bg-accent`}
                >
                  Integrations
                </a>
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
        <form
          action={() => {
            window.location.href = '/auth/logout'
          }}
        >
          <Button size="sm" variant="ghost">
            <Logout className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </aside>
  )
}
