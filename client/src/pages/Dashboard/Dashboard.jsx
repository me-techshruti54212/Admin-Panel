import React, { useEffect } from "react";
import Highcharts from "highcharts";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
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

    Highcharts.chart("skillsContainer", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Interests of Employees",
        align: "left",
      },
      subtitle: {
        text: "Demo Text to be added",
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
          name: "Departments",
          enableMouseTracking: false,
          animation: {
            duration: 2000,
          },
          colorByPoint: true,
          data: [
            {
              name: "Customer Support",
              y: 21.3,
            },
            {
              name: "Development",
              y: 18.7,
            },
            {
              name: "Sales",
              y: 20.2,
            },
            {
              name: "Marketing",
              y: 14.2,
            },
            {
              name: "Other",
              y: 25.6,
            },
          ],
        },
      ],
    });
    Highcharts.chart("interestsContainer", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Interests of Employees",
        align: "left",
      },
      subtitle: {
        text: "Demo Text to be added",
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
          name: "Departments",
          enableMouseTracking: false,
          animation: {
            duration: 2000,
          },
          colorByPoint: true,
          data: [
            {
              name: "Customer Support",
              y: 21.3,
            },
            {
              name: "Development",
              y: 18.7,
            },
            {
              name: "Sales",
              y: 20.2,
            },
            {
              name: "Marketing",
              y: 14.2,
            },
            {
              name: "Other",
              y: 25.6,
            },
          ],
        },
      ],
    });
    Highcharts.chart("dailyUserSignUps", {
      title: {
        text: "Daily Users Sign Ups",
        align: "left",
      },

      subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: "left",
      },

      yAxis: {
        title: {
          text: "Number of Employees",
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: "Range: 2010 to 2022",
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
          pointStart: 2010,
        },
      },

      series: [
        {
          name: "Installation & Developers",
          data: [
            43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
            161454, 154610, 168960, 171558,
          ],
        },
        {
          name: "Manufacturing",
          data: [
            24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726,
            34243, 31050, 33099, 33473,
          ],
        },
        {
          name: "Sales & Distribution",
          data: [
            11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243,
            29213, 25663, 28978, 30618,
          ],
        },
        {
          name: "Operations & Maintenance",
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            11164,
            11218,
            10077,
            12530,
            16585,
          ],
        },
        {
          name: "Other",
          data: [
            21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
            10073, 11471, 11648,
          ],
        },
      ],

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
    Highcharts.chart("screenTimeContainer", {
      title: {
        text: "Daily Users Sign Ups",
        align: "left",
      },

      subtitle: {
        text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        align: "left",
      },

      yAxis: {
        title: {
          text: "Number of Employees",
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: "Range: 2010 to 2022",
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
          pointStart: 2010,
        },
      },

      series: [
        {
          name: "Installation & Developers",
          data: [
            43934, 48656, 65165, 81827, 112143, 142383, 171533, 165174, 155157,
            161454, 154610, 168960, 171558,
          ],
        },
        {
          name: "Manufacturing",
          data: [
            24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726,
            34243, 31050, 33099, 33473,
          ],
        },
        {
          name: "Sales & Distribution",
          data: [
            11744, 30000, 16005, 19771, 20185, 24377, 32147, 30912, 29243,
            29213, 25663, 28978, 30618,
          ],
        },
        {
          name: "Operations & Maintenance",
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            11164,
            11218,
            10077,
            12530,
            16585,
          ],
        },
        {
          name: "Other",
          data: [
            21908, 5548, 8105, 11248, 8989, 11816, 18274, 17300, 13053, 11906,
            10073, 11471, 11648,
          ],
        },
      ],

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
  }, []);

  const dataItems = [
    { label: "Total Users", value: 100 },
    { label: "Active Users", value: 85 },
    { label: "New Signups", value: 20 },
    { label: "Bounce Rate", value: "12%" },
    { label: "Revenue", value: "$500K" },
    { label: "Engagement", value: "80%" },
    { label: "Retention", value: "65%" },
  ];

  return (
    <>
      <Header />
      <div className="flex justify-between px-12">
        <Sidebar />
        <div className="w-full">
          <div className="p-2.5 rounded-md bg-white mt-3 shadow-sm w-full">
            <h1 className="bg-[#214139] text-white text-left py-1.5 pl-5 text-base w-full">
              DASHBOARD
            </h1>
            <div className="w-full">
              <div className="flex flex-col w-full">
                <div className="bg-[#ddd] rounded-tr-md rounded-tl-md font-normal border border-slate-300 flex justify-evenly gap-4 w-full">
                  {dataItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-slate-500 border-l-2 border-r-2 border-black p-4"
                    >
                      <h1 className="text-white text-center text-xl">
                        {item.label}
                      </h1>
                      <h1 className="text-white text-center">{item.value}</h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="border" id="skillsContainer">
                  {/* The container for Skills */}
                </div>
                <div className="border" id="interestsContainer">
                  {/* The container for Interests */}
                </div>
                <div className="border" id="dailyUserSignUps">
                  {/* The container for Daily User Sign Ups */}
                </div>
                <div className="border" id="screenTimeContainer">
                  {/* The container for Screen Time */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
