import React from "react"
import "./App.css"

function Block(props) {
    const { onClick = () => null } = props
    return (<div >
        <p onClick={onClick} className="buttons">{props.buttons}</p>
    </div>)
}

export default Block