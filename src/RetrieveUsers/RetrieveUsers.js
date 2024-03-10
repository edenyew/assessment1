import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomTable from "../Components/CustomTable";
import "./RetrieveUsers.css";

const RetrieveUsers = () => {
  const [retrievedUsers, setRetrievedUsers] = useState([]);
  const dummyAPI = "https://jsonplaceholder.typicode.com/users";

  const handleRetrieveUsers = async () => {
    try {
      const response = await fetch(dummyAPI);
      const users = await response.json();
      const processedUsers = users.map((user) => ({
        ...user,
        address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
      }));
      setRetrievedUsers(processedUsers);
    } catch (error) {
      console.error("Error retrieving users:", error);
    }
  };

  const columns = [
    "ID",
    "Name",
    "Username",
    "Email",
    "Address",
    "Phone",
    "Website",
    "Company",
  ];

  return (
    <div className="container">
      <Button variant="contained" onClick={handleRetrieveUsers}>
        Retrieve Users
      </Button>
      {retrievedUsers.length > 0 && (
        <div className="tableWrapper">
          <h2>List of Users</h2>
          <CustomTable columns={columns} data={retrievedUsers} />
        </div>
      )}
    </div>
  );
};

export default RetrieveUsers;
