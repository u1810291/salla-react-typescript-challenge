"use client"
import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation';
import AuthHeader from './AuthHeader';
import MainHeader from './MainHeader';

export default function Header() {
  const segments = useSelectedLayoutSegment()
  return (
    <header className="w-full">
      {segments === 'auth' ? <AuthHeader/> : <MainHeader />}
    </header>
  )
}
