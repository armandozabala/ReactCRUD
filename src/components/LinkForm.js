import React, {useState} from 'react';

const LinkForm = (props) => {

 const [values, setValues] = useState({
    url: '',
    name: '', 
    description: ''
 })


 const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
 

 }


 const handleSubmit = e => {
     e.preventDefault();
     props.addOrEditLink(values);
     console.log("end");
     setValues({
      url: "",
      name: "", 
      description: ""
   });
 }

   return(
     <form className="card card-body" onSubmit={handleSubmit}>
       <div className="form-group input-group m-2">
         <div className="input-group-text bg-light">
           <i className="material-icons">insert_link</i>
         </div>
         <input 
            type="text" 
            className="form-control" 
            placeholder="" 
            name="url"
            onChange={handleInputChange}
            values={values.url}
            />
       </div>
       <div className="form-group input-group m-2">
         <div className="input-group-text bg-light">
           <i className="material-icons">create</i>
         </div>
           <input 
              type="text" 
              className="form-control" 
              placeholder="" 
              name="name"
              onChange={handleInputChange}
              values={values.name}
           />
       </div>
       <div className="form-group m-2">
             <textarea 
                 name="description" 
                 rows="3" 
                 className="form-control"
                 onChange={handleInputChange}
                 values={values.description}
                 ></textarea>
       </div>

       <button className="btn btn-primary btn-block">
           Save
       </button>
     </form>
   )
}

export default LinkForm;