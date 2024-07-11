import Chart from "chart.js/auto";
import { CategoryScale, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import useFetchData from "../../hooks/useFetchData";
import { Alert, Spin } from "antd";

// const Data = [
//   {
//     id: 1,
//     year: 2016,
//     userGain: 80000,
//     userLost: 823,
//   },
//   {
//     id: 2,
//     year: 2017,
//     userGain: 45677,
//     userLost: 345,
//   },
//   {
//     id: 3,
//     year: 2018,
//     userGain: 78888,
//     userLost: 555,
//   },
//   {
//     id: 4,
//     year: 2019,
//     userGain: 90000,
//     userLost: 4555,
//   },
//   {
//     id: 5,
//     year: 2020,
//     userGain: 4300,
//     userLost: 234,
//   },
// ];

Chart.register(CategoryScale, Filler, Legend);

function LineGraph() {
  const [res, loading] = useFetchData("saving/data/");

  console.log("res", res);
  // const [chartData, setChartData] = useState({
  //   labels: res && res?.map((data) => data.week),
  //   datasets: [
  //     {
  //       label: "Saving 2024",
  //       data: res && res?.map((data) => data.count),
  //       backgroundColor: ["blue"],
  //       borderColor: "black",
  //       borderWidth: 1,
  //     },
  //   ],
  // });
  const chartData = {
    labels: res && res?.map((data) => data.month),
    datasets: [
      {
        label: "Saving 2024",
        data: res && res?.map((data) => data.total_amount),
        backgroundColor: ["#589E23"],
        borderColor: "#2B3325",
        borderWidth: 1,
        fill: {
          target: "origin",
          above: "#589E23",
        },
        legend: "helo",
      },
    ],
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Spin tip="Loading...">
          <Alert
            message="Graph Loading..."
            description="Please wait while we load the graph"
            type="info"
          />
        </Spin>
      </div>
    );
  }

  console.log("chartData", chartData);

  return (
    <div className="w-full">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Monthly Savings (2024)",
            },
          },
        }}
      />
    </div>
  );
}

export default LineGraph;
