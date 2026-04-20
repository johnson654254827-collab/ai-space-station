"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Rocket, CheckCircle, Loader2 } from 'lucide-react';

interface WaitlistFormProps {
  variant?: 'default' | 'compact';
}

export default function WaitlistForm({ variant = 'default' }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('developer');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 这里将替换为实际的API端点
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, role }),
      });

      if (!response.ok) {
        throw new Error('提交失败，请稍后重试');
      }

      setSubmitted(true);
      setEmail('');
      setName('');
    } catch (err) {
      setError(err instanceof Error ? err.message : '提交失败');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`rounded-xl border border-green-500/30 bg-green-950/20 p-6 text-center backdrop-blur-sm ${variant === 'compact' ? 'p-4' : ''}`}>
        <CheckCircle className="size-12 mx-auto text-green-400 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">🎉 恭喜！您已加入等待列表</h3>
        <p className="text-gray-300">
          我们将在AI太空站正式发射时第一时间通知您。
          同时，您将收到我们的开发者指南与早期用户福利。
        </p>
        <div className="mt-4 text-sm text-gray-400">
          预计发射时间：2026年5月
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-blue-500/30 bg-gray-900/50 p-6 backdrop-blur-sm ${variant === 'compact' ? 'p-4' : ''}`}>
      <div className="flex items-center gap-3 mb-4">
        <Rocket className="size-6 text-blue-400" />
        <h3 className="text-xl font-bold text-white">🚀 加入早期访问计划</h3>
      </div>
      
      <p className="text-gray-300 mb-6">
        成为首批AI太空站探索者，享受专属福利：
        <br />
        <span className="text-sm">✓ 终身折扣优惠 ✓ 优先技术支持 ✓ 参与功能设计</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              姓名
            </label>
            <Input
              type="text"
              placeholder="您的姓名"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              邮箱
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            您的主要身份是？
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { value: 'developer', label: '开发者' },
              { value: 'creator', label: '内容创作者' },
              { value: 'business', label: '企业用户' },
              { value: 'student', label: '学生/研究者' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setRole(option.value)}
                className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                  role === option.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="rounded-lg bg-red-950/30 border border-red-500/30 p-3">
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 mr-2 animate-spin" />
              提交中...
            </>
          ) : (
            '立即加入等待列表'
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          提交即表示您同意我们的{' '}
          <a href="#" className="text-blue-400 hover:underline">隐私政策</a>。
          我们不会共享您的信息。
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-400">当前等待人数</div>
          <div className="text-white font-bold">1,247+</div>
        </div>
        <div className="mt-2 w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: '75%' }}
          />
        </div>
        <div className="mt-2 text-xs text-gray-400">
          目标 2,000 人 · 剩余席位有限
        </div>
      </div>
    </div>
  );
}