import { useEffect, useState } from "react";

export default function Inventory() {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch("/api/parts")
      .then(res => res.json())
      .then(setParts);
  }, []);

  return (
    <div>
      <h1>Inventory</h1>

      {parts.map(p => (
        <div key={p._id}>
          <img src={p.image} width="200" />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
