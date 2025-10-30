import { BadgeDollarSign, House, Monitor, Settings, SquareUser } from "lucide-react"

export function Sidebar({open,setopen}){
    const menu=[{icon:<House size={20}/>,label:"Home"},
                {icon:<Monitor size={20}/>,label:"Webinars"},
                {icon:<BadgeDollarSign size={20}/>,label:"Billing"},
                {icon:<SquareUser size={20}/>,label:"User-Management"},
                {icon:<Settings size={20}/>,label:"Settings"},
    ]
   
  function toggle(){
       setopen(c=>!c)
       console.log("toggle")
  }
return(
    <div className={`bg-teal-500 text-black shadow-xl h-screen flex flex-col transition-all duration-500 ease-in-out
        ${open ? "w-64" : " w-0"}`}>
        <div className="flex justify-between w-full p-6 mb-2">
          <div onClick={toggle} className="transition-all duration-300 bg-teal-950 h-10 p-4 rounded-xl flex justify-center items-center text-white cursor-pointer hover:ring-1 hover:ring-white" >Webinar</div>
           <img src="https://media.assettype.com/outlookindia/2025-01-06/ughlko40/1.png?w=452&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" className="h-10 w-10 rounded-md "/>
        </div>
         {menu.map((item,index)=>(
            <div key={index} className={`flex justify-between w-full ${open ? "p-6" : " p-0"} bg-teal-700 border-b-2 transition-all duration-500 ease-in-out`}>
                <div className="text-bold text-md text-white">{item.label}</div>
                <div className="text-bold text-md text-white mt-1 ">{item.icon}</div>
            </div>
         ))}
    </div>
)
}