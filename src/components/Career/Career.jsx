import React, { useState } from 'react';
import './Career.css';
import { Helmet } from 'react-helmet';

function Career() {
  const [file, setFile] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [experience, setExperience] = useState('');
  const [number, setNumber] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile.size > 2 * 1024 * 1024) { // Example file size check (2MB)
      setStatusMessage('File size exceeds 2MB');
    } else {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('experience', experience);
    formData.append('number', number);

    try {
      const response = await fetch('http://localhost:2000/send-email', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.text();
        setStatusMessage(data);
      } else {
        setStatusMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='career'>
      <Helmet>
        <title>Work With Us - Apply Today</title>
        <meta name="description" content="Join our team by applying for an exciting career with us." />
        <meta property="og:title" content="Join Our Team" />
        <meta property="og:description" content="Work with us and contribute to a growing company." />
      </Helmet>

      <div className="career-bg">
        <h1>Work With Us</h1>
        <div className="person-details">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name :</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name :</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience :</label>
              <input
                id="experience"
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="number">Phone Number :</label>
              <input
                id="number"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                pattern="^\d{10}$"  // Example phone number validation (10 digits)
                title="Please enter a valid 10-digit phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Upload your CV :</label>
              <input
                id="file"
                type="file"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"  // Example file type validation
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Email'}
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Career;
