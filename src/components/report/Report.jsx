import { Button } from "antd";
import LineGraph from "./Line";

function Report() {
  return (
    <div>
      <div className=" flex">
        <LineGraph />
        <Button>Download Saving Report</Button>
      </div>
    </div>
  );
}

export default Report;
