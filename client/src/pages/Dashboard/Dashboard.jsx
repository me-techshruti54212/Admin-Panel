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
      name: "Videos",
      data: [
        ["2024-04-03", 0],
        ["2024-04-05", 5],
        ["2024-04-09", 0],
        ["2024-04-12", 0],
        ["2024-04-15", 1],
        ["2024-04-18", 2],
        ["2024-04-20", 1],
        ["2024-04-22", 1],
        ["2024-04-27", 8],
        ["2024-04-29", 0],
        ["2024-04-30", 1],
        ["2024-05-07", 0],
        ["2024-05-09", 6],
        ["2024-05-11", 1],
        ["2024-05-15", 0],
        ["2024-05-22", 0],
        ["2024-05-23", 0],
        ["2024-05-24", 0],
        ["2024-05-25", 2],
        ["2024-05-28", 1],
        ["2024-05-31", 1],
        ["2024-06-01", 1],
        ["2024-06-12", 0],
        ["2024-07-08", 0],
        ["2024-07-20", 1],
      ]
    },
    {
      name: "Photos",
      data: [
        ["2024-04-03", 4],
  ["2024-04-05", 3],
  ["2024-04-09", 14],
  ["2024-04-12", 2],
  ["2024-04-15", 1],
  ["2024-04-18", 1],
  ["2024-04-20", 2],
  ["2024-04-22", 0],
  ["2024-04-27", 1],
  ["2024-04-29", 3],
  ["2024-04-30", 2],
  ["2024-05-07", 2],
  ["2024-05-09", 1],
  ["2024-05-11", 1],
  ["2024-05-15", 1],
  ["2024-05-22", 1],
  ["2024-05-23", 2],
  ["2024-05-24", 0],
  ["2024-05-25", 3],
  ["2024-05-28", 2],
  ["2024-05-31", 1],
  ["2024-06-01", 2],
  ["2024-06-12", 2],
  ["2024-07-08", 1],
  ["2024-07-20", 3],
      ],
    },
  ]

  return (
    <>
      <NavBar />
      <div className="w-full flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-8 gap-2 p-2 pt-4 w-full">
            <DashCard title="Total Users" number="1000" />
            <DashCalendarCard title="Total Users" number="1000" />
            <DashCalendarCard title="Total Users" number="1000" />
            <DashCalendarCard title="Total Users" number="1000" />
            <DashCalendarCard title="Total Users" number="1000" />
            <DashCard title="Active Users" number="750" />
            <DashCard title="New Users" number="250" />
            <DashCard title="Revenue" number="$10,000" />
            <DashCard title="Expenses" number="$5,000" />
            <DashCard title="Profits" number="$5,000" />
            <DashCard title="Customer Support" number="95%" />
            <DashCard title="Development" number="90%" />
            <DashCard title="Sales" number="85%" />
            <DashCard title="Marketing" number="80%" />
            <DashCard title="Growth" number="20%" />
            <DashCard title="Feedback" number="Positive" />
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
            <LineChart 
              containerId={"lineChartContainer"} 
              title={"Images V/s Videos"} 
              subtitle={"Images and videos uploaded by users"} 
              seriesData={LineChartData} 
              xAxisDescription={"Dates"} 
              yAxisTitle={"Images V/s Videos"}
              startDate={"2024-04-03"}
              endDate={"2024-07-20"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
