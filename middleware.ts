import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 简单中间件，不进行认证检查
// 所有路由都公开访问

export function middleware(request: NextRequest) {
  // 可以在这里添加日志、重定向等逻辑
  // 目前所有路由都允许访问
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // 匹配所有路由，除了静态文件
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};