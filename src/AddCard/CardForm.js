import React from "react";
import { useHistory } from "react-router-dom";

function CardForm({ formData, setFormData}) {
    const history = useHistory()
    const changeHandler = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="front">Front</label>
                <textarea name="front" className="form-control" placeholder="Front side of card" onChange={changeHandler} value={formData.front}/>
            </div>
            <div className="form-group">
                <label htmlFor="back">Back</label>
                <textarea name="back" className="form-control" placeholder="Back side of card" onChange={changeHandler} value={formData.back}/>
            </div>
            {
            /*
            <button value="cancel" className="btn btn-secondary" style={{marginRight: "10px"}} onClick={() => history.push(`/decks/${deckId}`)}>Done</button>
            <button value="submit" className="btn btn-primary" onClick={submit}>Save</button>
            */
            }

        </form>
    )
}

export default CardForm