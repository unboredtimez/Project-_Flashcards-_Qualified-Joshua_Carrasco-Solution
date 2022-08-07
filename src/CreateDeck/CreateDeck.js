import React from "react"
import { HomeFillIcon } from "@primer/octicons-react"
import { Link } from "react-router-dom"
import CreateDeckView from "./CreateDeckView"

function CreateDeck() {


    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><HomeFillIcon size={22} fill="#007BFC" /> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <h1>Create Deck</h1>
            <CreateDeckView />
        </>

    )
}

export default CreateDeck