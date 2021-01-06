import React from 'react'
import { loadLists } from '../../services/api'

import List from '../List'

import { Container } from './style'
// console.log( loadLists)
const lists = loadLists()
// console.log(typeof(lists))

export default function Board() {
    return (
        <Container>
           { lists.map( list =>   <List key={list.title}  data={list} /> )}
        </Container>
    )
}