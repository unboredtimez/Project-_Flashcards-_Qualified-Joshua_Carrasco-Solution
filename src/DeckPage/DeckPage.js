import React from "react"
import { Link } from "react-router-dom"
import { HomeFillIcon } from "@primer/octicons-react"

function DeckPage() {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><HomeFillIcon size={22} fill="#007BFC" /> Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
        </>
    )
}

export default DeckPage