import React from 'react'; //necesario para definir componentes
//componentes de PrimeReact
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
//estilos predeterminados de PrimeReact
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const ProductCard = ({ product }) => {
  //desestructuración
  const { name, price, image, onSale } = product;

  const header = (//bloque de la parte superior
    //usa class tipo tailwind para centrar horizontalmente
    <div className="flex justify-content-center"> 
      <h2 className="text-xs font-bold  mb-8">Zapatillas Deportivas</h2>
      <img 
        alt={name} 
        src={image} 
        className="w-full h-auto border-round" 
        style={{ maxHeight: '200px', objectFit: 'cover' }}
      />

      
    </div>
  );
  
  const footer = (
    <div className="flex justify-content-between align-items-center">
    {onSale && (
        <div className="my-2 flex justify-content-center">
          <Tag 
            value="ON SALE" 
            severity="success" 
            className="px-3 py-2 text-xs font-bold"
          />
        </div>
      )}
      
    </div>
  );
  //se renderiza el componente card de PrimeReact
  //shadow-2 hover:shadow-4 efecto de sombra al pasar el mouse
  return (
    <Card 
      header={header} 
      footer={footer}
      className="m-2 shadow-2 hover:shadow-4 transition-all"
      style={{ width: '320px' }}
    >
      <h2 className="text-2xl font-bold mt-3 mb-2">{name}</h2>
      <span className="text-xl font-bold"> ${price.toFixed(2)} </span>
      

      <div className="mt-3">
      <p className="text-base text-gray-800 font-medium text-center">
        {onSale
          ? "Zapatillas Nike Air en descuento, ¡Aprovecha Ya!"
          : "Zapatillas Nike Air, buena calidad para hacer ejercicio"}
      </p>

      </div>

    </Card>
  );
};

export default ProductCard;