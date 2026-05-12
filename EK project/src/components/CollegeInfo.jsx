import React from 'react';
import Stats from './Stats';

const CollegeInfo = () => {
  const features = [
    {
      icon: "✓",
      title: "Accredited Programs",
      description: "All our programs are nationally accredited and recognized worldwide."
    },
    {
      icon: "👨‍🏫",
      title: "Expert Faculty",
      description: "Learn from industry experts and renowned academicians with years of experience."
    },
    {
      icon: "🏛️",
      title: "Modern Campus",
      description: "State-of-the-art facilities, labs, and library resources available 24/7."
    },
    {
      icon: "💼",
      title: "100% Placement Support",
      description: "Dedicated placement cell with 500+ partner companies."
    }
  ];

  return (
    <div className="college-info">
      <h2 className="info-title">Why Choose Global Tech?</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <Stats />

      <style jsx>{`
        .college-info {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          animation: fadeIn 0.6s ease-out;
        }
        
        .info-title {
          font-size: 2rem;
          color: #333;
          margin-bottom: 30px;
          text-align: center;
          position: relative;
          padding-bottom: 15px;
        }
        
        .info-title:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          margin-bottom: 40px;
        }
        
        .feature-card {
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border-radius: 10px;
          background: #f8f9fa;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        
        .feature-title {
          font-size: 1.2rem;
          color: #333;
          margin-bottom: 10px;
        }
        
        .feature-description {
          color: #666;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .college-info {
            padding: 20px;
          }
          
          .info-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CollegeInfo;