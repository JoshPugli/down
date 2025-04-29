// src/app/api/auth/token/route.ts

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
  const getCookies = await cookies()
  const nextAuthSession = getCookies.get('next-auth.session-token')?.value || ''

  return NextResponse.json({ token: nextAuthSession }, { status: 200 })
}