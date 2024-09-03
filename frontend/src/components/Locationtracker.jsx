import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Loactiontrack({ name }) {
  const [userlatitude, setLatitude] = useState(null);
  const [userlongitude, setLongitude] = useState(null);

  useEffect(() => {
    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
          console.log(latitude, longitude);
          sendLocationUpdate(latitude, longitude); // Call function to send the location
        },
        (error) => {
          console.error("Error getting location:", error.message);
        },
        {
          enableHighAccuracy: true, // Request high accuracy
        }
      );
    };
    updateLocation(); // Initial call
    const intervalId = setInterval(updateLocation, 5000); // Call every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const sendLocationUpdate = async (latitude, longitude) => {
    try {
      console.log("location send");

      await axios.post("http://localhost:3000/tracking/employee/update", {
        name,
        latitude,
        longitude,
      });
    } catch (err) {
      console.error("Error sending location update:", err.message);
    }
  };

  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="h-2/5 w-2/5 shadow-md flex flex-col  justify-evenly items-center ">
        <h2 className="bg-blue-400 p-4 rounded-lg  text-2xl">
          Tracking Location...
        </h2>
        {userlatitude && userlongitude && (
          <div className="flex w-full justify-evenly items-center">
            <p className="bg-black rounded-lg p-2 text-white">
              Latitude: {userlatitude}
            </p>
            <p className="bg-black rounded-lg p-2 text-white">
              Longitude: {userlongitude}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
