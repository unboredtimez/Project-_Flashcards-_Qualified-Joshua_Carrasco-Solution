import React, { useState, useEffect } from "react"
import { Link, useParams, useHistory } from "react-router-dom"
import { createCard, readDeck } from "../utils/api"
import { HomeFillIcon } from "@primer/octicons-react"
import CardForm from "./CardForm"

function AddCard() {

    // Declaring the deck state
    const [deck, setDeck] = useState({})

    // Declaring a blank initial form state
    const initialFormState = {
        front: "",
        back: "",
    }
    
    // Declaring form data using the initial form state as well as declaring some basic variables
    const [formData, setFormData] = useState({ ...initialFormState })
    const params = useParams()
    const history = useHistory()
    const deckId = params.deckId

    // Whenever deck ID changes re-read the deck and Set Deck state based on results
    useEffect(() => {
        async function loadDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        }

        loadDeck()
    },[deckId])

    // Declaring save handler to create new card and reset form data
    const handleSaveCard = (event) => {
        event.preventDefault()
        createCard(deckId, formData)
        setFormData(initialFormState)
    }

    // Below return has Add card page
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