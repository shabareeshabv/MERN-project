import React from 'react'
import Footer from './Components/Footer';

 const Aboutpage = () => {
  return (
    <div className="about-container">
      <h1>About Our CGPA Calculator</h1>
      
      <section className="about-section">
        <h2>What is CGPA?</h2>
        <p>Cumulative Grade Point Average (CGPA) is a measure of a student's academic performance. It is calculated by taking the average of grade points obtained in all subjects, excluding any additional activities or extra credits.</p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>Our mission is to provide students with an easy-to-use and accurate tool for calculating their CGPA. We aim to help students track their academic progress and plan their studies more effectively.</p>
      </section>

      <section className="about-section">
        <h2>Features</h2>
        <ul>
          <li><strong>Accuracy:</strong> Our calculator uses the latest algorithms to ensure precise CGPA calculation.</li>
          <li><strong>User-Friendly Interface:</strong> Designed with simplicity in mind, our tool is easy to navigate and use.</li>
          <li><strong>Multiple Grading Systems:</strong> Supports various grading systems to accommodate different educational institutions.</li>
          <li><strong>Performance Tracking:</strong> Allows students to save and track their CGPA over different semesters.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>How to Use the Calculator</h2>
        <p>To calculate your CGPA, simply enter your grades and credit hours for each subject. Our calculator will automatically compute your CGPA based on the entered data.</p>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need support, please feel free to <a href="/contact">contact us</a>. We are here to help you make the most of our CGPA Calculator.</p>
      </section>
    </div>

    
  )
  
 }

export default Aboutpage;