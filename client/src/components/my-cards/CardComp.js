import {Card,Button} from 'react-bootstrap'

var cardStyle= {
  width:'18rem',
  height:'23rem',
  display:'inline-block',
  padding:'20px',
  margin:'10px',
  boxShadow:'0 2px 20px lightGrey',
  transition:'transform 200ms ease-in',
}

var cardImg={
  height:'5rem',
  width:'5rem',
  objectFit:'cover'
}

function CardComp ({card,handleClick,displayEdit}) {

  //the card the client will see strored in web

 return   card  &&  <Card style={cardStyle}>
  <Card.Img variant="top" style={cardImg} src={card.bizImage} />
  <Card.Body>
    <Card.Title>{card.bizName}</Card.Title>
    <Card.Text>
      {card.bizDescription}
    </Card.Text>
    <Card.Text>
      {card.bizAddress}
    </Card.Text>
    <Card.Text>
      {card.bizPhone}
    </Card.Text>

    <Button style={{color:'white',padding:5,margin:5}} variant="info" onClick={(e)=>{
      e.preventDefault();
      displayEdit(card); //containts the cards Data
    }} >Edit this card</Button>

    <Button style={{padding:5,margin:5}} variant="danger" onClick={(e)=>{
      e.preventDefault(); //why? cause the button itself by default refreshes the page, that's why we restrict it
      handleClick(card._id);
    }} >Remove this card</Button>


  </Card.Body>
</Card> || <></>} //if there are Cards to display then display OR if there is none then display none
export default CardComp;