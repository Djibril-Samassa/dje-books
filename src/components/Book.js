/* eslint-disable */

import React from "react";
import { useState, useEffect } from "react";
import Style from './Book.module.css'
import Description from "./Description";

export default function Book(props) {


    const [focusedOn, setFocusedOn] = useState(false)
    const [showD, setShowD] = useState(false)
    const book = props.book
    const background = book?.volumeInfo?.imageLinks?.smallThumbnail

    return (<>
        {!focusedOn ?
            <div onMouseEnter={() => { setFocusedOn(true) }} className={Style.container} style={{ backgroundImage: `url(${background})` }} >
            </div>
            :
            <div className={Style.container} style={{ backgroundImage: `url(${background})` }} >
                <div onMouseLeave={() => { setFocusedOn(false) }} className={Style.voile}>
                    <p>{book?.volumeInfo?.title}</p>
                    <p>{book?.volumeInfo?.authors[0]}</p>
                    <p>{book?.volumeInfo?.categories ? book?.volumeInfo?.categories[0] : null}</p>
                    {/* <p className={Style.description}>{book?.volumeInfo?.description}</p> */}
                    <div className={Style.access}>{book?.saleInfo?.saleability === "FREE" ? <p>Gratuit</p> : book?.saleInfo?.saleability === "FOR_SALE" ? <p>Prix : {book?.saleInfo?.listPrice?.amount} €</p> : null}
                        {book?.accessInfo?.pdf?.downloadLink && book?.saleInfo?.saleability === "FREE" ?
                            <p className={Style.Button}><a target="_blank" href={book?.accessInfo?.pdf?.downloadLink}>Telecharger</a></p> :
                            book?.saleInfo?.saleability === "FOR_SALE" ?
                                <p className={Style.Button}><a target="_blank" href={book?.saleInfo?.buyLink}>Acheter</a></p> :
                                <p className={Style.Button}><a target="_blank" href={book?.volumeInfo?.previewLink}>Aperçu</a></p>}
                        {book?.volumeInfo?.description ? <span className={Style.Button} onClick={() => { props.setD(true), props.setDs(book) }}>Description</span> :
                            null}
                    </div> </div>
            </div>}
        {showD ? <Description props={book?.volumeInfo?.description} /> : null}
    </>)
}