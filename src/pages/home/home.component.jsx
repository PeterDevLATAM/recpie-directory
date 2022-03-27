import "./home.styles.css";
import { firestoreDb } from "../../firebase/config";

import RecepieList from "../../components/recepie-list/recepie-list.component";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    firestoreDb
      .collection("recipes")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("No recepies to load...");
          setIsPending(false);
        } else {
          let results=[]
           snapshot.docs.forEach((doc)=>{
             results.push({id: doc.id, ...doc.data()})
           })
           setData(results)
           setIsPending(false)

        }
      }).catch(err=>{
        setError(err.message)
        setIsPending(false)
      })
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecepieList recepies={data} />}
    </div>
  );
}
