import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Doctor } from '../../types';

interface DoctorProfileProps {
  doctor: Doctor;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate(`/book-appointment/${doctor.id}`);
  };

  return (
    <div className="doctor-profile">
      <div className="profile-header">
        <img src={doctor.image} alt={doctor.name} className="profile-image" />
        <div className="profile-info">
          <h1 className="profile-name">{doctor.name}</h1>
          <p className="profile-specialization">{doctor.specialization}</p>
          <div className="profile-meta">
            <span className="rating">⭐ {doctor.rating} Rating</span>
            <span className="experience">{doctor.experience} Years Experience</span>
            <span className="fees">₹{doctor.fees} Consultation Fee</span>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h3>Education</h3>
          <p>{doctor.education}</p>
        </div>

        <div className="profile-section">
          <h3>About</h3>
          <p>{doctor.description}</p>
        </div>

        <div className="profile-section">
          <h3>Available Schedule</h3>
          <div className="schedule-grid">
            {doctor.schedule.map(scheduleItem => (
              <div key={scheduleItem.day} className="schedule-day">
                <h4>{scheduleItem.day}</h4>
                <div className="time-slots">
                  {scheduleItem.timeSlots.length > 0 ? (
                    scheduleItem.timeSlots.map(slot => (
                      <span key={slot} className="time-slot">{slot}</span>
                    ))
                  ) : (
                    <span className="no-slots">Not Available</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <button 
          className="book-appointment-btn"
          onClick={handleBookAppointment}
          disabled={doctor.availability === 'On Leave'}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorProfile;
