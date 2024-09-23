// src/components/BodyConditions.js
import React from 'react';

const BodyConditions = () => {
  return (
    <div className="body-conditions">
      <h2>حالة الجسم</h2>
      <div className="condition">
        <p>الوزن: 74.2 كجم</p>
      </div>
      <div className="condition">
        <p>عدد الخطوات: 7,040</p>
      </div>
      <div className="condition">
        <p>السعرات الحرارية: 253/1342</p>
      </div>
      <div className="condition">
        <p>وقت النوم: 6.3 ساعات</p>
      </div>
    </div>
  );
};

export default BodyConditions;
