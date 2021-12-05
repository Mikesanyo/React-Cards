import {registerNewAccount,signInUser} from '../helpers/FetchHelper';
import {toast} from 'react-toastify';
import {Container} from 'react-bootstrap';
import SimpleRegistrationComp from "../components/registration/SimpleRegistrationComp";
import CreateCardComp from '../components/my-cards/CreateCardComp';
import {useState} from 'react';
import {insertNewCard,getMeData} from '../helpers/FetchHelper';
import {useHistory} from 'react-router-dom';

function BusinessRegistrationPage({set,user}) {
    const [isStep1, setIsStep1] = useState(true); 
    const history = useHistory();

    return <Container>
                 <h1>Business Registration</h1> 
        {
            isStep1 && <SimpleRegistrationComp set={set} user={user} clickHandler = {registerUser} 
                            text = "Next" >
                        </SimpleRegistrationComp>
            
        } {
           !isStep1 && <CreateCardComp text="Create Card" clickHandler={createCard}></CreateCardComp> 
              
        } </Container>;
      
    function registerUser(data) { // data = user's login info 
        data.biz = true;
        let email = data.email;
        let password = data.password;   
        
        
        registerNewAccount(data,(response) => { 
            if (response._id) {
                
                signInUser({email: email,password: password}, (response) => {
                    if (response.token) {
                        localStorage.setItem('token', response.token);
                        
                        getMeData(response.token, (data)=>{
                            set(data);});
                    } else {
                        toast('Error, Account was not created');
                    }
                });
                
                toast('Account Created Successfully');
                toast("Welcome " + data.name);
                setIsStep1(false); // now its time to display <CreadCardComp>
            }
    });
}

    function createCard(dataX) {
        insertNewCard(dataX, localStorage.getItem('token'), (response) => {
            history.push('/my-cards');
        });
    };
}

export default BusinessRegistrationPage;