import { useState } from "react";
import "./search-bar.styles.css";

import {useHistory} from "react-router-dom"

export default function SearchBar() {
    const history = useHistory()
    const [term, setTerm] = useState('')


    const handleSubmit=(e)=>{
        e.preventDefault()
        history.push(`/search/?q=${term}`)
    }

  return <div className="searchbar">
      <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search: </label>
          <input 
            type="text" 
            id="search" 
            onChange={(e)=>setTerm(e.target.value)}
            value={term}
            required 
            />
      </form>
  </div>;
}
