export default function Timetable() {
  const webinars = [
    { time: "11:30 A.M", status: "Live", title: "UX Webinar" },
    { time: "11:30 A.M", status: "Upcoming", title: "My First Webinar" },
    { time: "11:30 A.M", status: "Upcoming", title: "Important Webinar" },
    { time: "11:30 A.M", status: "Upcoming", title: "Webinar 1" },
  ];
  return (
    <div className="space-y-2 shadow-2xl  w-96 h-64 rounded-2xl bg-white">
         
      {webinars.map((webinar, index) => (
        <div key={index} className="flex items-stretch space-x-5 px-3 border-t-2 ">
          <div>
            <div className="font-semibold text-lg">{webinar.time}</div>
            <div className="text-sm text-gray-700">{webinar.time}</div>
          </div>

          <div className="border-r-2 border-gray-300"></div>
          <div>
          <div
            className={`font-semibold flex ${webinar.status == "Live" ? "text-red-700" : "text-green-500"}`}
          >
            {webinar.status}{" "}
            {webinar.status == "Live" ? (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Red-dot.svg/2048px-Red-dot.svg.png"
                className="h-3 w-3 rounded-full mt-2 ml-1"
              />
            ) : (
              <img
                src="data:image/png;base64,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"
                className="h-3 w-3 rounded-full mt-2 ml-1"
              />
            )}
          </div>
          <div className="font-semibold text-lg">{webinar.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
