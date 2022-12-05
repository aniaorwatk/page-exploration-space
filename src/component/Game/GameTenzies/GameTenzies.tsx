import Die from "./Die/Die";
import "./GameTenzies.scss"

const GameTenzies =()=>{

const randomNumber = Math.floor(Math.random() * 6);
 
    return(
        <div>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>
<Die 
value={randomNumber}
/>

        </div>
    )
}

export default GameTenzies