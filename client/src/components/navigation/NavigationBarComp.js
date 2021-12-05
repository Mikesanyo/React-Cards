import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {tabs} from '../../helpers/tabs';
import {useHistory} from 'react-router-dom';


// here we gonna display the "NavBar" itself BUT we will do it dynamicly so we can avoid hard-coding.
// AND we gonna make a SWITCH if certain contidionts are met we gonna display only the proper NavBar.


function  NavigationBarComp ({set,user}) {
      
       let menuForLogInItems = tabs.filter(x=>x.displayForLoggedin); //filters and show me array of only "displayForLoggedin"
       let menuForLogOutItems = tabs.filter(x=> !x.hideForLoggedout );

     return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     <Container>
      <Navbar.Brand to="/home" as={Link}>Michael Abaev Site</Navbar.Brand>
     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
       <Nav className="me-auto">
       {
          user._id 
          ? 
          menuForLogInItems.map((tab,index)=> <Nav.Link  key={index} to={tab.href} as={Link}> {tab.icon}  {tab.name} </Nav.Link> )
          : 
          menuForLogOutItems.map((tab,index)=> <Nav.Link key={index} to={tab.href} as={Link}> {tab.icon} {tab.name} </Nav.Link>)
          //filter/display for me everyone who theirs "hideForLoggout"=true
        }
        <SignOutFunc set={set} user={user}></SignOutFunc>
      </Nav> 
       </Navbar.Collapse>
     </Container>
   </Navbar>
;
}

  function SignOutFunc({set,user}){
    const history=useHistory();
    if(user._id){
    return(<>
  
    <Button onClick={()=>{
      localStorage.removeItem('token');
      set({})
      history.push({pathname:"/home"});
    }}>Sign Out</Button>
    </>
    )
  }
  return null; //return "nothing" if you have no user.(dont show)
  }

export default NavigationBarComp;

//if there is a "user" and no "._id" , i will get the second tab, if there is "._id", i will get the first tab, if there is"No user" then
//i get an error.