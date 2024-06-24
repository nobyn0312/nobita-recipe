import React from "react";

export const Recipe = (props) => {
  return <div>
    <h1>{props.title}</h1>
    <ol>
      {props.ingredients.map(ingredients => (
        <li>
          {ingredients.text}
        </li>
      ))}
    </ol>
    <p>{props.calories} cal</p>
    <img src={props.image} alt=""/>
  </div>;
};