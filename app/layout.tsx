import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Fit Life',
  description: 'Perfil — Fit Life'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
