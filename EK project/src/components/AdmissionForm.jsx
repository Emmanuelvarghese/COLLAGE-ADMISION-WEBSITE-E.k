import React, { useState } from 'react';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    address: '',
    program: '',
    previousInstitute: '',
    graduationYear: '',
    percentage: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setLoading(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        dateOfBirth: '',
        email: '',
        phone: '',
        address: '',
        program: '',
        previousInstitute: '',
        graduationYear: '',
        percentage: '',
        additionalInfo: ''
      });
    }, 3000);
  };

  const programs = [
    { value: "btech-cs", label: "B.Tech - Computer Science" },
    { value: "btech-ai", label: "B.Tech - Artificial Intelligence" },
    { value: "btech-ds", label: "B.Tech - Data Science" },
    { value: "mtech-cs", label: "M.Tech - Computer Science" },
    { value: "mba", label: "MBA - Business Administration" },
    { value: "bca", label: "BCA - Computer Applications" },
    { value: "mca", label: "MCA - Computer Applications" }
  ];

  return (
    <div className="form-container">
      <h2 className="form-title">Admission Form 2025-26</h2>
      <p className="form-subtitle">Apply now for the upcoming academic year</p>
      
      {submitted && (
        <div className="success-message">
          ✅ Application submitted successfully! We'll contact you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1234567890"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Your full address"
          />
        </div>

        <div className="form-group">
          <label>Select Program *</label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
          >
            <option value="">Choose a program</option>
            {programs.map(program => (
              <option key={program.value} value={program.value}>
                {program.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Previous Institute *</label>
          <input
            type="text"
            name="previousInstitute"
            value={formData.previousInstitute}
            onChange={handleChange}
            required
            placeholder="Name of your last institute"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Graduation Year *</label>
            <input
              type="text"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              required
              placeholder="YYYY"
            />
          </div>
          <div className="form-group">
            <label>Percentage/CGPA *</label>
            <input
              type="text"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              required
              placeholder="e.g., 85% or 8.5"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Additional Information (Optional)</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows="3"
            placeholder="Any additional information you'd like to share..."
          />
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>

        <p className="form-note">
          By submitting this form, you agree to our terms and conditions.
        </p>
      </form>

      <style jsx>{`
        .form-container {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          animation: fadeIn 0.6s ease-out;
        }
        
        .form-title {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .form-subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 30px;
        }
        
        .success-message {
          background: #d4edda;
          color: #155724;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 20px;
          border-left: 4px solid #28a745;
          animation: slideIn 0.5s ease-out;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 2px solid #e0e0e0;
          border-radius: 5px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .submit-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
        
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .form-note {
          text-align: center;
          font-size: 0.8rem;
          color: #666;
          margin-top: 20px;
        }
        
        @media (max-width: 768px) {
          .form-container {
            padding: 20px;
          }
          
          .form-title {
            font-size: 1.5rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AdmissionForm;