import React from "react";

export default function AnimalInfo(){
    return (
        <>
            {myAnimal.map((info, index) => (
                <AboutAnimal key={index} name={info.name} poroda={info.poroda} color={info.color}
                             age={info.age} photo={info.photo[0]}/>
            ))}
        </>
    )
}

function AboutAnimal(props) {
    return (<>
            <p>My cat name <h1 className="h1NameCat">{props.name}</h1></p>
            <p className="pPoroda">She is poroda <h3 className="h3Poroda">{props.poroda},</h3>
                <p className="pColor"><b>{props.color}</b> color</p></p>
            <p className="pAgeCat">Age {props.age}</p>
            <img className="imgCat" src={props.photo.src} alt={props.photo.alt}/>
        </>)
}

const myAnimal = [{
    name: 'Lilu',
    poroda: "Scottish Fold",
    color: "Gray",
    age: 2,
    photo: [
        {
            src: '/800px-Adult_Scottish_Fold.jpg',
            alt: 'Scottish Fold photo'
        }
    ]
}];
