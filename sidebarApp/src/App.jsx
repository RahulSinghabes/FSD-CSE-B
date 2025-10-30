import { useState } from "react";
import "./App.css";
import { Postcard } from "./components/profilecard";
import WebinarList from "./components/timetable";
import WebinarActions from "./components/adder";
import { Sidebar } from "./components/sidebar";

function App() {
  const [open, setOpen] = useState(true);

  function toggle() {
    setOpen((c) => !c);
    console.log("toggle");
  }

  return (
    <div className="relative flex">
      {/* Sidebar */}
      <Sidebar open={open} setopen={setOpen} />

      {/* Main content */}
      <div
        className={`flex-1 transition-all duration-500 ease-in-out
          
        `}
      >
        {/* Banner */}
        <div className="h-24 relative w-full transition-all duration-500 ease-in-out">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJoXH9fTp9xdOBksEudd8Ov6t-4OtQjeS454dHra4zGREfw_nK851X0N9SOxJdYYCiho&usqp=CAU"
            className="h-24 w-full  "
            alt="Webinar Banner"
          />

          {/* Button on image */}
          <div
            onClick={toggle}
            className={`absolute top-1/4 left-6
                        bg-teal-950 h-10 px-4 rounded-xl
                       flex justify-center items-center text-white cursor-pointer
                       hover:ring-1 hover:ring-white ${open ? "hidden":"block"} transition-all duration-500 ease-in-out`}
          >
            Webinar
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap justify-center m-5 gap-10 transition-all duration-500 ease-in-out">
          <div className="relative -translate-y-10">
            <Postcard />
          </div>

          <div className="space-y-5 m-10">
            <div>
              Monday, 14 October
              <div className="font-bold text-2xl">Good Morning, Sanjay! 👋</div>
            </div>
            <WebinarList />
          </div>

          <div className="space-y-5 m-10">
            <WebinarActions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
