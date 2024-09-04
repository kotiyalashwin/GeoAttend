import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function EmployeeStatus() {
  const { name } = useParams();
  const [status, setStatus] = useState("");

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
    <div className="flex  flex-col justify-center items-center space-y-4 p-4 w-full">
      {status === "check-in" ? (
        <div className="bg-green-500 text-white font-semibold py-4 px-6 rounded-md shadow-md flex justify-center items-center cursor-pointer hover:bg-green-600">
          Check-in
        </div>
      ) : (
        <div className="bg-red-500 text-white font-semibold py-4 px-6 rounded-md shadow-md flex justify-center items-center cursor-pointer hover:bg-red-600">
          Check-out
        </div>
      )}

      {status === "check-in" ? (
        <p>{`${name} is Present`}</p>
      ) : (
        <p>{`${name} is Absent`}</p>
      )}
    </div>
  );
}
