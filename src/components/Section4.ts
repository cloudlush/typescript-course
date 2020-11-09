import React from 'react';
import { ImportsNotUsedAsValues } from 'typescript';

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

  //Destructuring around objects

  //Set Age to Void
  //Destructure Height
  //Destructure Class, Specialty, and Nudity

  const profile = {
    name: 'Ava',
    age: 20,
    class: 'Professional',
    specialty: 'Cosplay',
    nudity: false,
    height: {
      feet: 5,
      inches: 6
    },

    setAge(age: number): void {
    this.age = age;
    },

    setHeight({ feet, inches }: { feet: number, inches: number }): void {
      this.height = {feet, inches}
    }
  }

    

 

 
}
export default Section4;