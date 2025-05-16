interface PageProps {
  params: {
    slug: string[]
  }
}

export default function DashboardPage({ params }: PageProps) {
  const pageName = params.slug ? params.slug.join('/') : 'Dashboard'

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Current Page: {pageName}</h1>
      <p className="text-muted-foreground">
        This is a catch-all route that will display any nested dashboard pages.
      </p>
    </div>
  )
}
