import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user has an auth token (you might use a session or other form of auth check)
  const authToken = request.cookies.get('authToken');

  // Define the route that requires authentication
  const protectedRoute = '/dashboard/devis';

  // If the user tries to access the protected route without an auth token, redirect them to the login page
  if (request.nextUrl.pathname === protectedRoute && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Allow request to proceed if authenticated or accessing non-protected routes
  return NextResponse.next();
}

// Apply the middleware to only specific paths
export const config = {
  matcher: ['/dashboard/:path*'],
};
