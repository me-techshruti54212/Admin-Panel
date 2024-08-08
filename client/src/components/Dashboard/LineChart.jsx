import React, { useEffect } from "react";
import Highcharts from "highcharts";

const LineChart = ({ containerId, title, subtitle, seriesData, xAxisDescription, yAxisTitle }) => {
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
        accessibility: {
          rangeDescription: xAxisDescription,
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
          pointStart: 2024,
        },
      },

      series: seriesData,

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
  }, [containerId, title, subtitle, seriesData, xAxisDescription, yAxisTitle]);

  return <div id={containerId} />;
};

export default LineChart;
