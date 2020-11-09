import React from 'react';

function Section4() {

  const add = (a: number, b: number) => {
    return a + b;
  }

  const subtract = (a: number, b: number) :number => {
    return a - b;
  }

  function divide (a: number, b: number): number {
    return a / b;
  }

  const multiply = function (a: number, b: number): number {
    return a * b;
  }

  //Use void and never if we don't want to return a value
  const logger = (message: string): void => {
    console.log(message)
  }

  const throwError = (message: string): string => {
    if (!message) {
      throw new Error(message);
    }
    return message;
  }

  /////////////////////////////////////////////////////////

  const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
  };

  //Create forecast as a Annotation
  const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
  }

  logWeather(todaysWeather);

  //Destructuring so you don't have to create new Annotation
  const logWeathers = ({date, weather}: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
  }

  logWeathers(todaysWeather);


    

 

 
}
export default Section4;