import "./recepie.styles.css";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recepie, error, isPending } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recepie && (
        <>
          <h2 className="page-title">{recepie.title}</h2>
          <p>Takes {recepie.cookingTime} to cook</p>
          <ul>
            {recepie.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recepie.method}</p>
        </>
      )}
    </div>
  );
}
