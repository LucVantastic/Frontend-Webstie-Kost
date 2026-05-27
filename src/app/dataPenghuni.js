import React, { useState } from 'react';
import { Home, AlertTriangle } from 'lucide-react';

export default function DataPenghuniPage({ onNavigateToDashboardAdmin, onNavigateToDataKamar, onNavigateToPembayaran, onNavigateToLaporan, onLogout }) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const tenants = [
    { no: 1, name: 'Andi Wijaya', room: 'Kamar A', date: '01 Mei 2026', phone: '0812-xxxx' },
    { no: 2, name: 'Budi Santoso', room: 'Kamar B', date: '03 Mei 2026', phone: '0821-xxxx' },
    { no: 3, name: 'Citra Dewi', room: 'Kamar C', date: '05 Mei 2026', phone: '0831-xxxx' },
    { no: 4, name: 'Deni Kurniawan', room: 'Kamar F', date: '07 Mei 2026', phone: '0852-xxxx' },
  ];

  return (
    <div className="min-h-screen flex font-sans bg-slate-50">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen sticky top-0">
        <div className="p-6 flex items-center space-x-3 text-white mb-6">
          <Home className="w-6 h-6" strokeWidth={2.5} />
          <span className="font-bold text-lg">d'cost boys D'K</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <button 
            onClick={onNavigateToDashboardAdmin}
            className="w-full flex items-center px-4 py-3 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors bg-transparent border-none cursor-pointer text-left"
          >
            Dashboard
          </button>
          <button 
            onClick={onNavigateToDataKamar}
            className="w-full flex items-center px-4 py-3 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors bg-transparent border-none cursor-pointer text-left"
          >
            Data Kamar
          </button>
          <button className="w-full flex items-center px-4 py-3 bg-blue-600 text-white rounded-xl font-medium transition-colors border-none cursor-pointer text-left">
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
          <h1 className="text-2xl font-bold text-slate-900">Data Penghuni</h1>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-slate-600">Admin</span>
            <div className="w-10 h-10 bg-blue-50 text-blue-600 font-bold rounded-full flex items-center justify-center">
              A
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 flex-1">
          
          <div className="flex justify-end mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-sm text-sm border-none cursor-pointer">
              + Tambah Penghuni
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="w-full min-w-[800px]">
              <div className="flex bg-slate-50 p-4 text-sm font-bold text-slate-500 border-b border-slate-100">
                <div className="w-16 px-4">No</div>
                <div className="flex-1 px-4">Nama</div>
                <div className="flex-1 px-4">Kamar</div>
                <div className="flex-1 px-4">Tanggal Masuk</div>
                <div className="flex-1 px-4">No. HP</div>
                <div className="flex-1 px-4 text-right">Aksi</div>
              </div>
              
              <div className="flex flex-col">
                {tenants.map((tenant) => (
                  <div key={tenant.no} className="flex items-center p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors text-sm">
                    <div className="w-16 px-4 text-slate-600">{tenant.no}</div>
                    <div className="flex-1 px-4 text-slate-700 font-medium">{tenant.name}</div>
                    <div className="flex-1 px-4 text-slate-600">{tenant.room}</div>
                    <div className="flex-1 px-4 text-slate-600">{tenant.date}</div>
                    <div className="flex-1 px-4 text-slate-600">{tenant.phone}</div>
                    <div className="flex-1 px-4 text-right text-slate-500">
                      <button className="hover:text-blue-600 font-medium bg-transparent border-none cursor-pointer p-0">Edit</button>
                      <span className="mx-2">&middot;</span>
                      <button className="hover:text-red-600 font-medium bg-transparent border-none cursor-pointer p-0">Hapus</button>
                    </div>
                  </div>
                ))}
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
