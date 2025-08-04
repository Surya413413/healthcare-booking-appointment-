import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import AppointmentForm from '../components/appointment/AppointmentForm';

const BookAppointmentPage: React.FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const { doctors, addAppointment } = useAppContext();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentData, setAppointmentData] = useState<any>(null);

  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return <Navigate to="/" replace />;
  }

  const handleFormSubmit = (data: any) => {
    addAppointment(data);
    setAppointmentData(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="appointment-confirmation">
        <div className="confirmation-card">
          <div className="success-icon">✅</div>
          <h2>Appointment Confirmed!</h2>
          <div className="appointment-details">
            <p><strong>Doctor:</strong> {doctor.name}</p>
            <p><strong>Patient:</strong> {appointmentData.patientName}</p>
            <p><strong>Date:</strong> {appointmentData.date}</p>
            <p><strong>Time:</strong> {appointmentData.time}</p>
            <p><strong>Email:</strong> {appointmentData.email}</p>
          </div>
          <p className="confirmation-message">
            A confirmation email has been sent to {appointmentData.email}
          </p>
          <button 
            className="back-home-btn"
            onClick={() => window.location.href = '/'}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-appointment-page">
      <AppointmentForm doctor={doctor} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default BookAppointmentPage;
