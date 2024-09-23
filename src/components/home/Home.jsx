import { Alert, Spin } from "antd";
import useFetchData from "../../hooks/useFetchData";
import {
  TeamOutlined,
  InteractionOutlined,
  PauseCircleOutlined,
  WalletOutlined,
  DollarOutlined,
  SwitcherOutlined,
  MonitorOutlined,
} from "@ant-design/icons";

function Home() {
  const [res, loading] = useFetchData("loan/active");

  console.log(res);

  const homeArr = [
    {
      id: 1,
      bg: "#569E23",
      title: "Members",
      rate: res && res.total_users,
      icon: <TeamOutlined />,
    },
    {
      id: 2,
      bg: "#415E2C",
      title: "Active Loans",
      rate: res && res.loan_count,
      icon: <InteractionOutlined />,
    },
    {
      id: 3,
      bg: "#98239E",
      title: "Total Loan Amount",
      rate: res && res.total_laon,
      icon: <DollarOutlined />,
    },
    {
      id: 3,
      bg: "#415E2C",
      title: "Unpaid Loans Amount",
      rate: res && res.total_remaining_amount,
      icon: <PauseCircleOutlined />,
    },
    {
      id: 9,
      bg: "#472849",
      title: "Total Loan Cost",
      rate: res && res.total_cost,
      icon: <MonitorOutlined />,
    },
    {
      id: 5,
      bg: "#2B3325",
      title: "Total Saving Amount",
      rate: res && res.total_saving,
      icon: <WalletOutlined />,
    },
    {
      id: 6,
      bg: "#569E23",
      title: "Total Wagubumbuzi Amount",
      rate: res && res.total_wagubumbuzi,
      icon: <SwitcherOutlined />,
    },
  ];

  if (loading)
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Spin tip="Loading...">
          <Alert
            message="Summary Info"
            description="Please wait while we load the data"
            type="info"
          />
        </Spin>
      </div>
    );

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UGX",
  });

  return (
    <div className="grid grid-cols-auto-fit gap-5">
      {homeArr.map(({ id, bg, title, rate, icon }) => (
        <div
          key={id}
          className="p-5 text-white rounded-xl shadow-xl"
          style={{ backgroundColor: `${bg}` }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h2>{title}</h2>
              <h2 className="font-medium text-2xl pt-2">
                {title !== "Members" && title !== "Active Loans"
                  ? formatter.format(rate)
                  : rate}
              </h2>
            </div>
            <div className="text-2xl">{icon && icon}</div>
          </div>
          <div className="w-full h-[1px] my-4 bg-gray-300" />
          {/* <div>
            <p>View Details</p>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Home;
