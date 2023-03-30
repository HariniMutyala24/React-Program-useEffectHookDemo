import {useState,useEffect} from 'react';
function DigitalClockDemo(){
    const [date,setDate]=useState(new Date());
    useEffect(()=>{
        setInterval(()=>{setDate(new Date())},1000);
    });
    return(
        <div>
            <h1>UseEffect Demo:Digital Clock</h1>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    );
}
export default DigitalClockDemo;