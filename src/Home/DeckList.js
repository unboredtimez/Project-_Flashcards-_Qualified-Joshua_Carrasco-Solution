import React, { useState, useEffect } from "react"

import { deleteDeck, listDecks } from "../utils/api"
import { PlusIcon } from "@primer/octicons-react"
import Deck from "./Deck"
import { Link } from "react-router-dom"

function DeckList() {


    return (
        <>
            <Link to="/decks/new" className="btn btn-secondary" style={{marginBottom: "10px"}}><PlusIcon size={20} /> Create Deck</Link>
            <Deck />
        </>
        
    )
}

export default DeckList