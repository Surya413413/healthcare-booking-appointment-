import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  const getAvailabilityClass = (availability: string) => {
    switch (availability) {
      case 'Available Today':
        return 'available';
      case 'Fully Booked':
        return 'fully-booked';
      case 'On Leave':
        return 'on-leave';
      default:
        return '';
    }
  };

  return (
    <div className="doctor-card" onClick={handleCardClick}>
      <div className="doctor-image-container">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <div className={`availability-badge ${getAvailabilityClass(doctor.availability)}`}>
          {doctor.availability}
        </div>
      </div>
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-specialization">{doctor.specialization}</p>
        <div className="doctor-meta">
          <span className="rating">⭐ {doctor.rating}</span>
          <span className="experience">{doctor.experience} years exp.</span>
          <span className="fees">₹{doctor.fees}</span>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
