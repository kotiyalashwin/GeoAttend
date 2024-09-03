export default function Navbar({ onClick, update }) {
  return (
    <div className="w-100 bg-white h-[10vh] flex justify-between items-center p-4">
      <p className="text-3xl">GeoAttend</p>
      <div className="flex space-x-4 h-100">
        <button className="bg-yellow-400 p-2 rounded-md h" onClick={onClick}>
          GetLocation
        </button>
        <button className="bg-orange-400 p-2 rounded-md" onClick={update}>
          UpdateLocation
        </button>
      </div>
    </div>
  );
}
