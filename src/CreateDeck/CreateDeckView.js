import React from "react"

// Refactored CreateDeckView to be used by both the CreateDeck and EditDeck components
function CreateDeckView({ formData, setFormData }) {

    // Delcaring my change handler function
    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        })
    }
    
    // Below return has the form for the Edit/Create Deck views
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="name" className="form-control" placeholder="Deck Name" required onChange={changeHandler} value={formData.name}  />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" type="description" className="form-control" placeholder="Brief description of the deck" required onChange={changeHandler} value={formData.description} />
                </div>
            </form>

        </>

    )
}

export default CreateDeckView