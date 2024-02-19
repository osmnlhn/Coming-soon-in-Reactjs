import React ,{useState} from "react";

function OnOff(){
const on =
  "https://cdn1.iconfinder.com/data/icons/iconoir-vol-3/24/on-rounded-256.png";
const off =
  "https://cdn1.iconfinder.com/data/icons/iconoir-vol-3/24/off-rounded-256.png";
  
  const [lightOn, setLightOn] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    // Sayacı artır
    setClickCount(clickCount + 1);
    setLightOn(!lightOn);
  };

  return (
    <div onClick={handleClick} className="App">
      {lightOn === false ? <img src={on} alt="random avengers img" /> : <img src={off} alt="random avengers img"/>}
      <p>Click count: {clickCount}</p>
    </div>
  );
}

export default OnOff;