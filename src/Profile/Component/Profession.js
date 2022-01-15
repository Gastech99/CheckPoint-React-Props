import React from 'react'
import propType from 'prop-types'

export default function Profession(props) {
    return (
            // On appel le le metier a travers un props 
        <div>
            <p>Profession: {props.metier}</p>
        </div>
    )
}
// Ici on definie le type de la function Profession par propType
Profession.propTypes = {
    metier: propType.string
 }
