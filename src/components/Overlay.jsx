import { useState } from "react";

function Overlay() {
    const [overlays, setOverlays] = useState(Array(16).fill());
  return(
    <>
        {overlays.map((_, i) => <div key={i} className="overlay"></div>)}
    </>
  );
}

export default Overlay;
