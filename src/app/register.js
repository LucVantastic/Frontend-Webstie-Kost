"use client";

import React, { useState } from 'react';
import { Home } from 'lucide-react';

export default function RegisterPage({ onNavigateToLogin, onRegister }) {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [email, setEmail] = useState('');
  const [nomorWhatsApp, setNomorWhatsApp] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    
    console.log("Data pendaftaran:", {
      namaLengkap,
      email,
      nomorWhatsApp,
      password
    });

    // Kembali ke halaman login setelah berhasil daftar
    if (onRegister) {
      onRegister();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      <div className="w-full max-w-md flex flex-col items-center p-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <Home className="w-10 h-10 text-blue-600 mb-4" strokeWidth={2.5} />
          <h1 className="text-2xl font-bold text-slate-800">d'cost boys D'K</h1>
          <p className="text-slate-500 font-medium mt-1">Buat akun calon penghuni</p>
        </div>

        {/* Card Form Section */}
        <div className="w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-slate-800">Register User</h2>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Daftar untuk menyimpan data booking dan melihat status pesanan.
            </p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col space-y-4">
            
            {/* Input Nama Lengkap */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-slate-500" htmlFor="namaLengkap">
                Nama Lengkap
              </label>
              <input
                id="namaLengkap"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-slate-500" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>

            {/* Input Nomor WhatsApp */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-slate-500" htmlFor="nomorWhatsApp">
                Nomor WhatsApp
              </label>
              <input
                id="nomorWhatsApp"
                type="tel"
                placeholder="Masukkan nomor WhatsApp"
                value={nomorWhatsApp}
                onChange={(e) => setNomorWhatsApp(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>

            {/* Input Password */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-slate-500" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Buat password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors mt-4 text-sm"
            >
              Daftar
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <button 
              onClick={onNavigateToLogin}
              type="button"
              className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors bg-transparent border-none cursor-pointer"
            >
              Sudah punya akun? Login
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
