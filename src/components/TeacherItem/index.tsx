import React from 'react'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css" 

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/35311748?s=460&u=06caf6fdc4ff80a07ad5a38a3fa681c8f80de6e0&v=4" alt="Jakson Protázio"/> 
                <div>
                    <strong>Jakson Protázio</strong>
                    <span>Html</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br/> <br/>
                Fuga sunt placeat quod quaerat molestias dignissimos vero, incidunt veritatis quas asperiores praesentium ad, excepturi veniam id maxime suscipit earum odio perferendis.
            </p>

            <footer>
                <p>
                    Preço por hora
                    <strong>R$ 60,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;