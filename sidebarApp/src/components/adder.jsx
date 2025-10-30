import { CalendarDays, Plus, FileVideoCamera } from "lucide-react";

export default function WebinarActions() {
  const actions = [
    { icon: <CalendarDays size={28} />, label: "Schedule a Webinar" },
    { icon: <Plus size={28} />, label: "Join a Webinar" },
    { icon: <FileVideoCamera size={28} />, label: "Open Recordings" },
     
  ];

  return (
    <div className="flex flex-wrap bg-white items-center justify-between p-2 h-64 w-80 shadow-2xl hover:scale-105  rounded-xl hover:ring-2 hover:ring-teal-500">
      {actions.map((item, i) => (
        <div key={i} className="flex flex-col items-center p-5  ">
          <div className="bg-teal-300 p-4 rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform">
            {item.icon}
          </div>
          <span className="text-sm font-medium text-gray-800">{item.label}</span>
        </div>
      ))}
    </div>
  ); 
}
