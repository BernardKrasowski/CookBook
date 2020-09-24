import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
  return (

    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol className={style.ingr}>
        {ingredients.map(ingr => (
          <li>{ingr.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img className={style.img} src={image} alt="Meal" />
    </div>
  );
}

export default Recipe;