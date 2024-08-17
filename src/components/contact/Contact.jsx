import { Button, Input, message } from "antd";
import axios from "axios";
import { useState } from "react";

const { TextArea } = Input;

function Contact() {
  const [email, setEmail] = useState({
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const onChange = (e) => {
    const { name, value } = e.target;
    setEmail((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(email);
  };
  const onFinish = async () => {
    // empty fields alert
    if (!email.subject || !email.message) {
      messageApi.error("Please fill in all fields", 5);
      return;
    }
    // console.log(email);
    setLoading(true);
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/auth/contact_members/",
        {
          subject: email.subject,
          message: email.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      messageApi.success("Email message sent successfully to all members!", 5);
      setEmail({ subject: "", message: "" });
    } catch (error) {
      console.log(error);
      messageApi.error("Error sending message", 5);
    } finally {
      setLoading(false);

      setEmail({ subject: "", message: "" });
    }
  };

  return (
    <div>
      {contextHolder}
      <h3 className=" font-medium text-xl text-[#569E23]"> Contact Members</h3>

      <p className="text-center bg-[#569E23] text-white p-2 w-fit mx-auto rounded-lg">
        Email will be sent to all members
      </p>
      <div className="max-w-[700px] mx-auto md:mt-5">
        {/* <div>
          <Typography.Title level={5}>Title</Typography.Title>
          <Input defaultValue="Hello, antd!" name="title" onChange={onChange} />
        </div> */}

        <div>
          <h3 className="font-medium text-lg text-slate-800">Subject</h3>
          <Input
            placeholder="Enter subject"
            name="subject"
            onChange={onChange}
            style={{ width: "100%", paddingBlock: "10px" }}
          />
        </div>

        <div className="mb-4 mt-3">
          <h3 className="font-medium text-lg text-slate-800">Message</h3>
          <TextArea
            showCount
            onChange={onChange}
            name="message"
            placeholder="Enter message"
            style={{ height: 200, resize: "none" }}
          />
        </div>

        <Button
          type="primary"
          className="bg-[#9E9A23] hover:bg-[#D18A0D] outline-none"
          size="large"
          onClick={onFinish}
          loading={loading}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Contact;
