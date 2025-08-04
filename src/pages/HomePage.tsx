// src/pages/HomePage.tsx
import React from 'react';
import SearchBar from '../components/search/SearchBar';
import DoctorList from '../components/doctor/DoctorList';


const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="container-fluid">
          <h1>Find & Book Healthcare Appointments</h1>
          <p>Connect with experienced healthcare professionals</p>
          <SearchBar />
        </div>
      </div>
      
      <div className="doctors-section">
        <div className="container-fluid">
          <h2>Our Doctors</h2>
          <DoctorList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;








// import React from 'react';
// import SearchBar from '../components/search/SearchBar';
// import DoctorList from '../components/doctor/DoctorList';

// const HomePage: React.FC = () => {
//   return (
//     <div className="home-page">
//       <div className="hero-section">
//         <h1>Find & Book Healthcare Appointments</h1>
//         <p>Connect with experienced healthcare professionals</p>
//         <SearchBar />
//       </div>
      
//       <div className="doctors-section">
//         <h2>Our Doctors</h2>
//         <DoctorList />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
