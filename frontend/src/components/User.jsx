import { Link, useNavigate } from "react-router-dom";

export default function User({ name, key }) {
  const navigate = useNavigate();

  const handleGetStatus = () => {
    navigate(`/status/${name}`);
  };
  return (
    <div className="flex justify-between p-2 shadow-sm border rounded-md my-5 bg-white  ">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-black flex  justify-center mt-1 mr-2">
          <div className=" flex flex-col text-white justify-center h-full text-xl">
            {name[0].toUpperCase()}
          </div>
        </div>
        <p className="font-semibold text-black text-lg">{name}</p>
      </div>
      <div className="w-[15%] h-full flex justify-center items-center">
        <button
          onClick={handleGetStatus}
          className="bg-blue-400 content-center p-2 text-xl"
        >
          Get Status
        </button>
      </div>
    </div>
  );
}
