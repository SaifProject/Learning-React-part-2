import { useState } from "react"
export default function Batsman(){
    let [runs,setRuns] = useState(0);

        const [sixes ,setSixes]=useState(0);
        const [four ,setFour]=useState(0);
        

    const habndleSingle=()=>{
        const updateRuns=runs+1;
        setRuns(updateRuns);
    }
    const habndleFour=()=>{
        const updateRuns=runs+4;
        const updateFour=four+1;
        setFour(updateFour);
        setRuns(updateRuns);
    }
    const habndleSix=()=>{
        const updateRuns=runs+6;
        const updateSixes=sixes+1;
        setSixes(updateSixes);
        setRuns(updateRuns);
    }


    return (
        <div>
            <h3> Player : bangla batsman</h3>
              <p> Six : {sixes}</p>
              <p> Four : {four}</p>
            <h1> Score :{runs} </h1>
            <button onClick={habndleSingle}> 1 run </button>
            <button onClick={habndleFour}> 4 run </button>
            <button onClick={habndleSix}> 6 run </button>
        </div>
    )
} 