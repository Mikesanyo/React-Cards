
const getElemVal=(id)=>document.getElementById(id).value;

export default function  validateCard(idbizName,idbizDescription,idbizAddress,idbizPhone,idbizImage,idbizid) {
   let error=''; 
   let data={
     bizName:getElemVal(idbizName),
     bizDescription:getElemVal(idbizDescription),
     bizAddress:getElemVal(idbizAddress),
     bizPhone:getElemVal(idbizPhone),
     bizImage:getElemVal(idbizImage) ?getElemVal(idbizImage):'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
     id:idbizid
    };

    //client validation based on Joi
    if(!data.bizName || data.bizName<2){
      
      error = `Name must be longer than 2 words *`;
    }
    if(!data.bizDescription || data.bizDescription<2){
      error += "The Description must contain at least 2 words *"
    }
    if(!data.bizAddress || data.bizAddress<2){
      error += "The Address must be longer than 2 words *"
    }
    if(data.bizPhone){
      let reges = /^0[2-9]\d{7,8}$/;
      let res = reges.test(data.bizPhone);
      if(!res){
        error+="Invalid phone number *"
      }
    }
    if(!data.bizPhone){
      error+="No Phone number was entered"
    }
   
     
    return error || data;  //check the Error, if he true then display error msg, if not then Data
}