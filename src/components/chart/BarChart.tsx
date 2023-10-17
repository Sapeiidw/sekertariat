"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { cn } from '../../lib/utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
  className?: string;
}

const BarChart = ({className}: Props) => {
  const chartData = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Mobile apps',
        borderColor: '#cb0c9f',
        borderWidth: 3,
        pointRadius: 0,
        fill: true,
        backgroundColor: 'rgba(203,12,159,0.2)',
        data: [500, 140, 300, 1220, 500, 250, 400, 230, 500],
        maxBarThickness: 6,
      },
      {
        label: 'Websites',
        borderColor: '#3A416F',
        borderWidth: 3,
        pointRadius: 0,
        fill: true,
        backgroundColor: 'rgba(20,23,39,0.2)',
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
        maxBarThickness: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#b2b9bf',
          font: {
            size: 11,
            family: 'Open Sans',
            style: 'normal',
            lineHeight: 2,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          color: '#b2b9bf',
          padding: 20,
          font: {
            size: 11,
            family: 'Open Sans',
            style: 'normal',
            lineHeight: 2,
          },
        },
      },
    },
  };

  const myStyles: React.CSSProperties = {
    height: '400px',
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: '10px',
  };

  return (
    <div className={cn('shadow-soft-2xl', className)} style={myStyles}>
      <Bar data={chartData} options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
        scales: {
          y: {
            grid: {
              
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              tickBorderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              tickBorderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: 'Open Sans',
                style: 'normal',
                lineHeight: 2,
              },
            },
          },
        },
      }} />
    </div>
  );
};

export default BarChart;
