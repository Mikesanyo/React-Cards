import { insertNewCard,editCard } from "../helpers/FetchHelper";
import {Container,Button} from 'react-bootstrap';
import CardsComp from "../components/my-cards/CardsComp";
import CreateCardComp from "../components/my-cards/CreateCardComp";
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function  MyCardsPage ({user,set}) {
    let [card,setCard]=useState(null);
    const[isAddMode,setAddMode]=  useState(false);
    const[editData,setData]= useState(false);
    const history = useHistory();

    if(user){
    return  <Container>
                    <Button className="btn btn-success" style={{padding:5,margin:15}} onClick={()=>{
                                setAddMode(true);
                     }}>Create New Card</Button>
                <Container>

                  {!isAddMode && !editData && <CardsComp displayEdit={displayEdit}></CardsComp>} 

                  {isAddMode && !editData && <CreateCardComp setAddMode={setAddMode} setData={setData}  text="Create Card" clickHandler={insertCard}></CreateCardComp>} 
                  
                  {editData && !isAddMode && <CreateCardComp setAddMode={setAddMode} setData={setData} text="Save Changes" card={card} clickHandler={card2Edit}></CreateCardComp>}

                    </Container>
            </Container>
    } else {
        history.push("/sign-in");
    }
            function displayEdit(c){
                setCard(c);
                setData(true);
                  
               }   

            function  insertCard (data) {
                insertNewCard(data, localStorage.getItem('token'), (response)=>{
                    setAddMode(false);
                });
            }

            function  card2Edit (data) {
                editCard(data, localStorage.getItem('token'), (response)=>{
                    setAddMode(false);
                    setData(false);
                }); 
            }
}
export default MyCardsPage;