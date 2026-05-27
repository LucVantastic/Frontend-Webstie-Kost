import React, { useState } from 'react';
import { Home, AlertTriangle } from 'lucide-react';

export default function DashboardAdminPage({ onNavigateToDataKamar, onNavigateToDataPenghuni, onNavigateToPembayaran, onNavigateToLaporan, onLogout }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="min-h-screen flex font-sans bg-slate-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center space-x-3 text-white mb-6">
          <Home className="w-6 h-6" strokeWidth={2.5} />
          <span className="font-bold text-lg">d'cost boys D'K</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <button className="w-full flex items-center px-4 py-3 bg-blue-600 text-white rounded-xl font-medium transition-colors border-none cursor-pointer text-left">
            Dashboard
          </button>
          <button 
            onClick={onNavigateToDataKamar}
            className="w-full flex items-center px-4 py-3 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors bg-transparent border-none cursor-pointer text-left"
          >
            Data Kamar
          </button>
          <button 
            onClick={onNavigateToDataPenghuni}
            className="w-full flex items-center px-4 py-3 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors bg-transparent border-none cursor-pointer text-left"
          >
            Data Penghuni
          </button>
          <button 
            onClick={onNavigateToPembayaran}
            className="w-full flex items-center px-4 py-3 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors bg-transparent border-none cursor-pointer text-left"
          >
            Pembayaran
          </button>
          <button 
            onClick={onNavigateToLaporan}
            className="w-full flex items-center px-4 py-3 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors bg-transparent border-none cursor-pointer text-left"
          >
            Laporan
          </button>
        </nav>

        <div className="p-4 mt-auto">
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="flex items-center px-4 py-3 w-full hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors text-left bg-transparent border-none cursor-pointer"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        
        {/* Header */}
        <header className="bg-white px-8 py-5 flex items-center justify-between border-b border-slate-100">
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-slate-600">Admin</span>
            <div className="w-10 h-10 bg-blue-50 text-blue-600 font-bold rounded-full flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 flex-1">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-slate-500 font-medium text-sm mb-2">Total Kamar</span>
              <span className="text-4xl font-bold text-blue-600">40</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-slate-500 font-medium text-sm mb-2">Kamar Terisi</span>
              <span className="text-4xl font-bold text-green-500">32</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-slate-500 font-medium text-sm mb-2">Kamar Kosong</span>
              <span className="text-4xl font-bold text-orange-500">8</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <span className="text-slate-500 font-medium text-sm mb-2">Total Penghuni</span>
              <span className="text-4xl font-bold text-blue-600">35</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Chart Section (Mockup) */}
            <div className="w-full lg:w-3/5 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-8">Pembayaran Bulanan</h2>
              <div className="h-64 flex items-end justify-between px-4 gap-4">
                {/* Mockup bars */}
                <div className="w-12 bg-blue-600 rounded-t-lg h-[40%] flex-shrink-0 relative group"><span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500">Jan</span></div>
                <div className="w-12 bg-blue-600 rounded-t-lg h-[60%] flex-shrink-0 relative group"><span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500">Feb</span></div>
                <div className="w-12 bg-blue-600 rounded-t-lg h-[50%] flex-shrink-0 relative group"><span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500">Mar</span></div>
                <div className="w-12 bg-blue-600 rounded-t-lg h-[30%] flex-shrink-0 relative group"><span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500">Apr</span></div>
                <div className="w-12 bg-blue-600 rounded-t-lg h-[55%] flex-shrink-0 relative group"><span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500">Mei</span></div>
                <div className="w-12 bg-blue-600 rounded-t-lg h-[75%] flex-shrink-0 relative group"><span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500">Jun</span></div>
              </div>
            </div>

            {/* Table Section */}
            <div className="w-full lg:w-2/5 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-full">
                <div className="flex bg-slate-50 p-4 rounded-xl text-sm font-bold text-slate-500 mb-2">
                  <div className="flex-1">Nama</div>
                  <div className="flex-1 text-center">Bulan</div>
                  <div className="flex-1 text-right">Status</div>
                </div>
                
                <div className="flex items-center px-4 py-4 border-b border-slate-100 last:border-0 text-sm">
                  <div className="flex-1 text-slate-700">Andi</div>
                  <div className="flex-1 text-center text-slate-500">Mei 2026</div>
                  <div className="flex-1 text-right font-bold text-green-500">Lunas</div>
                </div>
                
                <div className="flex items-center px-4 py-4 border-b border-slate-100 last:border-0 text-sm">
                  <div className="flex-1 text-slate-700">Budi</div>
                  <div className="flex-1 text-center text-slate-500">Mei 2026</div>
                  <div className="flex-1 text-right font-bold text-green-500">Lunas</div>
                </div>

                <div className="flex items-center px-4 py-4 border-b border-slate-100 last:border-0 text-sm">
                  <div className="flex-1 text-slate-700">Citra</div>
                  <div className="flex-1 text-center text-slate-500">Mei 2026</div>
                  <div className="flex-1 text-right font-bold text-red-500">Belum</div>
                </div>

                <div className="flex items-center px-4 py-4 border-b border-slate-100 last:border-0 text-sm">
                  <div className="flex-1 text-slate-700">Deni</div>
                  <div className="flex-1 text-center text-slate-500">Mei 2026</div>
                  <div className="flex-1 text-right font-bold text-red-500">Belum</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 shadow-xl flex flex-col items-center">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Keluar dari Admin Panel</h2>
            <p className="text-slate-500 mb-8 text-center text-sm">Sesi akan diakhiri. Pastikan semua data sudah tersimpan.</p>
            
            <div className="w-24 h-24 bg-red-50 rounded-3xl flex items-center justify-center mb-8">
              <AlertTriangle className="w-10 h-10 text-red-500" strokeWidth={2.5} />
            </div>

            <div className="flex w-full gap-4">
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 py-3 text-blue-600 font-bold bg-transparent border-none cursor-pointer hover:bg-slate-50 rounded-xl transition-colors"
              >
                Kembali
              </button>
              <button 
                onClick={onLogout}
                className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold border-none cursor-pointer transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
