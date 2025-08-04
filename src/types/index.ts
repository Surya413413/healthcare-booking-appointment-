// Define the availability status type first
export  type AvailabilityStatus = 'Available Today' | 'Fully Booked' | 'On Leave';

// Define the Schedule interface
export interface Schedule {
  day: string;
  timeSlots: string[];
}

// Define the Doctor interface
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  availability: AvailabilityStatus;
  schedule: Schedule[];
  experience: number;
  rating: number;
  education: string;
  description: string;
  fees: number;
}

// Define the Appointment interface
export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  email: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

// Define the App Context interface
export interface AppContextType {
  doctors: Doctor[];
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, 'id' | 'status'>) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}


