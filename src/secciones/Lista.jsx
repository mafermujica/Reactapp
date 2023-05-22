import React from 'react';
import "../css/Lista.css"

const Card = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};
const Lista = () => {
  const datos = [
    { name: 'Maria Torres', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
    { name: 'Carelis Adrián', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
    { name: 'Fabiola Pacheco', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
    { name: 'Alix Vivas', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
    { name: 'Yetsymar Quintero', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
    { name: 'Sorys Perez', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
    { name: 'Josveli Hernández', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
    { name: 'Maria F. Mujica', imageUrl: 'https://cdn.pixabay.com/photo/2022/04/12/19/31/woman-7128718_1280.png' },
  ];
  return (
    <div className="contenedorCard">
      {datos.map((persona, index) => (
        <Card key={index} name={persona.name} imageUrl={persona.imageUrl} />
      ))}
    </div>
  );
};
export default Lista;