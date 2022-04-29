/** @format */

import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import AccountSetting from "../pages/creator/Account";
const UserProfile = () => {
  const { getUserData } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    setLoading(true);
    getUserData()
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
        // if (error.response.status === 404) {
        //   setLoading(true);
        // }
      });

    setLoading(false);
  }, [getUserData]);

  if (loading) {
    return (
      <div>
        <h3>Loading.....</h3>
      </div>
    );
  }

  return <AccountSetting user={user} />;
};

export default UserProfile;
