import React from 'react';
import { useState } from 'react';



export default function Legend() {
  const [godmode, setGodmode] = useState(false)
if (godmode === false)
  return (
  <>
  <div>I am on my come-up to destroy my enemies. Right now, I haven't ascended to god mode.</div>

  <button onClick={()=> setGodmode(true)}>
    Activate Godmode
  </button>
  </>
  ); else if (godmode === true)
    return (
    <>
    I AM A GOD!!!
    </>
  );
}
