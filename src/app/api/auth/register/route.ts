import { NextResponse } from 'next/server'
import db from '@/db'
import { usersTable } from '@/db/schema'
import { eq } from 'drizzle-orm'
import * as bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  if (!name || !email || !password)
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

  // check for existing user
  const exists = await db.query.usersTable.findFirst({
    where: eq(usersTable.email, email),
  })
  if (exists)
    return NextResponse.json({ error: 'Email already in use' }, { status: 409 })

  const hashed = bcrypt.hashSync(password, 10)
  const [user] = await db
    .insert(usersTable)
    .values({ name, email, password: hashed })
    .returning()
  return NextResponse.json({ id: user.id, email: user.email, name: user.name }, { status: 201 })
}