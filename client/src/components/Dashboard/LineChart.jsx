import React, { useEffect } from "react";
import Highcharts from "highcharts";

const LineChart = ({
  containerId,
  title,
  subtitle,
  seriesData,
  xAxisDescription,
  yAxisTitle,
  startDate,
  endDate,
}) => {
  useEffect(() => {
    Highcharts.chart(containerId, {
      title: {
        text: title,
        align: "left",
      },

      subtitle: {
        text: subtitle,
        align: "left",
      },

      yAxis: {
        title: {
          text: yAxisTitle,
        },
      },

      xAxis: {
        type: "datetime", // Use datetime for date-based x-axis
        min: Date.parse(startDate), // Start date as a timestamp
        max: Date.parse(endDate),   // End date as a timestamp
        title: {
          text: xAxisDescription, // Description for the x-axis
        },
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: Date.parse(startDate), 
        },
      },

      series: seriesData.map((series) => ({
        ...series,
        data: series.data.map(([date, value]) => [Date.parse(date), value]), 
      })),

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });
  }, [
    containerId,
    title,
    subtitle,
    seriesData,
    xAxisDescription,
    yAxisTitle,
    startDate,
    endDate,
  ]);

  return <div id={containerId} />;
};

export default LineChart;
