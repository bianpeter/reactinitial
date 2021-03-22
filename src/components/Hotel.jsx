import React, {useState, useEffect} from "react";
import Subscription from "./Subscription";

function Hotel({name,city,star}) {

  const [show, setShow] = useState(false);

  return (
    <div className="block">
      <h2>{name}</h2>

      {show 
        ? <button className="show-btn" onClick={() => setShow(false)}>Show less</button> 
        : <button className="show-btn" onClick={() => setShow(true)}>Show more</button>
      }
      {show && <p>{city}({star})</p>}
      {show && <Subscription name={name}/>}
    </div>
  )
}

export default Hotel
