import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, valeo:0, name:"Ненужная вещь"},
        {id:1, valeo:4, name:"Ложка"},
        {id:2, valeo:0, name:"Вилка"},
        {id:3, valeo:0, name:"Тарелка"},
        {id:4, valeo:0, name:"Набор минималиста"},
    ];
    
    const [counters, setCouters] = useState(initialState);
    const handleDelete = (id) => {
        console.log('handleDelete', id)
        const newCounters = counters.filter((counter) => counter.id !== id);
        setCouters(newCounters);
    }
    const handleReset = () => {
        console.log('handle Reset');
        setCouters(initialState);
    }
    const handleIncrement = (id) => {
        console.log('handle increment', id);
        const incrementCounters = counters.map((counter) => {
            if (counter.id ===id) {
                counter.valeo += 1;
            }
            return counter;
        })
        setCouters(incrementCounters);
        
    }
    const handleDecrement = (id) => {
        console.log('handle decrement', id);
        const decrementCounters = counters.map((counter) => {
            if (counter.id ===id) {
                counter.valeo -= 1;
            }
            return counter;
        })
        setCouters(decrementCounters);
    }
    return (
    <>
        {counters.map((counter)=> 
            <Counter 
                key={counter.id}
                // id={counter.id}
                // valeo={counter.valeo} // все параметры можно заменить spread оператором
                // name={counter.name} 
                {...counter}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />)}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
                Сброс
            </button>
    </>
    )
}

export default CountersList;