import React from "react";
import NavBar from "../../components/NavBar";
import DashCard from "../../components/Dashboard/DashCard";
import PieChart from "../../components/Dashboard/PieChart";
import LineChart from "../../components/Dashboard/LineChart";
import Sidebar from "../../components/Sidebar";
import DashCalendarCard from "../../components/Dashboard/DashCalendarCard";

const Dashboard = () => {
  const PieChartData = [
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
  ];

  const LineChartData = [
    {
      name: "Images Vs Videos",
      data: [
        24916, 37941, 29742, 29851, 32490, 30282, 38121, 36885, 33726,
        34243, 31050, 33099, 33473,
      ],
    }
  ] 

  return (
    <>
      <NavBar />
      <div className="w-full flex">
        <Sidebar/>
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-8 gap-2 p-2 pt-4 w-full">
            <DashCard />
            <DashCalendarCard />
            <DashCalendarCard />
            <DashCalendarCard />
            <DashCalendarCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
            <DashCard />
          </div>
          <div className="grid grid-cols-2 w-full p-2">
            <PieChart
              containerId={"interestsContainer"}
              title={"Interests"}
              subtitle={"Interests of Users"}
              animationDuration={2000}
              data={PieChartData}
            />
            <PieChart
              containerId={"skillsContainer"}
              title={"Skills"}
              subtitle={"Skills of Users"}
              animationDuration={2000}
              data={PieChartData}
            />
          </div>
          <div className="w-full p-2">
            <LineChart containerId={"lineChartContainer"} title={"Images V/s Videos"} subtitle={"Images and videos uploaded by users"} seriesData={LineChartData} xAxisDescription={"Images"} yAxisTitle={"Videos"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
