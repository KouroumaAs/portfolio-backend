let errors = { 
    status:400,
    message:'',
  };
const geterrors = (details) => {
    let validationErrors = {
        status:200,
        errors:[]
   };
  
    if(Array.isArray(details)){
   
        validationErrors.status = 400;
        details.map((detail) => {
             
             errors.field = detail.path[0];
             errors.message = detail.message;
             validationErrors.errors = [...validationErrors.errors,{'field': detail.path[0],'message':detail.message}];
           
        })
    }
   
    return validationErrors;
 }
 module.exports = { geterrors}