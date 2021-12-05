import {Form,Button} from 'react-bootstrap';
import validateSimpleRegistration from '../../helpers/simpleRegistrationHelper';
import {  toast } from 'react-toastify';

const notify = (message) => toast(message);

function  SimpleRegistrationComp({text='', clickHandler= f=>f}) {
    return <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password"  />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
    
    <Button variant="primary" type="submit"  onClick={(e)=>{ //when "clicking" the sumbit button, we will get a value that
                                                             // will be stored inside "e".                                              
                                                             // this exact "e" will be prevented from refreshing/clearing the inputs 
                                                             // inside if we clicked submit
       e.preventDefault();
      let validationErrorOrData=validateSimpleRegistration('formBasicEmail','formBasicPassword','formBasicName');                              
                                                            //will store inside the user's input data from Form
      if(typeof  validationErrorOrData =='string')            //if the user gets an error it will be typeof string -> "password must be 6 letters"
      {
          notify(validationErrorOrData);
      }
      else
      {
        clickHandler(validationErrorOrData);                   // if the input was correct, then execute the "clickHancler" with the stored
      }                                                        // "user's" info.
       }}>
     {text}
    </Button>
  </Form>;
  
}

export default SimpleRegistrationComp;