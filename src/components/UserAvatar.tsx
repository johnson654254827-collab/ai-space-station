"use client";

import { useSession, signOut } from "next-auth/react";
import { User, LogOut, Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function UserAvatar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (status === "loading") {
    return (
      <div className="size-10 rounded-full bg-gray-700 animate-pulse"></div>
    );
  }

  if (!session) {
    return (
      <a
        href="/sign-in"
        className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-700 hover:to-purple-700"
      >
        登录 / 注册
      </a>
    );
  }

  const user = session.user;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 rounded-full border border-gray-700 bg-gray-800/50 px-3 py-2 hover:bg-gray-800 transition-colors"
      >
        {user?.image ? (
          <img
            src={user.image}
            alt={user.name || "用户头像"}
            className="size-8 rounded-full"
          />
        ) : (
          <div className="size-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <User className="size-4 text-white" />
          </div>
        )}
        <div className="text-left hidden sm:block">
          <div className="text-sm font-medium text-white">
            {user?.name || "用户"}
          </div>
          <div className="text-xs text-gray-400">
            {user?.email || "GitHub用户"}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-gray-800 bg-gray-900/95 backdrop-blur-sm shadow-xl z-50">
          <div className="p-4 border-b border-gray-800">
            <div className="font-medium text-white">{user?.name || "用户"}</div>
            <div className="text-sm text-gray-400 truncate">
              {user?.email || "GitHub用户"}
            </div>
          </div>
          
          <div className="p-2">
            <a
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Settings className="size-4" />
              控制台
            </a>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-red-500/20 hover:text-red-300 w-full transition-colors"
            >
              <LogOut className="size-4" />
              退出登录
            </button>
          </div>
          
          <div className="border-t border-gray-800 p-3">
            <div className="text-xs text-gray-500">
              通过 GitHub 登录
            </div>
          </div>
        </div>
      )}
    </div>
  );
}