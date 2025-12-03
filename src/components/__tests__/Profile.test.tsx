import React from 'react'
import { render, screen } from '@testing-library/react'
import Profile from '../Profile'

describe('Profile component', () => {
  it('renders profile header and plan badge', () => {
    render(<Profile />)

    expect(screen.getByText(/Soldado FIT/i)).toBeInTheDocument()
    expect(screen.getByText(/PLANO ANUAL ATIVO/i)).toBeInTheDocument()
  })

  it('shows personal data fields', () => {
    render(<Profile />)

    expect(screen.getByText(/Objetivo/i)).toBeInTheDocument()
    expect(screen.getByText(/Perda de Gordura/i)).toBeInTheDocument()
    expect(screen.getByText(/Peso Atual/i)).toBeInTheDocument()
  })

  it('has a logout button', () => {
    render(<Profile />)

    expect(screen.getByText(/Sair da Conta/i)).toBeInTheDocument()
  })
})
