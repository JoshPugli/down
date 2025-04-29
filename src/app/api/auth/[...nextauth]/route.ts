// src/app/api/auth/[...nextauth]/route.ts
import { getUserByEmail } from '@/lib/user-service';
import * as bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import NextAuth from 'next-auth'


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          // Add logic to verify credentials here
          if (!credentials) return null
          const { email, password } = credentials
          
          if (!email || !password) return null
          if (typeof email !== 'string') return null
          if (typeof password !== 'string') return null

          const user = await getUserByEmail(email)
          if (user && bcrypt.compareSync(password, user.password)) {
            return { id: user.id.toString(), name: user.name, email: user.email }
          } else {
            throw new Error('Invalid credentials')
          }
        },
      }),
  ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
