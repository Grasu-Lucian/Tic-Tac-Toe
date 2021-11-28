import React from "react";

export default function Verify(
  player,
  renderPlayer,
  val1,
  val2,
  val3,
  val4,
  val5,
  val6,
  val7,
  val8,
  val9,
  setWin
) {
  console.log(renderPlayer.current);

  if (
    val4 === renderPlayer.current &&
    val5 === renderPlayer.current &&
    val6 === renderPlayer.current
  ) {
    setWin(`player ${renderPlayer.current} won`);
  }
  if (
    val7 === renderPlayer.current &&
    val8 === renderPlayer.current &&
    val9 === renderPlayer.current
  ) {
    setWin(`player ${renderPlayer.current} won`);
  }

  if (
    val2 === renderPlayer.current &&
    val5 === renderPlayer.current &&
    val8 === renderPlayer.current
  ) {
    setWin(`player ${renderPlayer.current} won`);
  }
  if (val1 === renderPlayer.current) {
    if (val2 === renderPlayer.current && val3 === renderPlayer.current) {
      setWin(`player ${renderPlayer.current} won`);
    }
    if (val4 === renderPlayer.current && val7 === renderPlayer.current) {
      setWin(`player ${renderPlayer.current} won`);
    }
    if (val5 === renderPlayer.current && val9 === renderPlayer.current) {
      setWin(`player ${renderPlayer.current} won`);
    }
  }
  if (val3 === renderPlayer.current) {
    if (val6 === renderPlayer.current && val9 === renderPlayer.current) {
      setWin(`player ${renderPlayer.current} won`);
    }
    if (val5 === renderPlayer.current && val7 === renderPlayer.current) {
      setWin(`player ${renderPlayer.current} won`);
    }
  }
}
