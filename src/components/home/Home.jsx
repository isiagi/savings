import { Divider } from "antd";

function Home() {
  return (
    <div className="grid grid-cols-auto-fit gap-5">
      {[1, 2, 3, 4].map((i) => (
        <div key={i}>
          <div>
            <h2>Today Payment</h2>
            <h2>2909000</h2>
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
