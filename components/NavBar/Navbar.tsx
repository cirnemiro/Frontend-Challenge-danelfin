export default function Navbar() {
  return (
    <div className="bg-blue-900 w-full">
      <div className="max-w-[1200px] flex items-center justify-between  mx-auto p-4">
        <div className="text-white">Danelfin Logo</div>
        <div className="flex gap-2">
          <button className="border border-white text-white bg-blue-900 px-4 py-2 rounded">
            Log In
          </button>
          <button className=" text-white bg-yellow-500 px-4 py-2 rounded">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
