 import HomePage from "../pages/HomePage";
 import AboutPage from "../pages/AboutPage";
 import SignInPage from "../pages/SignInPage";
 import BusinessRegistrationPage from '../pages/BusinessRegistrationPage';
 import SimpleRegistrationPage from "../pages/SimpleRegistrationPage";
 import MyCardsPage from "../pages/MyCardsPage";
 import {AiFillHome} from 'react-icons/ai';
 import {FiLogIn} from 'react-icons/fi';
 import {AiOutlineIdcard} from 'react-icons/ai';
 import {MdBusinessCenter} from 'react-icons/md';
 import {MdOutlineAppRegistration} from 'react-icons/md';
 import {BsFillFileEarmarkPersonFill} from 'react-icons/bs';

 
// here we will create an "Array of Objects" which will help us to navigate through the NavBars by creating the neccesary Tags if
// certain conditionsare met.

export const tabs =[
     {
         name:'Home', //the name of the Nav displayed.
         href:'/home', //the path to the Nav if selected/ the params in the Http://localhost:3001/home.
         page:HomePage, //if selected, will create new <HomePage></HomePage> in "NavigationRouteComp.js instead of "<tabs.page></tabs.page>".
         displayForLoggedin:true, //even if you are logged in still show me this Nav.
         icon: <AiFillHome style={{fontSize:14,marginBottom:5}}></AiFillHome> //an icon from react-bootstrap And css style i added myself.
    },
    {
        name:'About',
        href:'/about',
        page:AboutPage, //will print the content inside the component AboutPage as seen above.
        displayForLoggedin:true,
        icon:<BsFillFileEarmarkPersonFill style={{fontSize:14,marginBottom:5}}></BsFillFileEarmarkPersonFill>
   },
   {
    name:'Simple Registration',
    href:'/simple-registration',
    page:SimpleRegistrationPage,
    displayForLoggedin:false, //if you are logged in don't show me this Nav anymore.
    icon:<MdOutlineAppRegistration style={{fontSize:14,marginBottom:5}}></MdOutlineAppRegistration>
    },
    {
        name:'Business Registration',
        href:'/business-registration',
        page:BusinessRegistrationPage,
        displayForLoggedin:false,
        icon:<MdBusinessCenter style={{fontSize:14,marginBottom:5}}></MdBusinessCenter>
    },
        {
            name:'My Cards',
            href:'/my-cards',
            page:MyCardsPage,
            displayForLoggedin:true,
            hideForLoggedout:true,
            isBiz:true,
            icon:<AiOutlineIdcard style={{fontSize:14,marginBottom:5}}></AiOutlineIdcard>
            },
            {
                name:'Sign In',
                href:'/sign-in',
                page:SignInPage ,
                displayForLoggedin:false,
                icon: <FiLogIn style={{fontSize:14,marginBottom:5}}></FiLogIn>
            }
            
];

