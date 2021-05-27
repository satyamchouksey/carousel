import React, {useEffect, useState, useRef} from 'react'
import CardList from './CardList'
import './style.css'
const Carousel = () => {
    const {fullList} = CardList();
    console.log(fullList,"data")
    const [focusList, setfocusList] = useState([1]);
    const [index, setIndex] = useState(3);
    const [change, setchange] = useState(false);
    let timerId = useRef(false)
    const generateList = () => {
        let temp = [];
        for (let i = index; i < index + 3; i++) {
          temp.push(fullList[i%10]);
        }
        setfocusList(temp);
    }
    useEffect(() => {
        timerId.current = setTimeout(() => {
          generateList();
          setIndex((prev) => {
            if (prev >= 9) {
              return 0;
            } else {
              return prev + 1;
            }
          });
        }, 1000);
    }, [index])
    
    return (
      <div class="displayContainer">
        <button
          onClick={() => {
            clearTimeout(timerId.current);
            setIndex((prev) => prev - 1);
          }}
        >
          {"<-"}
        </button>
        <div className="cardContainer">{focusList}</div>

        <button
          onClick={() => {
            clearTimeout(timerId.current);
            setIndex((prev) => prev + 1);
          }}
        >
          {"->"}
        </button>
      </div>
    );
}

export default Carousel
