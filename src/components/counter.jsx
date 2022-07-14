import React, { useState } from "react";


const Counter = (props) => {

    //console.log('props', props)
    //const [valeo, setValeo] = useState(props.valeo); // убираем состояние из counter

    const {valeo} = props;

    const formatValeo = () => {
        return valeo === 0 ? "empty" : valeo;
    };

    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += valeo === 0 ? "bg-warning" : "bg-primary";
        return classes
    }

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValeo()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>delete</button>
        </div>
    );
}

export default Counter;