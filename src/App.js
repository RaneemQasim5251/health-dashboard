import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import VitalSigns from './components/VitalSigns';
import BodyConditions from './components/BodyConditions';
import ThreeDModel from './components/ThreeDModel';
import './App.css';

function App() {
  // دالة لتحميل الشات بوت بعد الضغط على الزر
  const loadChatbot = () => {
    if (!window.myChatWidget) {
      const script = document.createElement('script');
      script.src = "https://agentivehub.com/production.bundle.min.js";
      script.onload = function() {
        if (typeof window.myChatWidget.load === 'function') {
          window.myChatWidget.load({
            assistantId: '4c5161d1-7008-47e2-a219-024cc73c2e7b',
            apiKey: '3b92b2d9-035c-4462-97f9-b78818db49f4',
          });
        }
      };
      document.body.appendChild(script);
    } else {
      window.myChatWidget.load({
        assistantId: '4c5161d1-7008-47e2-a219-024cc73c2e7b',
        apiKey: '3b92b2d9-035c-4462-97f9-b78818db49f4',
      });
    }
  };

  useEffect(() => {
    // سنقوم بتحميل البوت فقط عند الضغط على الزر
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="main-content">
        <div className="right-content">
          <header className="dashboard-header">
            <h1>صباح الخير، محمد!</h1>
            <p>أنت تقوم بعمل رائع! استمر في العمل الجيد.</p>
            <div className="search-bar">
              <input id="search-input" type="text" placeholder="بحث" name="search"/>
            </div>
          </header>
          <VitalSigns />
          <BodyConditions />
          <div className="reset-relax">
            <h3>إعادة الضبط والاسترخاء</h3>
            <p>خذ لحظة للاسترخاء وإعادة الشحن مع التأمل الموجه وتمارين التنفس.</p>
            <button>تتبع مزاجي</button>
          </div>
        </div>
        <div className="left-content">
          <ThreeDModel />
        </div>
        {/* إضافة زر لتشغيل الشات بوت */}
        <div className="chatbot-section">
          <h3>تحدث مع مساعد الصحة</h3>
          <button onClick={loadChatbot}>ابدأ المحادثة</button>
        </div>
      </div>
    </div>
  );
}

export default App;
