import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeStatus from "../components/EmployeeStatus";
import axios from "axios";

export default function StatusPage() {
  const { name } = useParams();
  const [userlatitude, setLatitude] = useState(0);
  const [userlongitude, setLongitude] = useState(0);

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
        username: name,
        userlatitude: latitude,
        userlongitude: longitude,
      });
    } catch (err) {
      console.error("Error sending location update:", err.message);
    }
  };

  return (
    <div className="h-screen w-scree flex justify-center items-center bg-slate-200">
      <div className="bg-white h-[60vh] w-1/4 flex flex-col items-center justify-evenly shadow-md p-4">
        <div className="rounded-full h-14 w-14 bg-black flex  justify-center mt-1 mr-2">
          <div className=" flex flex-col text-white justify-center h-full text-4xl">
            {name[0].toUpperCase()}
          </div>
        </div>
        <p className="text-2xl">{`${name.toUpperCase()}'s Status`}</p>
        <EmployeeStatus />
      </div>
    </div>
  );
}
