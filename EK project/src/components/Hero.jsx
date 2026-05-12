import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Shape Your Future at Sahrdaya</h1>
        <p className="hero-subtitle">
          Join our community of innovators, thinkers, and leaders
        </p>
        <div className="hero-buttons">
         <a href="https://www.google.com/url?sa=t&s
         ource=web&rct=j&opi=89978449&url=https://sahrdayacas.ac.in/&ved=
         &usg=AOvVaw3DV2z9wGGR0hmNRPsON7FU">
             <button className="btn-primary">Explore More</button>
          </a>
          <a href="http://www.youtube.com/@sahrdayacollegeofadvanceds5775">
            <button className="btn-secondary">Our YouTube</button>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 80px 20px;
          text-align: center;
          position: relative;
          overfhlow: hidden;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
        }
        
        .hero-content {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          animation: fadeIn 1s ease-out;
        }
        
        .hero-title {
          font-size: 3rem;
          margin-bottom: 20px;
          animation: slideIn 0.8s ease-out;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 30px;
          opacity: 0.95;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-primary, .btn-secondary {
          padding: 12px 30px;
          font-size: 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .btn-primary {
          background: white;
          color: #667eea;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }
        
        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }
        
        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .btn-primary, .btn-secondary {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;