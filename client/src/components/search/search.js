import React from 'react';
import './search.css';

function Search({ search }){

  const readData = (e) => {
    // termino de busqueda
    const term = e.target.value;

    // envio por props
    search(term)
  }

  return (
    <div className="search">
      <input type="text" placeholder="Búsqueda" onChange={readData} />
    </div>
  )
}

export default Search;
