import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-2xl font-bold mb-4">Bem-vindo ao Fit Life</h1>
        <p className="text-gray-400 mb-6">Abra seu perfil para ver suas informações.</p>
        <a
          href="/profile"
          className="inline-block bg-[#F2C744] text-[#000000] font-bold px-6 py-3 rounded-lg"
        >
          Ver Perfil
        </a>
      </div>
    </main>
  )
}
