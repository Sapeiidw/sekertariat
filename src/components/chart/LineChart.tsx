"use client";
import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ScriptableContext,
  Filler,
} from "chart.js";
import { cn } from "../../lib/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type Props = {
  className?: string;
};

const chartData = () => {
  return {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Pemasukan",
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointRadius: 0,
        fill: "start",
        // backgroundColor: "rgba(203,12,159,0.2)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          var gradient = ctx.createLinearGradient(0, 400, 0, 50);
          gradient.addColorStop(1, "rgba(203,12,159,0.2)");
          gradient.addColorStop(0.2, "rgba(72,72,176,0.0)");
          gradient.addColorStop(0, "rgba(203,12,159,0)"); //purple colors
          
          return gradient;
        },
        data: [100, 200, 300, 250, 400, 250, 450, 300, 500],
        maxBarThickness: 6,
        tension: 0.4,
      },
      {
        label: "Pengeluaran",
        borderColor: "#3A416F",
        borderWidth: 3,
        pointRadius: 0,
        fill: "start",
        // backgroundColor: "rgba(20,23,39,0.2)",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          var gradient = ctx.createLinearGradient(0, 400, 0, 50);

          gradient.addColorStop(1, "rgba(20,23,39,0.2)");
          gradient.addColorStop(0.2, "rgba(72,72,176,0.0)");
          gradient.addColorStop(0, "rgba(20,23,39,0)"); //purple colors
          return gradient;
        },
        data: [250, 90, 50, 140, 290, 290, 340, 230, 400],
        maxBarThickness: 6,
        tension: 0.4,
      },
    ],
  };
};

const LineChart = ({ className }: Props) => {

  const myStyles: React.CSSProperties = {
    height: "400px",
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "10px",
  };

  return (
    <div className={cn("shadow-soft-2xl bg-white rounded-xl", className)} 
    // style={myStyles}
    >
      <Line
        data={chartData()}
        options={{
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
              display: true,
            },
          },
          interaction: {
            intersect: false,
            mode: "index",
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
                color: "#b2b9bf",
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
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
                color: "#b2b9bf",
                padding: 20,
                font: {
                  size: 11,
                  family: "Open Sans",
                  style: "normal",
                  lineHeight: 2,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
