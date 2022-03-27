import "./create.styles.css";

import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import { firestoreDb } from "../../firebase/config";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const ingredientInput = useRef(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
    };
    try {
      await firestoreDb.collection("recipes").add(doc);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ingredient = newIngredient.trim(); //trim takes out white spaces

    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }

    setNewIngredient("");
    ingredientInput.current.focus(); //it focus on the dom element so you don't have to click on it again
  };
  //Redirect the user when the data is posted

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Recipe Ingredients: </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}{" "}
        </p>

        <label>
          <span>Recipe Method: </span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time: </span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
