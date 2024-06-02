import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        //console.log(newCategory);
        //Esto se debe de evitar: categories.push(newCategory);
        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory , ...categories ]);
        //setCategories(cat => [...cat, 'Valorant'] );
    }

  return (
    <>
        {/*  Título */}
        <h1>Gif Expert App</h1>

        {/*  Input */}
        <AddCategory 
            //setCategories={ setCategories }
            //si lleva on es porque esta emitiendo algo: on New Category, cuando hay una nueva categoría 
            onNewCategory = { (value) => onAddCategory(value) }
        />


        {/*  Listado de Items(Gifs) */}
        {/* <button onClick={ onAddCategory }>Add Valorant</button>*/}

        {/*Esto esta regresando un objeto en el componente GifGrid */}
        {                   
            categories.map( (category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
            ))
        }

        {/*  Gif Item */}
    </>
  )
}
