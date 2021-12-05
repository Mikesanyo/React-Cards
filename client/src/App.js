import { ToastContainer } from 'react-toastify';
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import {useState , useEffect} from 'react';
import { getMeData } from './helpers/FetchHelper';
import Footer from './components/footer/Footer';


function App(){
 
    const [user,set]= useState({}); //this "useState" store inside itself the "user's" data(email,password, name) for other components to use
    useEffect( ()=>{ //this "useEffect" help us to prevent endless loops of Re-drawing the entire page cause the user is logged in.
        //"useEffect" gets 2 parameters, first is Function, the other is "Empty Array", this way we can tell useState to
        //draw something if a change appears only once.
        
        getMeData(localStorage.getItem('token'), (data)=>{
            set(data);});
            
        }, [] );
        
       

        return <div className="App">
    <>
            <SinglePageAppComp set={set} user={user}></SinglePageAppComp>

            <ToastContainer></ToastContainer>

            <Footer> 
                 <p> Copyright &copy; 2021 Michael All Rights Reserved</p> 
            </Footer>
    </>
</div>
}

export default App;