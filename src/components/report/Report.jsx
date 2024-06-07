import { Button, Dropdown } from "antd";
import LineGraph from "./Line";

const items = [
  {
    key: "4",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Members Pdf Report
      </a>
    ),
  },
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Savings Pdf Report
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Loans Pdf Reports
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Payment Pdf Report
      </a>
    ),
  },
];

function Report() {
  return (
    <div>
      <div className=" flex">
        <LineGraph />
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft"
          arrow
        >
          <Button>Download Pdf Reports</Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default Report;
