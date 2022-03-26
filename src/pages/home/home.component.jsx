import "./home.styles.css";

import { useFetch } from "../../hooks/useFetch";
import RecepieList from "../../components/recepie-list/recepie-list.component";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecepieList recepies={data}/>}
    </div>
  );
}
