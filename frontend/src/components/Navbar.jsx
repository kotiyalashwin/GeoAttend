export default function Navbar() {
  return (
    <div className="w-100 bg-white h-[10vh] flex justify-evenly items-center">
      <p>GeoAttend</p>
      <div className="flex space-x-4">
        <button className="">GetLocation</button>
        <buton>UpdateLocation</buton>
      </div>
    </div>
  );
}
