import React from "react";
import { useState } from "react";
export default function Square({ setVal,val, setPlayer, player,win }) {
  
  return (
    <button
      onClick={() => { if(val===""&&win=="")
        setVal(player);
        if (player === "X") {
          setPlayer("O");
        } else {
          setPlayer("X");
        }
      }}
    >
      <span>//</span>{val}<span>//</span>
    </button>
  );
}
