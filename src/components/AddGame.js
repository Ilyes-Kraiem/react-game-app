import React, { useState } from "react";
const AddGame = ({setGames,Games}) => {
  const [form, setForm] = useState({
    title: "",
    poster: "",
    description: "",
    trailer: "",
    rating: "",
  });
  const handleAdd =()=>{
    setGames([...Games, form ])
  }
  return (
    <form className="form-card">
      <input onChange={(e)=>setForm({...form, title:e.target.value})}  name="title"  placeholder="Game title" />
      <input onChange={(e)=>setForm({...form, poster:e.target.value})} name="poster" placeholder="Poster image URL" />
      <input onChange={(e)=>setForm({...form, trailer:e.target.value})} name="trailer"  placeholder="Trailer embed link" />
      <input
        name="rating"
        type="number"
        min="0"
        max="5"
        step="0.1"
        placeholder="Rating (0 - 5)"
        onChange={(e)=>setForm({...form, rating:e.target.value})}
      />
      <textarea
        name="description"
        placeholder="Description"
        rows={3}
        onChange={(e)=>setForm({...form, Description:e.target.value})}
      />
      <button className="nav__cta" onClick={handleAdd} >
        Add Game
      </button>
    </form>
  );
};
export default AddGame;