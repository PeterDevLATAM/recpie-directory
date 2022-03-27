import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import {firestoreDb} from "../../firebase/config"

import "./recepie-list.styles.css";
import TrashCan from "../../assets/trashcan.svg";

export default function RecepieList({ recepies }) {
  const { mode } = useTheme();

  if (recepies.length === 0) {
    return <div className="error">No recipes to load... </div>;
  }

  const handleClick = (id)=>{
    firestoreDb.collection('recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recepies.map((recepie) => (
        <div className={`card ${mode}`} key={recepie.id}>
          <h3>{recepie.title}</h3>
          <p>{recepie.cookingTime} to make</p>
          <div>{recepie.method.substring(0, 100)}...</div>
          <Link to={`/recepies/${recepie.id}`}>Cook this</Link>
          <img src={TrashCan} className="delete" alt="delete icon" onClick={()=>handleClick(recepie.id)} />
        </div>
      ))}
    </div>
  );
}
 