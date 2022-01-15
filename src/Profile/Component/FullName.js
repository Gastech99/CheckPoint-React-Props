import React from 'react'
import propType from 'prop-types'

export default function FullName(props) {
    return (
            // On appel le nom a travers un props 
        <div>
            <p>Nom : {props.name}</p>
        </div>
    )
}

// Ici on definie le type de la function FullName par propType
FullName.propTypes = {
    name: propType.string
 }

