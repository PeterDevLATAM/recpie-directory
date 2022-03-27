import "./search.styles.css";

import { useLocation } from "react-router-dom";
import {useFetch} from "../../hooks/useFetch"
import RecepieList from "../../components/recepie-list/recepie-list.component";

export default function Search() {
  const queryString = useLocation().search; 
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  console.log(query);

  const url = "http://localhost:3000/recipes?q=" + query

  const {data, isPending,error} = useFetch(url)

  return <div>
    <h2 className="page-title">Recepies including "{query}" </h2>
    {error && <p className="error">{error}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {data && <RecepieList recepies={data}/> }
    
  </div>;
}
