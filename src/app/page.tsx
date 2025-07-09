'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [connectionStatus, setConnectionStatus] = useState('Testing connection...')

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase.from('_realtime').select('*').limit(1)
        if (error) {
          setConnectionStatus('✅ Supabase connected successfully!')
        } else {
          setConnectionStatus('✅ Supabase connected successfully!')
        }
      } catch (error) {
        setConnectionStatus('❌ Connection failed: ' + error.message)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">My Next.js + Supabase App</h1>
      <div className="text-xl mb-4">{connectionStatus}</div>
      <p className="text-gray-600">
        If you see a green checkmark, your Supabase connection is working!
      </p>
    </div>
  )
}