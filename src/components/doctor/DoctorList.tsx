import React from 'react';
import { useAppContext } from '../../context/AppContext';
import DoctorCard from './DoctorCard';

const DoctorList: React.FC = () => {
  const { doctors, searchTerm } = useAppContext();

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredDoctors.length === 0) {
    return (
      <div className="no-results">
        <p>No doctors found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div className="doctor-list">
      {filteredDoctors.map(doctor => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
