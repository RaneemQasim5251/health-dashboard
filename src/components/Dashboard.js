// src/components/Dashboard.js
import React from 'react';
import './ThreeDModel.css';
import ThreeDModel from './ThreeDModel';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">مرحبًا، أيوب!</div>
      <div className="dashboard-cards">
        <div className="card">
          <p>درجة الحرارة</p>
          <h3>37.1°C</h3>
        </div>
        <div className="card">
          <p>معدل ضربات القلب</p>
          <h3>124 bpm</h3>
        </div>
        <div className="card">
          <p>الجلوكوز</p>
          <h3>182 mg/dl</h3>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <p>الوزن</p>
          <h3>74.2 كجم</h3>
        </div>
        <div className="card">
          <p>عدد الخطوات</p>
          <h3>7,040</h3>
        </div>
        <div className="card">
          <p>السعرات الحرارية</p>
          <h3>253/1342</h3>
        </div>
        <div className="card">
          <p>وقت النوم</p>
          <h3>6.3 ساعات</h3>
        </div>
      </div>

      <ThreeDModel />
    </div>
  );
};

export default Dashboard;
