import React, {useState, useEffect} from "react";

function Subscription({name}) {

  const [show, setShow] = useState(false);


  function submit () {
    console.log(email)

  }

  const [email, setEmail] = useState("");
  return (
    <div>
      {show 
        ? <button onClick={() => setShow(false)}>Request more info about {name} </button> 
        : <button onClick={() => setShow(true)}>Request more info about {name}</button>}

      {show && 
        <form>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={e => setEmail(e.target.value)}>
          </input>
          <button 
            disabled={!(email.includes("@" && "."))} 
            onClick={submit()} 
          >
            Submit
          </button>
        </form>
      }
    </div>
  )
}

export default Subscription
