"use client"; // Wajib ditambahin di paling atas kalau mau pakai state/interaksi di Next.js App Router

import React, { useState } from 'react';
import { Home } from 'lucide-react';
import RegisterPage from './register';
import DashboardPage from './dashboard';
import KamarPage from './daftarKamar';
import DetailKamarPage from './detailKamar';
import BookingPage from './booking';
import ContactPage from './contact';
import ProfilePage from './profile';
import DashboardAdminPage from './dashboardAdmin';
import DataKamarPage from './dataKamar';
import DataPenghuniPage from './dataPenghuni';
import PembayaranPage from './pembayaran';
import LaporanPage from './laporan';

export default function LoginPage() {
  const [view, setView] = useState('login');
  const [activeRoom, setActiveRoom] = useState(null);

  // 1. Buat state untuk nyimpen data yang diketik user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Buat fungsi untuk nanganin saat tombol login diklik
  const handleLogin = (e) => {
    e.preventDefault(); // Mencegah halaman nge-refresh saat form disubmit
    

    console.log("Data yang dikirim:", {
      email: email,
      password: password
    });

    if (email === 'admin' && password === 'admin123') {
      setView('dashboardAdmin');
    } else {
      setView('dashboard');
    }
  };

  if (view === 'register') {
    return (
      <RegisterPage 
        onNavigateToLogin={() => setView('login')} 
        onRegister={() => setView('login')}
      />
    );
  }

  if (view === 'dashboard') {
    return (
      <DashboardPage 
        onNavigateToProfile={() => setView('profile')} 
        onNavigateToKamar={() => setView('kamar')} 
        onNavigateToContact={() => setView('contact')}
        onNavigateToDetail={(room) => { setActiveRoom(room); setView('detailKamar'); }}
      />
    );
  }

  if (view === 'kamar') {
    return (
      <KamarPage 
        onNavigateToDashboard={() => setView('dashboard')} 
        onNavigateToContact={() => setView('contact')}
        onNavigateToProfile={() => setView('profile')} 
        onNavigateToDetail={(room) => { setActiveRoom(room); setView('detailKamar'); }}
      />
    );
  }

  if (view === 'detailKamar') {
    return (
      <DetailKamarPage 
        room={activeRoom}
        onNavigateToDashboard={() => setView('dashboard')}
        onNavigateToKamar={() => setView('kamar')}
        onNavigateToBooking={() => setView('booking')}
        onNavigateToContact={() => setView('contact')}
        onNavigateToProfile={() => setView('profile')}
      />
    );
  }

  if (view === 'booking') {
    return (
      <BookingPage 
        room={activeRoom}
        onNavigateToDashboard={() => setView('dashboard')}
        onNavigateToKamar={() => setView('kamar')}
        onNavigateToDetail={() => setView('detailKamar')}
        onNavigateToContact={() => setView('contact')}
        onNavigateToProfile={() => setView('profile')}
      />
    );
  }

  if (view === 'contact') {
    return (
      <ContactPage 
        onNavigateToDashboard={() => setView('dashboard')}
        onNavigateToKamar={() => setView('kamar')}
        onNavigateToProfile={() => setView('profile')}
      />
    );
  }

  if (view === 'profile') {
    return (
      <ProfilePage 
        onNavigateToDashboard={() => setView('dashboard')}
        onNavigateToKamar={() => setView('kamar')}
        onNavigateToContact={() => setView('contact')}
        onLogout={() => setView('login')}
      />
    );
  }

  if (view === 'dashboardAdmin') {
    return (
      <DashboardAdminPage 
        onNavigateToDataKamar={() => setView('dataKamar')}
        onNavigateToDataPenghuni={() => setView('dataPenghuni')}
        onNavigateToPembayaran={() => setView('pembayaran')}
        onNavigateToLaporan={() => setView('laporan')}
        onLogout={() => setView('login')} 
      />
    );
  }

  if (view === 'dataKamar') {
    return (
      <DataKamarPage 
        onNavigateToDashboardAdmin={() => setView('dashboardAdmin')}
        onNavigateToDataPenghuni={() => setView('dataPenghuni')}
        onNavigateToPembayaran={() => setView('pembayaran')}
        onNavigateToLaporan={() => setView('laporan')}
        onLogout={() => setView('login')}
      />
    );
  }

  if (view === 'dataPenghuni') {
    return (
      <DataPenghuniPage 
        onNavigateToDashboardAdmin={() => setView('dashboardAdmin')}
        onNavigateToDataKamar={() => setView('dataKamar')}
        onNavigateToPembayaran={() => setView('pembayaran')}
        onNavigateToLaporan={() => setView('laporan')}
        onLogout={() => setView('login')}
      />
    );
  }

  if (view === 'pembayaran') {
    return (
      <PembayaranPage 
        onNavigateToDashboardAdmin={() => setView('dashboardAdmin')}
        onNavigateToDataKamar={() => setView('dataKamar')}
        onNavigateToDataPenghuni={() => setView('dataPenghuni')}
        onNavigateToLaporan={() => setView('laporan')}
        onLogout={() => setView('login')}
      />
    );
  }

  if (view === 'laporan') {
    return (
      <LaporanPage 
        onNavigateToDashboardAdmin={() => setView('dashboardAdmin')}
        onNavigateToDataKamar={() => setView('dataKamar')}
        onNavigateToDataPenghuni={() => setView('dataPenghuni')}
        onNavigateToPembayaran={() => setView('pembayaran')}
        onLogout={() => setView('login')}
      />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans">
      <div className="w-full max-w-md flex flex-col items-center p-4">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-6">
          <Home className="w-10 h-10 text-blue-600 mb-4" strokeWidth={2.5} />
          <h1 className="text-2xl font-bold text-slate-800">d'cost boys D'K</h1>
          {/* <p className="text-slate-500 font-medium mt-1">Login Calon Penghuni</p> */}
        </div>

        {/* Card Form Section */}
        <div className="w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          {/* Tambahkan onSubmit ke form */}
          <form onSubmit={handleLogin} className="flex flex-col space-y-5">
            
            {/* Input Email */}
            <div className="flex flex-col space-y-1.5">
              <label className="text-sm font-medium text-slate-500" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Masukkan email atau username"
                // Sambungkan input dengan state email
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder:text-slate-400"
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
                placeholder="Masukkan password"
                // Sambungkan input dengan state password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors mt-2"
            >
              Login
            </button>

          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <button 
              onClick={() => setView('register')}
              type="button"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors bg-transparent border-none cursor-pointer"
            >
              Belum punya akun? Register
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}