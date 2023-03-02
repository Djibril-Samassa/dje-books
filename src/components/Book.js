import React from "react";
import { useState, useEffect } from "react";
import Style from './Book.module.css'

export default function Book(props) {

    const [focusedOn, setFocusedOn] = useState(false)
    const [showD, setShowD] = useState(false)
    const book = props.book
    const background = book?.volumeInfo?.imageLinks?.smallThumbnail
    console.log(book)

    return (<>
        {!focusedOn ?
            <div onMouseEnter={() => { setFocusedOn(true) }} className={Style.container} style={{ backgroundImage: `url(${background})` }} >
            </div>
            :
            <div className={Style.container} style={{ backgroundImage: `url(${background})` }} >
                <div onMouseLeave={() => { setFocusedOn(false) }} className={Style.voile}>
                    {!showD ? <>
                        <h3>{book?.volumeInfo?.title}</h3>
                        <p>{book?.volumeInfo?.authors[0]}</p>
                        <p>{book?.volumeInfo?.categories ? book?.volumeInfo?.categories[0] : null}</p>
                        {/* <p className={Style.description}>{book?.volumeInfo?.description}</p> */}
                        <div className={Style.access}>{book?.saleInfo?.saleability === "FREE" ? <p>Gratuit</p> : book?.saleInfo?.saleability === "FOR_SALE" ? <p>Prix : {book?.saleInfo?.listPrice?.amount} €</p> : null}
                            {book?.accessInfo?.pdf?.downloadLink && book?.saleInfo?.saleability === "FREE" ?
                             <span className={Style.Button}><a target="_blank" href={book?.accessInfo?.pdf?.downloadLink}>Telecharger</a></span> :
                              book?.saleInfo?.saleability === "FOR_SALE" ? 
                              <span className={Style.Button}><a target="_blank" href={book?.saleInfo?.buyLink}>Acheter</a></span> : 
                              <span className={Style.Button}><a target="_blank" href={book?.volumeInfo?.previewLink}>Aperçu</a></span> }
                            {book?.volumeInfo?.description ? <span className={Style.Button} onClick={() => { setShowD(true) }}>Description</span> : 
                            null}
                        </div></> : <div className={Style.desc}><p>{book?.volumeInfo?.description}</p><span className={Style.Button} onClick={(() => { setShowD(false) })}>Fermer</span></div>}
                </div>
            </div>}

    </>)
}