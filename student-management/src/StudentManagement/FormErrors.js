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
>>>>>>> 78246155bc8387fc8c976b6f26c345aaaa0877e5
