import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import DoctorProfile from '../components/doctor/DoctorProfile';

const DoctorProfilePage: React.FC = () => {
  const { doctorId } = useParams<{ doctorId: string }>();
  const { doctors } = useAppContext();

  const doctor = doctors.find(d => d.id === doctorId);

  if (!doctor) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="doctor-profile-page">
      <DoctorProfile doctor={doctor} />
    </div>
  );
};

export default DoctorProfilePage;
