import React from "react"

function Deck() {
    return (
        <>
            <div className="row">
                <div className="col">
                    <h5 className="card-title">Deck Title</h5>
                </div>
                <div className="col" style={{textAlign: "right", color: "#808080"}}>
                    {/* TODO: Implement proper count of cards in deck */}<p># of cards</p>
                </div>
            </div>
            <p>Deck description Deck description Deck description Deck description Deck description</p>
            <a href="#" class="btn btn-secondary" style={{marginRight: "10px"}}>View</a>
            <a href="#" class="btn btn-primary" style={{marginRight: "10px"}}>Study</a>
            <a href="#" class="btn btn-danger float-right">Delete</a>
        </>

    )
}

export default Deck