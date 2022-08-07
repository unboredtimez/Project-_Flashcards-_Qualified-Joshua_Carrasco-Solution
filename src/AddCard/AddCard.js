import React, { useState, useEffect } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { createCard, readDeck } from "../utils/api"
import { HomeFillIcon } from "@primer/octicons-react"
import CardForm from "./CardForm"

function AddCard() {

    const [deck, setDeck] = useState({})
    const [cards, setCards] = useState([])

    const initialFormState = {
        front: "",
        back: "",
    }
    
    const [formData, setFormData] = useState({ ...initialFormState })
    const params = useParams()
    const history = useHistory()
    const deckId = params.deckId

    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
            setCards(response.cards)
        }

        loadDeck()
    },[deckId])

    const handleSaveCard = (event) => {
        event.preventDefault()
        createCard(deckId, formData)
        setFormData(initialFormState)
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><HomeFillIcon size={22} fill="#007BFC" /> Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>

            <h2>{deck.name}: Add Card</h2>

            <CardForm formData={formData} setFormData={setFormData} />

            <button value="cancel" className="btn btn-secondary" style={{marginRight: "10px"}} onClick={() => history.push(`/decks/${deckId}`)}>Done</button>
            <button value="submit" className="btn btn-primary" onClick={handleSaveCard}>Save</button>
        </>
    )

}

export default AddCard