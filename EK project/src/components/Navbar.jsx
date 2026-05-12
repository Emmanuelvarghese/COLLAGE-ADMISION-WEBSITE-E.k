import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="logo-icon"><img src="Official_Logo.png" alt="logo"  width={50} height={50}/></div>
          <span className="logo-text">Sahrdaya College</span>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Programs</a>
          <a href="#" className="nav-link">Admissions</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: linear-gradient(135deg, #1d54bb 0%, #2a5298 100%);
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .logo-icon {
          font-size: 2rem;
          animation: pulse 2s infinite;
        }
        
        .logo-text {
          background: linear-gradient(135deg, #fff 0%, #e0e7ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-menu {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
          border-radius: 5px;
        }
        
        .nav-link:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            flex-direction: column;
            padding: 1rem;
            gap: 0.5rem;
          }
          
          .nav-menu.active {
            display: flex;
          }
          
          .nav-container {
            padding: 1rem;
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;