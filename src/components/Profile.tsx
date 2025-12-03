"use client";

import React from "react";
import { User, Settings, Bell, HelpCircle, FileText, LogOut, ChevronRight } from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#000000] px-4 py-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-[#0A1930] to-[#2C2C2C] rounded-lg p-6 border border-[#0F62FE]/30">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-[#F2C744] rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-[#000000]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Soldado FIT</h2>
            <p className="text-gray-400 text-sm">Membro desde Jan 2024</p>
            <div className="mt-2 inline-flex items-center gap-2 bg-[#F2C744] text-[#000000] px-3 py-1 rounded-full text-xs font-bold">
              PLANO ANUAL ATIVO
            </div>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="bg-[#2C2C2C] border border-[#0F62FE]/30 rounded-lg p-4 space-y-3">
        <h3 className="text-white font-bold text-lg mb-4">Dados Pessoais</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-[#0A1930]">
            <span className="text-gray-400 text-sm">Objetivo</span>
            <span className="text-white font-semibold text-sm">Perda de Gordura</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#0A1930]">
            <span className="text-gray-400 text-sm">Nível</span>
            <span className="text-white font-semibold text-sm">Intermediário</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#0A1930]">
            <span className="text-gray-400 text-sm">Altura</span>
            <span className="text-white font-semibold text-sm">175 cm</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#0A1930]">
            <span className="text-gray-400 text-sm">Peso Atual</span>
            <span className="text-white font-semibold text-sm">82.5 kg</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-400 text-sm">Frequência Semanal</span>
            <span className="text-white font-semibold text-sm">5x por semana</span>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-[#2C2C2C] border border-[#0F62FE]/30 rounded-lg p-4 space-y-3">
        <h3 className="text-white font-bold text-lg mb-4">Preferências</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center py-2 border-b border-[#0A1930]">
            <span className="text-gray-400 text-sm">Equipamentos</span>
            <span className="text-white font-semibold text-sm">Academia Completa</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-[#0A1930]">
            <span className="text-gray-400 text-sm">Refeições/Dia</span>
            <span className="text-white font-semibold text-sm">5 refeições</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-400 text-sm">Restrições</span>
            <span className="text-white font-semibold text-sm">Nenhuma</span>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="space-y-3">
        <button className="w-full bg-[#2C2C2C] hover:bg-[#0A1930] border border-[#0F62FE]/30 rounded-lg p-4 flex items-center justify-between transition-all">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-[#0F62FE]" />
            <span className="text-white font-semibold text-sm">Configurações</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-[#2C2C2C] hover:bg-[#0A1930] border border-[#0F62FE]/30 rounded-lg p-4 flex items-center justify-between transition-all">
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-[#0F62FE]" />
            <span className="text-white font-semibold text-sm">Notificações</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-[#2C2C2C] hover:bg-[#0A1930] border border-[#0F62FE]/30 rounded-lg p-4 flex items-center justify-between transition-all">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#0F62FE]" />
            <span className="text-white font-semibold text-sm">FAQ e Suporte</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        <button className="w-full bg-[#2C2C2C] hover:bg-[#0A1930] border border-[#0F62FE]/30 rounded-lg p-4 flex items-center justify-between transition-all">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#0F62FE]" />
            <span className="text-white font-semibold text-sm">Termos e Privacidade</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Subscription Management */}
      <div className="bg-gradient-to-r from-[#0A1930] to-[#2C2C2C] border border-[#F2C744]/50 rounded-lg p-4">
        <h3 className="text-white font-bold text-sm mb-2">Gerenciar Assinatura</h3>
        <p className="text-gray-400 text-xs mb-4">
          Plano Anual • Renovação em 15/12/2024
        </p>
        <button className="w-full bg-[#F2C744] hover:bg-[#F2C744]/90 text-[#000000] font-bold py-3 rounded-lg transition-all">
          Fazer Upgrade
        </button>
      </div>

      {/* Logout */}
      <button className="w-full bg-[#2C2C2C] hover:bg-red-900/20 border border-red-500/30 rounded-lg p-4 flex items-center justify-center gap-3 transition-all">
        <LogOut className="w-5 h-5 text-red-500" />
        <span className="text-red-500 font-semibold text-sm">Sair da Conta</span>
      </button>

      {/* App Version */}
      <div className="text-center text-gray-600 text-xs py-4">
        FIT LIFE PRO v1.0.0
      </div>
    </div>
  );
}
