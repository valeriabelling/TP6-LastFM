import React from 'react';



const Artista = ({artista}) => {

    const { url, name } = artista
    const image = artista.image[3]['#text']


    return(
            <div className="col s12 m6 l4">
                <div className="card">

                    <div className="card-image">
                        <img className="mx-auto d-block" alt={name} src={ image } />
                    </div>
                    
                    <div className="card-content text-center">
                        <h3>{ name }</h3>
                    </div>
                    
                    <div className="card-content text-center m-2">
                        <a href={ url } target="blank" rel="noopener noreferrer" className="waves-effect waver-light btn">Ver informacion completa</a>
                    </div>

                </div>
            </div>
    )
}

export default Artista;