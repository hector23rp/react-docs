import React from "react";

export default function ArrayComponent(props) {
    let numbers = [1,2,3,4];
    numbers = numbers.map((number, index) => {
        return {
            id: index,
            number
        }
    })
    return (
    <ul>
        {numbers.map((item) => {
            return (
            <li key={item.id}>
                {item.number}
            </li>
            );
        })}
    </ul>
    );
}