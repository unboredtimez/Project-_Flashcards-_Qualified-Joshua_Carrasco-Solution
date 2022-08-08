import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom"
import { updateCard, readCard, readDeck } from "../utils/api";
import { HomeFillIcon } from "@primer/octicons-react";
import CardForm from "../AddCard/CardForm";

function EditCard() {

    const [deck, setDeck] = useState({})
    const [formData, setFormData] = useState({})
    const params = useParams()
    const deckId = params.deckId
    const cardId = params.cardId
    const history = useHistory()

    useEffect(() => {
        const abortController = new AbortController()

        async function loadDeck() {
            const deckResponse = await readDeck(deckId, abortController.signal)
            setDeck(deckResponse)
            const cardResponse = await readCard(cardId, abortController.signal)
            setFormData(cardResponse)
        }
        loadDeck()
        return () => abortController.abort()
    }, [deckId, cardId])

    const submitHandler = (event) => {
        event.preventDefault()
        updateCard(formData)
        history.push(`/decks/${deckId}`)
    }

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><HomeFillIcon size={22} fill="#007BFC" /> Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>

            <h2>Edit Card</h2>

            <CardForm formData={formData} setFormData={setFormData} />

            <button value="cancel" className="btn btn-secondary" style={{marginRight: "10px"}} onClick={() => history.push(`/decks/${deckId}`)}>Cancel</button>
            <button value="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
        </>
    )

}

export default EditCard