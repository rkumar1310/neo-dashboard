import { auth0 } from '@/lib/auth0'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const session = await auth0.getSession()

  if (session) {
    return redirect('/dashboard')
  }

  return redirect('/auth/login')
}
