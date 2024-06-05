import useFetchData from "../../hooks/useFetchData";
import {
  TeamOutlined,
  InteractionOutlined,
  PauseCircleOutlined,
  WalletOutlined,
  DollarOutlined,
} from "@ant-design/icons";

function Home() {
  const [res] = useFetchData("loan/active");

  console.log(res);

  const homeArr = [
    {
      id: 1,
      bg: "#0D68D1",
      title: "Members",
      rate: res && res.total_users,
      icon: <TeamOutlined />,
    },
    {
      id: 2,
      bg: "#2D5C91",
      title: "Active Loans",
      rate: res && res.loan_count,
      icon: <InteractionOutlined />,
    },
    {
      id: 3,
      bg: "#D18A0D",
      title: "Total Loan Amount",
      rate: res && res.total_laon,
      icon: <DollarOutlined />,
    },
    {
      id: 4,
      bg: "#7C6131",
      title: "Unpaid Loans Amount",
      rate: res && res.total_remaining_amount,
      icon: <PauseCircleOutlined />,
    },
    {
      id: 5,
      bg: "#2E3E52",
      title: "Total Saving Amount",
      rate: res && res.total_saving,
      icon: <WalletOutlined />,
    },
  ];
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
              <h2 className="font-medium text-2xl pt-2">{rate}</h2>
            </div>
            <div className="text-2xl">{icon && icon}</div>
          </div>
          <div className="w-full h-[1px] my-4 bg-gray-300" />
          <div>
            <p>View Details</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
