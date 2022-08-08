import React, { useState, useEffect } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import { HomeFillIcon, PencilIcon, BookIcon, PlusIcon, TrashIcon } from "@primer/octicons-react"
import { deleteCard, deleteDeck, readDeck } from "../utils/api"

function DeckPage() {
    const [deck ,setDeck] = useState({})
    const [cards, setCards] = useState([])
    
    const params = useParams()
    const deckId = params.deckId
    const history = useHistory()

    useEffect(() => {
        const abortController = new AbortController()

        async function loadDecks() {
            const response = await readDeck(deckId, abortController.signal)
            setDeck(response)
            setCards(response.cards)
        }
        loadDecks()
        return () => abortController.abort()
    }, [deckId])

    const handleDeleteDeck = (deckId) => {
        if (window.confirm("Are you sure you want to delete this deck?")) {
            deleteDeck(deckId)
            history.push("/")
        }
    }

    const handleDeleteCard = (cardId) => {
        if (window.confirm("Are you sure you want to delete this card?")) {
            deleteCard(cardId)
            window.location.reload(false)
        }
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><HomeFillIcon size={22} fill="#007BFC" /> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>

            <div>
                <h5>{deck.name}</h5>
                <p>{deck.description}</p>
                <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary" style={{marginRight: "10px"}}><PencilIcon size={20} /> Edit</Link>
                <Link to={`/decks/${deckId}/study`} className="btn btn-primary" style={{marginRight: "10px"}}><BookIcon size={20} /> Study</Link>
                <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary" style={{marginRight: "10px"}}><PlusIcon size={20} /> Add Cards</Link>
                <button onClick={() => handleDeleteDeck(deckId)} name="delete" className="btn btn-danger float-right" type="button"><TrashIcon size={20} /> Delete</button>
            </div>

            
            <h2 style={{marginTop: "30px"}}>Cards</h2>

            {cards.map((card, index) => {
                return (
                <div className="card" key={index}>
                    <div className="card-body">
                        <div className="row">
                            <p className="col card-text">{card.front}</p>
                            <p className="col card-text">{card.back}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => handleDeleteCard(card.id)} style={{float: "right"}}><TrashIcon size={20} /> Delete</button>
                        <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary" style={{float: "right", marginRight: "10px"}}><PencilIcon size={20} /> Edit</Link>
                    </div>
                </div>
                )
            })
            }
        </>
    )
}

export default DeckPage