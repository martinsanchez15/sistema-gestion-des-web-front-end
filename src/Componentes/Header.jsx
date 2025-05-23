import { LogOut } from 'lucide-react';

const Header = ({ title, onLogout }) => (
  <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
    <h1 className="text-xl font-bold">{title}</h1>
    <button 
      onClick={onLogout}
      className="text-sm transition-colors duration-200 flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded"
      aria-label="Cerrar sesión"
    >
      <LogOut size={16} />
      Cerrar Sesión
    </button>
  </div>
);

export default Header;
