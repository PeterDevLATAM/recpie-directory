import { Link } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"
import "./recepie-list.styles.css"

export default function RecepieList({recepies}) {

  const {mode}= useTheme()

  if(recepies.length===0){
    return <div className="error">No recipes to load... </div>
  }

  return (
    <div className="recipe-list">
        {recepies.map(recepie=>(
            <div className={`card ${mode}`} key={recepie.id}>
                <h3>{recepie.title}</h3>
                <p>{recepie.cookingTime} to make</p>
                <div>{recepie.method.substring(0, 100)}...</div>
                <Link to={`/recepies/${recepie.id}`}>Cook this</Link>
            </div>
        ))}
    </div>
  )
}
