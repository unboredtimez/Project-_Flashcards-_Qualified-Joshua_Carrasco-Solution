import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";

function Study() {

    // Declaring various variables, my deck state, card state and deckId param
    const [deck, setDeck] = useState({})
    const [cards, setCards] = useState([])
    const params = useParams()
    const deckId = params.deckId

    // Whenever the deck ID changes the deck will be re-read and update the deck and card state accordingly
    useEffect(() => {
        const abortController = new AbortController()
        async function loadDeck() {
            const response = await readDeck(deckId, abortController.signal)
            setDeck(response)
            setCards(response.cards)
        }
        loadDeck()
        return () => abortController.abort()
    }, [deckId])

    // Checking if the number of cards in the deck is less than 3, send user to the "Not enough cards" page
    if(cards.length < 3) {
        return (
            <>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Study</li>
                    </ol>
                </nav>

                <h1>Study: {deck.name}</h1>

                <NotEnoughCards length={cards.length} deckId={deckId} />
            </>
        )
    }

    // If the number of cards in the deck is 3 or greater the user will view the proper study page
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                </ol>
            </nav>

            <h1>Study: {deck.name}</h1>

            <StudyCard cards={cards} />
        </>
    )
}

export default Study