import { Link } from "react-router-dom"
import "./recepie-list.styles.css"

export default function RecepieList({recepies}) {
  return (
    <div className="recipe-list">
        {recepies.map(recepie=>(
            <div className="card" key={recepie.id}>
                <h3>{recepie.title}</h3>
                <p>{recepie.cookingTime} to make</p>
                <div>{recepie.method.substring(0, 100)}...</div>
                <Link to={`/recepies/${recepie.id}`}>Cook this</Link>
            </div>
        ))}
    </div>
  )
}
