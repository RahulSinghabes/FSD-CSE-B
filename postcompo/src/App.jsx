import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
        <PostComponent />
    <PostComponent />
    <PostComponent />
    </div>
    </>
  )
}
function PostComponent(){
    return (
   <div  style={{width:300 ,height:100,backgroundColor:'skyblue', borderRadius:20}}>
     <div style={{display:"flex"}}>
          <img src={"/bird.jpg"} alt='bird' style={{width:40, height:40, borderRadius:"50%" ,margin:10}}></img>
          <div>
             <b>
              Rahul singh
             </b>
             <div>
              10 m ago
             </div>
             <div>
              Professional
             </div>
          </div>
     </div>
     <div >Hey! guys i am starting with new position </div>
</div>
  );

}

export default App
