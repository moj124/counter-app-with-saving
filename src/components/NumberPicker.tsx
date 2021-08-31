import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [pastEmojisFromCurrentRender, queueRerenderWithCurrentEmoji] =
    useState<string[]>(['🛌']);

  const handleBed = () => {
    queueRerenderWithCurrentEmoji([...pastEmojisFromCurrentRender,'🛌']);
  }  

  const handleClock = () => {
    queueRerenderWithCurrentEmoji([...pastEmojisFromCurrentRender,'⏰']);
  }
  
  const handlePan = () => {
    queueRerenderWithCurrentEmoji([...pastEmojisFromCurrentRender,'🍳']);
  };

  const handlePlate = () => {
    queueRerenderWithCurrentEmoji([...pastEmojisFromCurrentRender,'🍽️']);
  };

  const handleTasty = () => {
    queueRerenderWithCurrentEmoji([...pastEmojisFromCurrentRender,'😋']);
  };
  const history = () => {
    
    return pastEmojisFromCurrentRender.map((element,index,array) => (index < array.length-1  && index > array.length - 7)  && (<li key={index}>{element}</li>));
  }
  // const emojis = pastEmojisFromCurrentRender.map((element,index,array) => (index < array.length-1  && index > array.length - 7)  && (<li key={index}>{element}</li>));
  console.log(history())
  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your previous emojis:</p>
      <ul>{history()}</ul>
      <p>Your current emoji: {pastEmojisFromCurrentRender[pastEmojisFromCurrentRender.length-1]}</p>
      <button onClick={handleBed}>🛌</button>
      <button onClick={handleClock}>⏰</button>
      <button onClick={handlePan}>🍳</button>
      <button onClick={handlePlate}>🍽️</button>
      <button onClick={handleTasty}>😋</button>
    </>
  );
}
