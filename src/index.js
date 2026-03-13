import {createRoot} from 'react-dom/client';
import { useState, useEffect } from "react";
const element=(

<table>
<tr>
  <th>fruits</th>
</tr>
<tr>
  <th>car</th>
</tr>

</table>

);
const arr = ["hunza", "hnoor","aliza"];
function Tring(props){return(
    arr.map((name, i) => <h1><li key={props.index[i]}>THIS IS CAR NO: {props.index[i]} AND ITS NAME IS {name} </li></h1>)
  
)
}



function TrafficLight() {

  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => {
        if (prev === "red") return "yellow";
        if (prev === "yellow") return "green";
        if (prev === "green") return "red";
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Traffic Light</h2>
      <div style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "red",
        opacity: light === "red" ? 1 : 0.3
      }}></div>

      <div style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "yellow",
        opacity: light === "yellow" ? 1 : 0.3
      }}></div>

      <div style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: "green",
        opacity: light === "green" ? 1 : 0.3
      }}></div>
</div>

  );
}




const root =createRoot(document.getElementById('sandy'));
root.render(
  <>
  <h1>HUNZA SAANDEELA</h1>
  <p>WELCOME!</p>
  <TrafficLight />
  </>
)