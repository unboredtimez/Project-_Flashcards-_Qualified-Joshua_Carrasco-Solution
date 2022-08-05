import React from "react"

import Deck from "./Deck"

function DeckList() {
    return (
        <>
            <button type="button" className="btn btn-secondary" href="/CreateDeck/TODO" style={{marginBottom: "10px"}}><span style={{fontWeight: "bold", fontSize: "20px"}}>+</span> Create Deck</button>
            <div className="card" style={{width: "30rem"}}>
                <div className="card-body">
                    <Deck />
                </div>
            </div>
        </>
        
    )
}

export default DeckList