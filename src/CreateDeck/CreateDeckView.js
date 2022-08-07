import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { createDeck } from "../utils/api"

function CreateDeckView() {
    const history = useHistory()

    const initialFormState = {
        name: "",
        description: "",
    }

    const [formData, setFormData] = useState({ ...initialFormState })

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        createDeck(formData)
        setFormData(initialFormState)
        history.push("/decks/:deckId") //TODO: Need to verify this will work after building Deck ID page
    }
    console.log(formData)
    return (
        <>
            <form name="createDeck" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label name="name">Name</label>
                    <input name="name" type="name" className="form-control" required onChange={handleChange} value={formData.name} placeholder="Deck Name"/>
                </div>
                <div className="form-group">
                    <label name="description">Description</label>
                    <textarea name="description" type="description" className="form-control" placeholder="Brief description of the deck" required onChange={handleChange} value={formData.description} />
                </div>
                <button type="cancel" className="btn btn-secondary" style={{marginRight: "10px"}} onClick={() => history.push("/")}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>

    )
}

export default CreateDeckView