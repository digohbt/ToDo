import React from 'react'
 
import { Container, Label } from './style'

export default function Card() {
    return (
        <Container>
            <header>
                <Label color="#f159c1"/>
            </header>
            <p> Fazer a Migração completa de servidores </p>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFZkkhTnYKQew/profile-displayphoto-shrink_200_200/0/1594161512416?e=1615420800&v=beta&t=l3Fjd0vSj1EH0Wu22f1wHwPetAc0D0oi529A9NM_64g" alt="Diego" />
        </Container>
    )
}