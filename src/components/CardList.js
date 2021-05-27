import React, { useEffect, useState } from 'react'
import Card from './Card';
import './style.css'
const list = [
  {
    title: "Title1",
    header: "Header1",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title2",
    header: "Header2",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title3",
    header: "Header3",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title4",
    header: "Header4",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title5",
    header: "Header5",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title6",
    header: "Header6",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title7",
    header: "Header7",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title8",
    header: "Header8",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title9",
    header: "Header9",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
  {
    title: "Title10",
    header: "Header10",
    content:
      "It had been her dream for years but Dana had failed to take any action toward making it come true.",
  },
];
const CardList = () => {
    const [fullList, setfullList] = useState([])
    const createList = () => {
        const tempList = list.map(item => {
            return <Card title={item.title} header={item.header} content={item.content}/>
        })
        setfullList(tempList);
    }
    useEffect(() => {
        createList();
    }, [])
    return (
            {fullList}
    )
}

export default CardList
