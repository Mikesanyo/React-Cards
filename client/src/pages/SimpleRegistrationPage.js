import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/registration/SimpleRegistrationComp";
import { registerNewAccount } from "../helpers/FetchHelper";
import {  toast } from 'react-toastify';
import {useHistory} from 'react-router-dom';

// the "clickHandler" from other components will bring us here with the "user's" info after the "user" inputs all the necessary info
// and here we transfer the data to "database" 

function  SimpleRegistrationPage () {
    const history = useHistory();

    return <Container> 
                 <h1>Simple Registrations</h1>
                 <SimpleRegistrationComp clickHandler={registerUser} 
                     text="Sign up" >
                </SimpleRegistrationComp>
             </Container>;

                                              // clicking the "Sign up" button will activate this function
             function  registerUser(data) {   // data = user's login info
                registerNewAccount(data,      // the data i send
                    (dataX)=>{                 // the data i recieve
                      if(dataX._id){           // if data._id exict(true) then execute the next code
                            toast('Account Created Successfully');
                            history.push('/sign-in')
                        }
                        else
                        {
                            toast('Error Account was not created');
                        }
                    });
             }
}
export default SimpleRegistrationPage;