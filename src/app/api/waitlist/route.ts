import { NextRequest, NextResponse } from 'next/server';

// 简单的内存存储（仅用于演示）
// 在生产环境中应替换为数据库
const waitlist: Array<{ email: string; name: string; role: string; timestamp: Date }> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, role } = body;

    // 基本验证
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: '请输入有效的邮箱地址' },
        { status: 400 }
      );
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: '请输入姓名' },
        { status: 400 }
      );
    }

    // 检查是否已存在
    const exists = waitlist.some(entry => entry.email === email);
    if (exists) {
      return NextResponse.json(
        { error: '该邮箱已加入等待列表' },
        { status: 409 }
      );
    }

    // 添加到内存存储
    waitlist.push({
      email: email.trim().toLowerCase(),
      name: name.trim(),
      role: role || 'developer',
      timestamp: new Date(),
    });

    console.log(`新的等待列表用户: ${name} <${email}> (${role})`);
    console.log(`当前等待人数: ${waitlist.length}`);

    // 在生产环境中，这里可以：
    // 1. 保存到数据库（如Supabase、PostgreSQL）
    // 2. 发送到邮件列表服务（如Mailchimp）
    // 3. 发送通知到Slack/Telegram

    return NextResponse.json(
      { 
        success: true, 
        message: '成功加入等待列表！',
        count: waitlist.length,
        position: waitlist.length,
        estimatedLaunch: '2026-05-01'
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('等待列表API错误:', error);
    return NextResponse.json(
      { error: '服务器内部错误，请稍后重试' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // 仅返回计数（不暴露具体信息）
  return NextResponse.json({
    count: waitlist.length,
    estimatedLaunch: '2026-05-01',
    status: 'accepting'
  });
}