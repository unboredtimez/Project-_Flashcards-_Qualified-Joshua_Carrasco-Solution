import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { deleteDeck, listDecks } from "../utils/api"

// This is a component used by the DeckList page
function Deck() {
    // Declaring my deck state
    const [decks, setDecks] = useState([])

    // Any time the number of decks changes the deck state will update accordingly
    useEffect(() => {
      async function loadDecks() {
          const result = await listDecks()
          setDecks(result)
      }
      loadDecks()
    },[decks.length])

    // This is my delete handler, it is used to delete decks
    const handleDelete=(deckId) => {
        if (window.confirm("Are you sure you want to delete this deck?")) {
            deleteDeck(deckId)
            window.location.reload(false)
        }
    }

   // The return below will generate all the deck on the deck list. 
   return (
    <>
        {decks.map((deck, index) => {
            return (
                <div className="card" key={index} style={{width: "30rem"}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h5 className="card-title">{deck.name}</h5>
                            </div>
                            <div className="col" style={{textAlign: "right", color: "#808080"}}>
                                <p>{`${deck.cards.length} cards`}</p>
                            </div>
                        </div>
                        <p className="card-text">{deck.description}</p>
                        <Link to={`/decks/${deck.id}`} className="btn btn-secondary" style={{marginRight: "10px"}}>View</Link>
                        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary" style={{marginRight: "10px"}}>Study</Link>
                        <button onClick={() => handleDelete(deck.id)} name="delete" className="btn btn-danger float-right" type="button">Delete</button>
                    </div>
                </div>
            )
        })}
        
    </>
   )
}

export default Deck