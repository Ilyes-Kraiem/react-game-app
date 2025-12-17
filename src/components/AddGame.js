import React, { useState } from "react";
const AddGame = () => {
  const [form, setForm] = useState({
    title: "",
    poster: "",
    description: "",
    trailer: "",
    rating: "",
  });
 
  return (
    <form className="form-card">
      <input name="title"  placeholder="Game title" />
      <input name="poster" placeholder="Poster image URL" />
      <input name="trailer"  placeholder="Trailer embed link" />
      <input
        name="rating"
        type="number"
        min="0"
        max="5"
        step="0.1"
        placeholder="Rating (0 - 5)"
      />
      <textarea
        name="description"
        placeholder="Description"
        rows={3}
      />
      <button className="nav__cta" >
        Add Game
      </button>
    </form>
  );
};
export default AddGame;