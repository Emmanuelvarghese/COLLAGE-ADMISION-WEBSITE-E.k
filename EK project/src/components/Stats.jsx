import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    students: 0,
    programs: 0,
    placement: 0,
    faculty: 0
  });

  useEffect(() => {
    const animate = setInterval(() => {
      setCounts(prev => {
        if (prev.students < 5000) return { ...prev, students: Math.min(prev.students + 100, 5000) };
        if (prev.programs < 50) return { ...prev, programs: Math.min(prev.programs + 1, 50) };
        if (prev.placement < 95) return { ...prev, placement: Math.min(prev.placement + 2, 95) };
        if (prev.faculty < 200) return { ...prev, faculty: Math.min(prev.faculty + 5, 200) };
        clearInterval(animate);
        return prev;
      });
    }, 50);

    return () => clearInterval(animate);
  }, []);

  const stats = [
    { value: `${counts.students}+`, label: "Students" },
    { value: `${counts.programs}+`, label: "Programs" },
    { value: `${counts.placement}%`, label: "Placement Rate" },
    { value: `${counts.faculty}+`, label: "Expert Faculty" }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}

      <style jsx>{`
        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 2px solid #e0e0e0;
        }
        
        .stat-card {
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          color: white;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        }
        
        .stat-value {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.95;
        }
        
        @media (max-width: 768px) {
          .stat-value {
            font-size: 1.5rem;
          }
          
          .stat-card {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Stats;