import { signInUser } from '../helpers/FetchHelper';
import {Container} from 'react-bootstrap';
import SignInComp from "../components/sign-in/SignInComp";
import {toast} from 'react-toastify';
import { getMeData } from '../helpers/FetchHelper';
import {useHistory} from 'react-router-dom';


function  SignInPage({set,user}) {
  
    const history=useHistory();
     return  <Container>
                  <h1>Sign In</h1>
                  <SignInComp clickHandler={signIn}></SignInComp>    
           </Container>;

            function  signIn(data) { // the click handler stores the user's data and inserts into the signIn function
                signInUser(data, (response)=>{ 
                       if(response.token) // if we get response with token, 'welcome to U' , 
                       {
                        toast('Welcome to U'); // a 'message' sent to the client/user
                        localStorage.setItem   // and store the token in localStorage.
                        ('token', response.token); // localStorage will store inside itself value(response.toekn) and its name will be 'token' 
                        getMeData(response.token, (data)=>{
                            set(data);
                            history.push('/home'); //make an object that stores 2 attributes,path,key/index
                        });
                      
                       }
                       else
                       {
                        toast('Failed to log in');
                       }
                });
            }
}
export default SignInPage;

                