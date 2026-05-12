import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>sahrdaya college</h3>
            <p>Empowering minds, shaping futures since 1990.</p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📸</a>
              <a href="#">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#Admissions">Admissions</a></li>
              <li><a href="#">Academic Calendar</a></li>
              <li><a href="#">Scholarships</a></li>
              <li><a href="#">Campus Life</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Library</a></li>
              <li><a href="#">Career Services</a></li>
              <li><a href="#">Student Portal</a></li>
              <li><a href="#">Faculty Directory</a></li>
              <li><a href="#">Alumni Network</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📍 123 Education Street</li>
              <li>🏙️ Tech City, TC 12345</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ admissions@globaltech.edu</li>
              <li>🕒 Mon-Fri 9AM-5PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Global Tech University. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
          margin-top: 60px;
          padding: 40px 0 0 0;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .footer-section h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
        }
        
        .footer-section h4 {
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        
        .footer-section p {
          color: #e0e0e0;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section ul li {
          margin-bottom: 10px;
        }
        
        .footer-section ul li a {
          color: #e0e0e0;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-section ul li a:hover {
          color: white;
        }
        
        .contact-info li {
          color: #e0e0e0;
          margin-bottom: 10px;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }
        
        .social-links a {
          color: white;
          text-decoration: none;
          font-size: 1.5rem;
          transition: transform 0.3s ease;
          display: inline-block;
        }
        
        .social-links a:hover {
          transform: translateY(-3px);
        }
        
        .footer-bottom {
          text-align: center;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,0.2);
          color: #e0e0e0;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .footer-section ul {
            padding: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;