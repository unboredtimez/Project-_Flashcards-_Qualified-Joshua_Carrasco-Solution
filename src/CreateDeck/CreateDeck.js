import React, { useState } from "react"
import { HomeFillIcon } from "@primer/octicons-react"
import { Link, useHistory } from "react-router-dom"
import CreateDeckView from "./CreateDeckView"
import { createDeck } from "../utils/api"

function CreateDeck() {
    const history = useHistory()

    const initialFormState = {
        name: "",
        description: "",
    }
    const [formData, setFormData] = useState({ ...initialFormState })

    const handleSubmit = (event) => {
        event.preventDefault()
        createDeck(formData)
        .then((results) => {
            history.push(`/decks/${results.id}`) 
        })
    }

 

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><HomeFillIcon size={22} fill="#007BFC" /> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
            <h1>Create Deck</h1>

            <CreateDeckView formData={formData} setFormData={setFormData} />

            <button type="cancel" className="btn btn-secondary" style={{marginRight: "10px"}} onClick={() => history.push("/")}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </>

    )
}

export default CreateDeck