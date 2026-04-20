import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// 定义需要保护的路由
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api/keys(.*)',
  '/api/billing(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // 跳过静态文件、API路由（除了需要保护的）
    '/((?!_next/static|_next/image|favicon.ico|api/waitlist).*)',
    // 总是运行中间件
    '/(api|trpc)(.*)',
  ],
};