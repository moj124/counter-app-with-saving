import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState<string[]>(['🛌']);

  const handleBed = () => {
    queueRerenderWithNewFavouriteValue([...favouriteValueFromCurrentRender,'🛌']);
  }  

  const handleClock = () => {
    queueRerenderWithNewFavouriteValue([...favouriteValueFromCurrentRender,'⏰']);
  }
  
  const handlePan = () => {
    queueRerenderWithNewFavouriteValue([...favouriteValueFromCurrentRender,'🍳']);
  };

  const handlePlate = () => {
    queueRerenderWithNewFavouriteValue([...favouriteValueFromCurrentRender,'🍽️']);
  };

  const handleTasty = () => {
    queueRerenderWithNewFavouriteValue([...favouriteValueFromCurrentRender,'😋']);
  };
  
  const emojis = favouriteValueFromCurrentRender.map((element,index,array) => (index < array.length-1  && index > array.length - 7)  && (<li key={index}>{element}</li>));

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your previous emojis:</p>
      <ul>{emojis}</ul>
      <p>Your current emoji: {favouriteValueFromCurrentRender[favouriteValueFromCurrentRender.length-1]}</p>
      <button onClick={handleBed}>🛌</button>
      <button onClick={handleClock}>⏰</button>
      <button onClick={handlePan}>🍳</button>
      <button onClick={handlePlate}>🍽️</button>
      <button onClick={handleTasty}>😋</button>
    </>
  );
}
