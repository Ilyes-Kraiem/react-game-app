import React from "react";
import { useNavigate, useParams } from "react-router-dom";





function Trailer({ games }) {
  const params = useParams();
  console.log();
  const mygame = games.filter((el)=>el.title===params.title);
  console.log("mygame is:",mygame);




//${mygame[0].Trailer}

  return  (
    <section className="collection-section">
      <iframe width="560" height="315" src={mygame[0].trailer} frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
  );
}






export default Trailer;