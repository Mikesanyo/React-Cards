const getElemVal=(id)=>document.getElementById(id).value; // "getElemVal" is the user's info he inputed in the Form

 export default function  validateSimpleRegistration(idEmail,idPassword,idName) { // a function that gets 3 params
    let error='';     //helping variable that will store the "error" message if something goes wrong
    let data={        //an object that will store the data we got from the user's Form
      email:getElemVal(idEmail),
      password:getElemVal(idPassword),
      name:getElemVal(idName),
      biz:false
     };
      
     if( !data.password || data.password.length<6 ) //if the password none exist OR password is shorter than 6 words
     {
        error= `*Password must have 6 letters  *`;
     }

     if(data.email)                           //if the email exist/true
     {                                             //   regex   //
         var reges = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var res=  reges.test(data.email);
            if (!res)
            {
                error+= 'Must enter valid email *';
            }
     }
     else
     {
        error+= 'Must enter valid email *';
     }
     if(!data.name ||data.name.length<2 )
     {
        error+= 'Name must have at least two letters';
     }
     return error || data;
}