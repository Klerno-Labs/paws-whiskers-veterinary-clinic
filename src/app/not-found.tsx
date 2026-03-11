import Link from 'next/link'
import { PawPrint } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
        <PawPrint className="w-10 h-10" />
      </div>
      <h1 className="font-heading font-bold text-6xl text-secondary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-md">
        Oops! We couldn't find the page you're looking for. Maybe it moved to a new territory?
      </p>
      <Button size="lg" asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  )
}