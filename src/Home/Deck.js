import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { TrashIcon, BookIcon, EyeIcon } from "@primer/octicons-react"
import { deleteDeck, listDecks } from "../utils/api"

function Deck() {
    const [decks, setDecks] = useState([])

    useEffect(() => {
        async function loadDecks() {
            const result = await listDecks()
            setDecks(result)
        }
        loadDecks()
    },[decks.length])

    const handleDelete=(deckId) => {
        if (window.confirm("Are you sure you want to delete this deck?")) {
            deleteDeck(deckId)
            window.location.reload(false)
        }
    }

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
                        <Link to={`/decks/${deck.id}`} className="btn btn-secondary" style={{marginRight: "10px"}}><EyeIcon size={20} /> View</Link>
                        <Link to={`/decks/${deck.id}/study`} className="btn btn-primary" style={{marginRight: "10px"}}><BookIcon size={20} /> Study</Link>
                        <button onClick={() => handleDelete(deck.id)} name="delete" className="btn btn-danger float-right" type="button"><TrashIcon size={20} /> Delete</button>
                    </div>
                </div>
            )
        })}
        
    </>
   )
}

export default Deck