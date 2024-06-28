import { Alert, Button, Spin } from "antd";

import EditModalComponent from "../ui/modal/EditModal";

import useStore from "../../global/GlobalStates";
import formFields from "../../utils/formFields";
import useFetchData from "../../hooks/useFetchData";
import getById from "../api/api_routes/getById";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCreate from "../../global/DataState";

function Users() {
  const openEditModal = useStore((state) => state.openEditModal);
  const [profileData, setProfileData] = useState();
  const dataCreated = useCreate((state) => state.dataCreated);

  const [res, loading] = useFetchData("user_profile/");

  const { id } = useParams();

  const result = async () => {
    try {
      const response = await getById("user_profile/profile", id);
      console.log("response", response.data);
      setProfileData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    result();
    console.log("result", profileData);
  }, []);

  console.log("below", profileData);
  dataCreated && result();

  let userData;

  if (profileData && profileData.length > 0) {
    userData = profileData[0];
  } else {
    return (
      <div className="h-full w-full flex justify-center items-center">
        {loading && (
          <Spin tip="Loading...">
            <Alert
              message="Profile Loading"
              description="Please wait while we load your profile"
              type="info"
            />
          </Spin>
        )}
      </div>
    );
  }

  const initialValue = {
    first_name: profileData[0].user.first_name,
    last_name: profileData[0].user.last_name,
    email: profileData[0].user.email,
    is_staff: profileData[0].user.is_staff,
    occupation: userData.occupation,
    residence: userData.residence,
  };

  return (
    <div>
      {loading && "loading.."}
      <div className="flex justify-between items-center mb-4">
        <img
          src={
            profileData[0].image_url ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="helo"
          className="w-[150px] h-[150px] object-cover rounded-full"
        />
        <Button onClick={openEditModal}>Edit Profile</Button>
      </div>
      <EditModalComponent
        data={formFields.userProvideFields}
        title={"Edit Profile"}
        initial={initialValue}
        id={profileData[0].id}
        api={"user_profile"}
      />
      <div>
        <div className="leading-loose">
          <h1 className="text-base pt-2">
            Full Name:{" "}
            <span className="text-base">{`${userData.user.first_name} ${userData.user.last_name}`}</span>
          </h1>

          <h1 className="text-base pt-1">
            Membership Id: <span className="text-base"></span>
            {userData.user.username}
          </h1>
          <h1 className="text-base pt-1">
            Gender: <span className="text-base"></span>
            {userData.gender}
          </h1>
          <h1 className="text-base pt-1">
            Email: <span className="text-base">{userData.user.email}</span>
          </h1>
          <h3 className="text-base pt-1">
            Contact: <span className="text-base">{userData.telephone}</span>
          </h3>
          <h3 className="text-base pt-1">
            Occupation: <span className="text-base">{userData.occupation}</span>
          </h3>
          <h3 className="text-base pt-1">
            Residence: <span className="text-base">{userData.residence}</span>
          </h3>
          <h3 className="text-base pt-1">
            Is Admin:{" "}
            <span className="text-base">
              {userData.user.is_staff ? "True" : "False"}
            </span>
          </h3>
          <h3 className="text-base pt-1">
            Registered On:{" "}
            <span className="text-base">{userData.user.date_joined}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Users;

// TODO
// serializer userId in url
