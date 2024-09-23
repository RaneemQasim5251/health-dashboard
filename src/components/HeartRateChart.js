import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['00:00', '00:30', '01:00', '01:30', '02:00'],
  datasets: [
    {
      label: 'معدل ضربات القلب',
      data: [100, 120, 130, 110, 125],
      fill: false,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
    },
  ],
};

const HeartRateChart = () => {
    const chartRef = React.useRef(null);
  
    React.useEffect(() => {
      if (chartRef.current) {
        chartRef.current.destroy(); // تدمير الرسم البياني السابق
      }
    }, []);
  
    return (
      <div className="card">
        <h3>رسم بياني لمعدل ضربات القلب</h3>
        <Line ref={chartRef} data={data} />
      </div>
    );
  };
  
export default HeartRateChart;
