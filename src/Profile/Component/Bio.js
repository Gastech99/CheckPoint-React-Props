import React from 'react';
import propType from 'prop-types'

function Bio(props) {
    return (
            // On appel la Biographie a travers un props 
        <div>
            <p>Biographie: {props.bio}</p>
        </div>
    );
}
// Ici on definie le type de la function Bio par propType
Bio.propTypes = {
    bio: propType.string
 }
export default Bio;