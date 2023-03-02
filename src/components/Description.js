import React from "react";

export default function Description(props) {
    return <div className="descrip">
        <h3 style={{ 'margin': '20px' }}>{props?.props?.volumeInfo?.title}</h3>
        <p>{props?.props?.volumeInfo?.description}</p>
        {props?.props?.volumeInfo?.authors?.length > 0 ? <p style={{ 'margin': '20px' }}>Auteur : {props?.props?.volumeInfo?.authors[0]}</p> : null}
        {props?.props?.volumeInfo?.categories?.length > 0 ? <p style={{ 'margin': '20px' }}>Genre : {props?.props?.volumeInfo?.categories[0]}</p> : null}

        <p style={{ 'margin': '20px' }}>Lien : <a className="link" target="_blank">{props?.props?.selfLink}</a></p>
        <p className="close" onClick={() => { props.close(false) }}>Fermer</p>
    </div>
}