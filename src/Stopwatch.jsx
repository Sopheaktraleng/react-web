import React, {useState, useEffect, useRef} from "react";
function Stopwatch(){
    const [isRunning, setIsRuning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const startTimeRef = useRef(0);
    const intervalIdRef = useRef(null)
    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
        setElapsedTime(Date.now()- startTimeRef.current);
    },10);
}
return () => {
    clearInterval(intervalIdRef.current);
}
    }, [isRunning]);
    function start(){
        setIsRuning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRuning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRuning(false)
    }
    function formatTime(){;
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);
        hours = String(hours).padStart(2,"0")
        minutes = String(minutes).padStart(2,"0")
        seconds = String(seconds).padStart(2,"0")
        milliseconds = String(milliseconds).padStart(2,"0")
        return `${minutes}:${seconds}:${milliseconds}`
    }
    return(
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
                <div className="controls">
                    <button onClick={start} className="start-btn">Start</button>
                    <button onClick={stop} className="stop-btn">Stop</button>
                    <button onClick={reset} className="reset-btn">Reset</button>
                </div>
            </div>
        </div>
    );
}
export default Stopwatch