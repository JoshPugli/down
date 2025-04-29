'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (res?.error) return setError(res.error)
    router.push('/')
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 max-w-sm mx-auto">
      {error && <p className="text-red-500">{error}</p>}
      <input placeholder="Email"    type="email"    value={email}    onChange={e => setEmail(e.target.value)}    className="p-2 border" />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="p-2 border" />
      <button type="submit" className="p-2 bg-green-600 text-white">Login</button>
    </form>
  )
}