import React from "react";
const Filter = ({ filterTitle, setFilterTitle, filterRating, setFilterRating }) => {
  return (
    <div className="collection-header" style={{ gap: "1rem" }}>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <input
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          placeholder="Filter by title..."
          style={{
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #2a2a2a",
            background: "#0f0f0f",
            color: "#fff",
            minWidth: "220px",
          }}
        />
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          value={filterRating}
          onChange={(e) => setFilterRating(e.target.value)}
          placeholder="Min rating"
          style={{
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #2a2a2a",
            background: "#0f0f0f",
            color: "#fff",
            width: "140px",
          }}
        />
      </div>
    </div>
  );
};
export default Filter;