import React from 'react';

 export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
<<<<<<< HEAD
  </div> 


=======
  </div>
>>>>>>> 9c97cdaf7c66bbb96fe931aba06ce0c5da369b52
