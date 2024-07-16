import React from "react";
import './App.css';

export  default function UserInfo(){
    return (
        <>
            {userName.map((name, index) => (
                <FullNameUser key={index} firstName={name.firstName} lastName={name.lastName}/>
            ))}
            <p className="pAgeUser">Age: 35</p>
            <p className="pContactUser">Contact:</p>
            {contact.map((info, index) => (
                <ContactUser key={index} mobile={info.mobile} email={info.email} city={info.city} />
            ))}
            {photo.map((image, index) => (
                <PhotoUser key={index} src={image.src} alt={image.alt}
                            className={image.src === "/600px-ButterflyGlyph.webp" ? "imgM" : "small-image"}/>
            ))}
            <h3 className="h3skills">Skills:</h3>
            {skills.map((name, index) => (
                <SkillUser key={index} name={name}/>
            ))}
        </>
    )
}
function FullNameUser(props) {
    return (<h1>{props.firstName}{props.lastName}</h1>)
}

function ContactUser({mobile, email, city}) {
    return (
        <ul className="ulUserContact">
            <li>Mobile: {mobile}</li>
            <li>Email: {email}</li>
            <li>City: {city}</li>
        </ul>
    );
}

function PhotoUser({src, alt}) {
    return (<div className="imgUser"><img src={src} alt={alt}/></div>)
}

function SkillUser({name}) {
    return (<ul className="ulSkills">
        <li>{name}</li>
    </ul>);
}
const userName = [{
    firstName: 'Tom',
    lastName: 'Smit',
}];
const photo = [{
    src: "/600px-ButterflyGlyph.webp",
    alt: "photo",
}]
const skills = ["Git", "React"];

const contact = [
    {
        mobile: '+38 (000)-333 - 22 - 22',
        email: 'qwerty@gmi.com',
        city: 'Zp',
    }
]