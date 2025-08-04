import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import type { Doctor } from '../../types';

interface AppointmentFormProps {
  doctor: Doctor;
  onSubmit: (appointmentData: any) => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ doctor, onSubmit }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    date: '',
    time: '',
  });
  const [errors, setErrors] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Patient name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    if (!formData.time) {
      newErrors.time = 'Time slot is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        doctorId: doctor.id,
      });
    }
  };

  const getAvailableTimeSlots = () => {
    const selectedDate = new Date(formData.date);
    const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });
    const schedule = doctor.schedule.find(s => s.day === dayName);
    return schedule ? schedule.timeSlots : [];
  };

  return (
    <div className="appointment-form-container">
      <div className="form-header">
        <h2>Book Appointment with {doctor.name}</h2>
        <p className="doctor-info">{doctor.specialization} • ₹{doctor.fees}</p>
      </div>

      <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="patientName">Patient Name *</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleInputChange}
            className={errors.patientName ? 'error' : ''}
          />
          {errors.patientName && <span className="error-message">{errors.patientName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="date">Preferred Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className={errors.date ? 'error' : ''}
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="time">Available Time Slots *</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className={errors.time ? 'error' : ''}
            disabled={!formData.date}
          >
            <option value="">Select a time slot</option>
            {getAvailableTimeSlots().map(slot => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <span className="error-message">{errors.time}</span>}
          {formData.date && getAvailableTimeSlots().length === 0 && (
            <span className="info-message">No available slots for selected date</span>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
