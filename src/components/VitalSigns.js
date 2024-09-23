// src/components/VitalSigns.js
import React from 'react';

const VitalSigns = () => {
  return (
    <div className="vital-signs">
      <div className="card">
        <h3>درجة الحرارة</h3>
        <p>37.1°C</p>
      </div>
      <div className="card">
        <h3>معدل ضربات القلب</h3>
        <p>124 bpm</p>
      </div>
      <div className="card">
        <h3>الجلوكوز</h3>
        <p>182 mg/dl</p>
      </div>
    </div>
  );
};

export default VitalSigns;
