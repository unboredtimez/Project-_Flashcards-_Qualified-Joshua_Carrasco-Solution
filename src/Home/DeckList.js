import React from "react"

import Deck from "./Deck"
import { Link } from "react-router-dom"

// The function below is the home page which shows all decks in the DB
function DeckList() {
    return (
        <>
            <Link to="/decks/new" className="btn btn-secondary" style={{marginBottom: "10px"}}>+ Create Deck</Link>
            <Deck />
        </>
        
    )
}

export default DeckList