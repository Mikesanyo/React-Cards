import {useState,useEffect} from 'react';
import { getMeCards,deleteCard} from '../../helpers/FetchHelper';
import CardComp from './CardComp';



function CardsComp({displayEdit}) {

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    if (localStorage.getItem("token"))
      getMeCards(localStorage.getItem("token"), (data) => {
        setCards(data);
      });
  }, []);

  function card2Delete(id){
    deleteCard(id, localStorage.getItem("token"), (card) => {
      setCards(cards.filter((card) => card._id !== id));
    });
  };


  return cards.map((card, index) => (
    <CardComp key={index} displayEdit={(c)=>{displayEdit(c)}}  handleClick={card2Delete} card={card}></CardComp>
  ));
}

export default CardsComp;

