import { useEffect, useState ,useRef} from "react";
import Verify from "./Verify";
import "./App.scss"
import Square from "./Components/Square";

function App() {
  const [player, setPlayer] = useState("X");
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');
  const [val5, setVal5] = useState('');
  const [val6, setVal6] = useState('');
  const [val7, setVal7] = useState('');
  const [val8, setVal8] = useState('');
  const [val9, setVal9] = useState('');
  const [win, setWin] = useState('');
  const renderPlayer=useRef('O')
useEffect(()=>{ Verify(player,renderPlayer,val1,val2,val3,val4,val5,val6,val7,val8,val9,setWin)
  
  renderPlayer.current=player
  
  
 })
  return (
    <>
    <div className="tic-tac-toe"> Tic-tac-toe</div>
    <div className="play-space">
      <div className='bar'></div>
      <div className='bar bar2'></div>
      <div className='bar3 '></div>
      <div className='bar3 bar4'></div>
    <div className="positions">
      <div className="text">{win}</div>
      <div className='spacee'>
        <Square
          setVal={setVal1}
          val={val1}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
        <Square
          setVal={setVal2}
          val={val2}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
        <Square
          setVal={setVal3}
          val={val3}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
      </div>
      <div className='spacee'>
        <Square
          setVal={setVal4}
          val={val4}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
        <Square
          setVal={setVal5}
          val={val5}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
        <Square
          setVal={setVal6}
          val={val6}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
      </div>
      <div className='spacee'>
        <Square
          setVal={setVal7}
          val={val7}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
        <Square
          setVal={setVal8}
          val={val8}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
        <Square
          setVal={setVal9}
          val={val9}
          setPlayer={setPlayer}
          player={player}
          win={win}
        />
      </div>
      <button className='restart' onClick={()=>{
        setVal1('')
        setVal2('')
        setVal3('')
        setVal4('')
        setVal5('')
        setVal6('')
        setVal7('')
        setVal8('')
        setVal9('')
        setWin('')
      }}>restart</button>
    </div>
    </div>
    </>
  );
}

export default App;
