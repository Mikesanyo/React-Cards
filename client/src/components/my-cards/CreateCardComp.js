import {Form,Button} from 'react-bootstrap';
import validateCard from '../../helpers/cardHelper';
import {toast} from 'react-toastify';


const notify = (message) => toast(message);

function  CreateCardComp({text,clickHandler,card,setAddMode,setData}) {
 
    return <Form>
    <Form.Group className="mb-3" controlId="formBasicBusinessName">
      <Form.Label>Business Name</Form.Label>
      <Form.Control type="text" defaultValue={card!=null ? card.bizName:""} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
      <Form.Label>Business Description</Form.Label>
      <Form.Control type="text" defaultValue={card!=null ? card.bizDescription:""}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
      <Form.Label>Business Address</Form.Label>
      <Form.Control type="text" defaultValue={card!=null ? card.bizAddress:""}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
      <Form.Label>Business Phone</Form.Label>
      <Form.Control type="text" defaultValue={card!=null ? card.bizPhone:""}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicBusinessImage">
      <Form.Label>Business Image</Form.Label>
      <Form.Control type="text" defaultValue={card!=null ? card.bizImage:""}/>
    </Form.Group>

    <Button variant="primary" type="submit" onClick={(e)=>{
      e.preventDefault();
      //im going to activate a function in which all the right side will be transfered to the left side
      let validationDataorError = validateCard("formBasicBusinessName","formBasicBusinessDescription","formBasicBusinessAddress","formBasicBusinessPhone","formBasicBusinessImage",card!=null?card._id:null);
      if(typeof validationDataorError == 'string'){
         notify(validationDataorError);
      }else{
          if(card==null){
            delete validationDataorError.id;
          }
          clickHandler(validationDataorError);
          toast("Card was created successfully :) ")
          
      }
    }}>
        {text}
    </Button>
    
    <Button id="back-btn"style={{marginLeft:10}} onClick={(e)=>{
      e.preventDefault();
        setAddMode(false);
        setData(false);
    }}>
      Back
    </Button>
  </Form>;
  
}
export default CreateCardComp;