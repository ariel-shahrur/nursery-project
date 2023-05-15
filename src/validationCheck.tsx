export const validationCheck= (theElemId:string,thevalue:string,isValid:{},setIsValid:Function,isEmpty:{},setIsEmpty:Function)=>{
    switch (theElemId) {
        case "fullNameInpt":{
          if(thevalue.length>0){
            setIsEmpty({...isEmpty,fullNameInpt:false});
          }
          else{
            setIsEmpty({...isEmpty,fullNameInpt:true});
          }
           const words = thevalue.trim().split(' ');
            if (words.length >= 2){
              setIsValid({...isValid,fullNameInpt:true});
            }
            else{
              setIsValid({...isValid,fullNameInpt:false});
            }
            
        }
        break;
        case "PhoneInpt":{
          if(thevalue.length>0){
            setIsEmpty({...isEmpty,PhoneInpt:false});
          }
          else{
            setIsEmpty({...isEmpty,PhoneInpt:true});
          }
          const phoneRegex=/^\d{10}$/; 
           if (thevalue.length === 10 && phoneRegex.test(thevalue)){
             setIsValid({...isValid,PhoneInpt:true});
           }
           else{
             setIsValid({...isValid,PhoneInpt:false});
           }
           
       }
         break;
         case "emailInpt":{
          if(thevalue.length>0){
            setIsEmpty({...isEmpty,emailInpt:false});
          }
          else{
            setIsEmpty({...isEmpty,emailInpt:true});
          }
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          if ( emailRegex.test(thevalue)){
            setIsValid({...isValid,emailInpt:true});
            
          }
          else{
            setIsValid({...isValid,emailInpt:false});
          }
          
      }
        break;
      
        default:
          break;
      }
}