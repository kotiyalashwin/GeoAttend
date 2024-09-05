import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

export default function EmployeeStatus() {
  const { name } = useParams();
  const [result, setStatus] = useState({});

  useEffect(() => {
    async function getStatus() {
      const response = await axios.get(
        `http://localhost:3000/admin/getstatus/status/${name}`
      );

      setStatus(response.data.result);
    }
    getStatus();
    const intervalId = setInterval(getStatus, 3000); // Call every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [name]);

  return (
    <div className="flex flex-col  justify-evenly items-center space-y-4 p-2 w-full">
      {result.status === "check-in" ? (
        <div className="bg-green-500 text-white font-semibold py-4 px-6 rounded-md shadow-md flex justify-center items-center cursor-pointer hover:bg-green-600">
          Check-in
        </div>
      ) : (
        <div className="bg-red-500 text-white font-semibold py-4 px-6 rounded-md shadow-md flex justify-center items-center cursor-pointer hover:bg-red-600">
          Check-out
        </div>
      )}

      {result.status === "check-in" ? (
        <p className="bg-orange-400 text-white p-4 rounded-lg">{`${name} is Present`}</p>
      ) : (
        <p className="bg-purple-300 text-black p-4 rounded-lg">{`${name} is Absent`}</p>
      )}
    </div>
  );
}
