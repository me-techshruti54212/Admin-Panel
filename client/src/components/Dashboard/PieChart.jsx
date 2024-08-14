import React, { useEffect } from "react";
import Highcharts from "highcharts";

const PieChart = ({ containerId, title, subtitle, data, animationDuration }) => {
  useEffect(() => {
    (function (H) {
      H.seriesTypes.pie.prototype.animate = function (init) {
        const series = this,
          chart = series.chart,
          points = series.points,
          { animation } = series.options,
          { startAngleRad } = series;

        function fanAnimate(point, startAngleRad) {
          const graphic = point.graphic,
            args = point.shapeArgs;

          if (graphic && args) {
            graphic
              .attr({
                start: startAngleRad,
                end: startAngleRad,
                opacity: 0,
              })
              .animate(
                {
                  start: args.start,
                  end: args.end,
                  opacity: 1,
                },
                {
                  duration: animation.duration / points.length,
                },
                function () {
                  if (points[point.index + 1]) {
                    fanAnimate(points[point.index + 1], args.end);
                  }
                  if (point.index === series.points.length - 1) {
                    series.dataLabelsGroup.animate(
                      {
                        opacity: 1,
                      },
                      void 0,
                      function () {
                        points.forEach((point) => {
                          point.opacity = 1;
                        });
                        series.update(
                          {
                            enableMouseTracking: true,
                          },
                          false
                        );
                        chart.update({
                          plotOptions: {
                            pie: {
                              innerSize: "40%",
                              borderRadius: 8,
                            },
                          },
                        });
                      }
                    );
                  }
                }
              );
          }
        }

        if (init) {
          points.forEach((point) => {
            point.opacity = 0;
          });
        } else {
          fanAnimate(points[0], startAngleRad);
        }
      };
    })(Highcharts);

    Highcharts.chart(containerId, {
      chart: {
        type: "pie",
      },
      title: {
        text: title,
        align: "left",
      },
      subtitle: {
        text: subtitle,
        align: "left",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          borderWidth: 2,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b><br>{point.percentage}%",
            distance: 20,
          },
        },
      },
      series: [
        {
          name: title,
          enableMouseTracking: false,
          animation: {
            duration: animationDuration,
          },
          colorByPoint: true,
          data: data,
        },
      ],
    });
  }, [containerId, title, subtitle, data, animationDuration]);

  return <div id={containerId}/>;
};

export default PieChart;
