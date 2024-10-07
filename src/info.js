import React, { useState } from 'react';  
import './info.css'; // Assuming you will style it separately
import snap from './aa.png';
import snap1 from './a.png';
import logo from './d.jpg';
/* import logo1 from './d2.jpg'; */
import logo2 from './pu.png';

const Card = ({ item }) => {
    return (
        <div style={cardStyle}>
            <h3 style={titleStyle}>{item.title}</h3>
            <i style={descriptionStyle}><center>{item.description}</center></i>
        </div>
    );
};

const cardStyle = {
    borderRadius: '30px',
    padding: '0px',
  display:'flex',
   
    margin: '0px',
    width: '320px',
    height:'61px',
    boxShadow: '10px 10px 5px rgba(0, 0, 0, 0.1)',
    
    flexDirection: 'column',
    alignItems: 'center',
};

const containerStyle = {
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '0px',
  
};

const titleStyle = {
    marginTop:'19px',
    margin:'0',
    fontSize: '1.2em',
    fontWeight: 'bold',
};

const descriptionStyle = {
    margin: '0', // Remove margin around the description
    fontSize: '0.8em',
};


const Info = () => {
    const [items] = useState([
        { title: 'Dr. Nithya Selvaraj',description: '' },
        { title: 'Dr. S. Sivasathya', description: 'Professor' },
        { title: 'Dr. R Sunitha', description: 'Associate Professor' },
        { title: 'Tanushree Sarkar', description: 'MCA Student' },
        { title: 'Soumitra Halder', description: 'MCA Student' },
        { title: 'Jaya Bharathi', description: 'MCA Student' },
        { title: 'Srinivas M.', description: 'MCA Student' },
        { title: 'Gaurav Kumar', description: 'MCA Student' },
        { title: 'Pranathi Manda', description: 'MCA Student' },
        { title: 'Shubham Sharma', description: 'MCA Student' },
        { title: 'Chinmoy Kalita', description: 'MCA Student' }
    ]);

    return (
        <div className="info-container">
            {/* Column 1 - Clinic Info */}
            <div className="info-column1">
                <img src={logo} alt="Clinic Logo" className="clinic-logo" />
                <h2>CLADENT</h2>
                <h3>Clinical Assistance for Dental Care</h3>
                <p>
                CLADENT (Clinical Assistance for Dental Care) is an integrated dental clinic platform that offers seamless mobile and web interfaces for patients and dental professionals. This app has been designed for Dr. Nithya's Dental and Smile Design Clinic, Bangaluru. Patients can easily book appointments, access personalized oral health information, and connect with specialists. For doctors, the platform provides streamlined appointment scheduling, consultant management, lab coordination, and comprehensive daily and monthly reporting. The user-friendly design ensures effortless navigation for all users, secure data management, and efficient clinic operations, all in one place. CLADENT has been designed and developed at Department of Computer Science, Pondicherry University (PuDoCS).
                </p>
            </div>

            {/* Column 2 - Developed by Podocs with Desktop Frame */}
            <div className="info-column2">
               {/*  <img src={logo1} alt="Clinic name Logo" className="clinic-name-logo" /> */}
                <h3 style={{ fontSize:'1.5em', marginTop: '100px'}}>Developed by PUDoCS</h3>
                {/* Desktop structure */}

                   
                        <img src={snap} alt="App on Desktop" className="screen-content" />
                   
                    
            </div>

            {/* Column 3 - Pondicherry University and Team */}
            <div className="info-column3" style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                    <img src={logo2} alt="Pondicherry University Logo" className="university-logo" />
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                        <h3 style={{ color: '#0099cc', display: 'block', fontSize: '1.5em' }}>PONDICHERRY UNIVERSITY</h3>
                        <span style={{ fontSize: '1em', color: '#555' }}>( A Central University )</span>
                    </div>
                </div>

                <strong style={{fontSize:'24px',}}><u>The CLADENT Team</u></strong>
                {/* Heading Card */}
                <div style={containerStyle}>
                
                <Card item={{ title: 'Dr. Nithya Selvaraj', description: "Dr. Nithya's Dental and Smile Design Clinic" }} /> 
                </div>
                {/* Team Members Layout */}
                <div style={containerStyle}>
                    {/* Left Side: 2 Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        
                        <Card item={items[1]} />
                        <Card item={items[2]} />
                        <img src={snap1} alt="App on Desktop" className="screen-content2" />
                    </div>

                    {/* Right Side: 5 Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {items.slice(3).map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
