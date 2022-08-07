import React, { useState, useEffect } from "react"

import { deleteDeck, listDecks } from "../utils/api"
import Deck from "./Deck"
import { Link } from "react-router-dom"

function DeckList() {


    return (
        <>
            <Link to="/decks/new" className="btn btn-secondary" style={{marginBottom: "10px"}}><span style={{fontWeight: "bold", fontSize: "20px"}}>+</span> Create Deck</Link>
            <Deck />
        </>
        
    )
}

export default DeckList