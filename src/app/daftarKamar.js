import React from 'react';
import { Home, User } from 'lucide-react';

export default function KamarPage({ onNavigateToDashboard, onNavigateToProfile, onNavigateToDetail, onNavigateToContact }) {
  // Data dummy untuk kamar
  const rooms = [
    { name: 'Kamar A', price: 'Rp700.000/bln', status: 'Tersedia' },
    { name: 'Kamar B', price: 'Rp750.000/bln', status: 'Tersedia' },
    { name: 'Kamar C', price: 'Rp800.000/bln', status: 'Tersedia' },
    { name: 'Kamar D', price: 'Rp850.000/bln', status: 'Penuh' },
    { name: 'Kamar E', price: 'Rp900.000/bln', status: 'Tersedia' },
    { name: 'Kamar F', price: 'Rp950.000/bln', status: 'Tersedia' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={onNavigateToDashboard}>
            <Home className="w-5 h-5 text-slate-800" strokeWidth={2.5} />
            <span className="font-bold text-slate-800 text-lg">d'cost boys D'K</span>
          </div>
          <div className="flex items-center space-x-8">
            <button onClick={onNavigateToDashboard} className="text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">Home</button>
            <span className="text-blue-600 font-bold text-sm">Kamar</span>
            <a href="#" className="text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">Fasilitas</a>
            <button onClick={onNavigateToContact} className="text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors bg-transparent border-none cursor-pointer">Kontak</button>
            <button 
              onClick={onNavigateToProfile}
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer border-none"
              title="Profil"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Daftar Kamar</h1>
          <p className="text-slate-500 text-lg">Temukan kamar yang sesuai dengan kebutuhanmu.</p>
        </div>

        {/* Filter Section */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-end gap-6 mb-12">
          <div className="flex-1 w-full flex flex-col space-y-2">
            <label className="text-sm font-medium text-slate-500">Filter Harga</label>
            <input type="text" placeholder="Isi filter harga" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-900 placeholder:text-slate-400" />
          </div>
          <div className="flex-1 w-full flex flex-col space-y-2">
            <label className="text-sm font-medium text-slate-500">Jenis Kamar</label>
            <input type="text" placeholder="Isi jenis kamar" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-900 placeholder:text-slate-400" />
          </div>
          <div className="flex-1 w-full flex flex-col space-y-2">
            <label className="text-sm font-medium text-slate-500">Status</label>
            <input type="text" placeholder="Isi status" className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-900 placeholder:text-slate-400" />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-lg transition-colors text-sm h-[42px]">
            Filter
          </button>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <div className="w-full h-48 bg-slate-200 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-slate-400 font-semibold text-base">Foto kamar</span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{room.name}</h3>
              <p className="text-blue-600 font-bold text-sm mb-4">{room.price}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className={`text-white text-xs font-bold px-3 py-1.5 rounded-full ${room.status === 'Tersedia' ? 'bg-green-500' : 'bg-red-500'}`}>
                  {room.status}
                </span>
                <button 
                  onClick={() => onNavigateToDetail && onNavigateToDetail(room)}
                  className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors bg-transparent border-none cursor-pointer"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
