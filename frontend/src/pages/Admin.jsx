import React, { useState, use } from "react";
import { useNavigate } from "react-router-dom";
import NewUser from "../components/Newuser";
import axios from "axios";

import Navbar from "../components/Navbar";
import Users from "../components/UsersLayout";

export default function Admin() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleUpdate = async () => {
    if (latitude && longitude) {
      try {
        await axios.post("http://localhost:3000/tracking/office/update", {
          latitude,
          longitude,
        });
        alert("Office location updated successfully");
      } catch (err) {
        console.error("Error updating office location:", err.message);
      }
    } else {
      alert("Please obtain geolocation first.");
    }
  };

  return (
    <div className="w-full h-[100vh] bg-slate-200">
      <Navbar onClick={getGeolocation} update={handleUpdate} />
      <NewUser />
      <Users />
    </div>
  );
}
