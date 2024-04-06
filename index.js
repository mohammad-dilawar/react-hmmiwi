import { Scatter } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const DemoScatter = () => {
  const [yAxisData, setYAxisData] = useState([]);
  const [xAxisData, setXAxisData] = useState([]);
  useEffect(() => {
    // Fetch y-axis data
    fetch('https://retoolapi.dev/o5zMs5/data')
      .then((response) => response.json())
      .then((data) => {
        setYAxisData(data);
      })
      .catch((error) => {
        console.error('Error fetching y-axis data:', error);
      });

    // Fetch x-axis data
    fetch('https://retoolapi.dev/gDa8uC/data')
      .then((response) => response.json())
      .then((data) => {
        setXAxisData(data);
      })
      .catch((error) => {
        console.error('Error fetching x-axis data:', error);
      });
  }, []);

  const data = xAxisData.map((pointX, index) => ({
    x: parseFloat(pointX?.RandomNumber),
    y: parseFloat(yAxisData[index]?.RandomNumber),
    Label: index,
  }));
  console.log(data);
  const config = {
    data: data,
    xField: 'x',
    yField: 'y',
    colorField: 'Label',
  };
  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
