import { Button } from "antd";

import EditModalComponent from "../ui/modal/EditModal";

import useStore from "../../global/GlobalStates";
import formFields from "../../utils/formFields";
import useFetchData from "../../hooks/useFetchData";
import getById from "../api/api_routes/getById";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Users() {
  const openEditModal = useStore((state) => state.openEditModal);
  const [profileData, setProfileData] = useState();

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

  let userData;

  if (profileData && profileData.length > 0) {
    userData = profileData[0];
  } else {
    return <h1>{loading && "loading.."}</h1>;
  }

  const initialValue = {
    first_name: profileData[0].user.first_name,
    last_name: profileData[0].user.last_name,
    email: profileData[0].user.email,
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
          className="w-[150px] h-[100px] object-cover"
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
        <div>
          <h1>
            Full Name:{" "}
            {`${userData.user.first_name} ${userData.user.last_name}`}
          </h1>
          <h1>Membership Id: {userData.user.username}</h1>
          <h1>Email: {userData.user.email}</h1>
          <h3>Contact: 995876544567</h3>
          <h3>Occupation: {userData.occupation}</h3>
          <h3>Residence: {userData.residence}</h3>
          <h3>Is Admin: {userData.user.is_staff ? "True" : "False"}</h3>
          <h3>Registered On: {userData.user.date_joined}</h3>
        </div>
      </div>
    </div>
  );
}

export default Users;

// TODO
// serializer userId in url
