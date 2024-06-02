import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //setCategories((categories) => [...categories,inputValue ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={  onInputChange } />
        </form>
        
    )
}

AddCategory.propTypes = {
    onNewCategory : PropTypes.func,
}
