import { Divider } from "antd";

const homeArr = [
  {
    id: 1,
    bg: "blue",
    title: "Payments Today",
  },
  {
    id: 2,
    bg: "green",
    title: "Borrowers",
  },
  {
    id: 3,
    bg: "yellow",
    title: "Active Loans",
  },
  {
    id: 4,
    bg: "purple",
    title: "Total Recieveiable",
  },
];

function Home() {
  return (
    <div className="grid grid-cols-auto-fit gap-5">
      {homeArr.map(({ id, bg, title }) => (
        <div
          key={id}
          className="p-5 text-white"
          style={{ backgroundColor: `${bg}` }}
        >
          <div>
            <h2>{title}</h2>
            <h2 className="font-semibold">2909000</h2>
          </div>
          <Divider />
          <div>
            <p>View Details</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
