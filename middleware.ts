import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Placeholder middleware for authentication
  // Will be implemented when Supabase integration is added

  // Protected routes that will require authentication
  const protectedRoutes = ["/seller", "/admin", "/profile", "/orders"]
  const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))

  if (isProtectedRoute) {
    // TODO: Check authentication status with Supabase
    // For now, allow all access
    // When Supabase is integrated, redirect to /login if not authenticated
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/seller/:path*", "/admin/:path*", "/profile/:path*", "/orders/:path*"],
}
