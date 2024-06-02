import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

//import { getGifs } from '../helpers/getGifs';


export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs( category );

    //console.log({isLoading});

    /*
    

    //Sacar la funcion para no volverla a disparar::: getGifs
    */

    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2 >Cargando...</h2>)
        }

        <div className='card-grid'>
            {/* images.map */}
            {
                images.map((image) => (
                    <GifItem 
                        key={image.id}
                        {...image }
                    />
                ))
            }
        </div>
    </>
  )
}


GifGrid.propTypes = {
    category : PropTypes.string,
}
