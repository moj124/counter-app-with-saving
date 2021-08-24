import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState('⏰');
  const [favouriteValueFromCurrentRender, queueRerenderWithNewFavouriteValue] =
    useState('🛌');

  const handleBed = () => {
    queueRerenderWithNewCounterValue('🛌');
  }  

  const handleClock = () => {
    queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
    queueRerenderWithNewCounterValue('⏰');
  }
  
  const handlePan = () => {
    queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
    queueRerenderWithNewCounterValue('🍳');
  };

  const handlePlate = () => {
    queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
    queueRerenderWithNewCounterValue('🍽️');
  };

  const handleTasty = () => {
    queueRerenderWithNewFavouriteValue(counterValueFromCurrentRender);
    queueRerenderWithNewCounterValue('😋')
  };

  return (
    <>
      <h1>Emoji picker</h1>
      <p>Your previous emoji: {favouriteValueFromCurrentRender}</p>
      <p>Your current emoji: {counterValueFromCurrentRender}</p>
      <button onClick={handleBed}>🛌</button>
      <button onClick={handleClock}>⏰</button>
      <button onClick={handlePan}>🍳</button>
      <button onClick={handlePlate}>🍽️</button>
      <button onClick={handleTasty}>😋</button>
    </>
  );
}
