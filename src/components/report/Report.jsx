import React from "react";
import { Button, Dropdown, Menu, message } from "antd";
import LineGraph from "./Line";
import instance from "../api/axios/axios";

const handleItemClick = async (key) => {
  let endpoint = "";
  switch (key) {
    case "1":
      console.log("Downloading Savings Pdf Report");
      endpoint = "pdfs/Saving/";
      break;
    case "2":
      console.log("Downloading Loans Pdf Reports");
      endpoint = "pdfs/Loan/";
      break;
    case "3":
      endpoint = "pdfs/Payment/";
      break;
    case "4":
      console.log("Downloading Members Pdf Report");
      endpoint = "pdfs/User/";
      break;
    default:
      break;
  }

  if (endpoint) {
    try {
      message.loading({ content: "Downloading PDF...", key, duration: 0 });
      const response = await instance.get(`${endpoint}`, {
        responseType: "blob", // Ensure response type is blob
      });

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `report_${key}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        message.destroy(key);
      } else {
        console.error(
          "Error downloading PDF: Unexpected status",
          response.status
        );
      }
    } catch (error) {
      console.log("Error downloading PDF:", error);
      message.destroy(key);
      await message.error(
        `Error downloading PDF. May sure ${
          endpoint.split("/")[1]
        } is not empty or try again later.`
      );
    } finally {
      message.destroy(key);
    }
  }
};

const items = [
  {
    key: "4",
    label: (
      <Menu.Item key="4">
        <a rel="noopener noreferrer" onClick={() => handleItemClick("4")}>
          Members Pdf Report
        </a>
      </Menu.Item>
    ),
  },
  {
    key: "1",
    label: (
      <Menu.Item key="1">
        <a rel="noopener noreferrer" onClick={() => handleItemClick("1")}>
          Savings Pdf Report
        </a>
      </Menu.Item>
    ),
  },
  {
    key: "2",
    label: (
      <Menu.Item key="2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleItemClick("2")}
        >
          Loans Pdf Reports
        </a>
      </Menu.Item>
    ),
  },
  {
    key: "3",
    label: (
      <Menu.Item key="3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleItemClick("3")}
        >
          Payment Pdf Report
        </a>
      </Menu.Item>
    ),
  },
];

function Report() {
  const menu = <Menu>{items.map((item) => item.label)}</Menu>;

  return (
    <div>
      <div className="flex">
        <LineGraph />
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button>Download Pdf Reports</Button>
        </Dropdown>
      </div>
    </div>
  );
}

export default Report;
