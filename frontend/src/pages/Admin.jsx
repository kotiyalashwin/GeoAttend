import React, { useState, use } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Admin() {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (latitude && longitude) {
      try {
        await axios.post("http://localhost:3000/officelocation/set", {
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
      <Navbar onClick={getGeolocation} />
      <h2>Set Office Location</h2>
      <button onClick={getGeolocation}>Get Current Location</button>
      {latitude && longitude && (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <button type="submit">Update Location</button>
      </form>

      <Link to={"/employee"}>EmployeeDashboard</Link>
    </div>
  );
}
