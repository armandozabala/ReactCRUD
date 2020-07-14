import React, {useState, useEffect} from 'react';
import {db} from '../firebase';
import { toast } from 'react-toastify';

const LinkForm = (props) => {

 const [values, setValues] = useState({
    url: '',
    name: '', 
    description: ''
 })

 const validateURL = str =>{
    
 }

 const initialStatesValues = {
  url: "",
  name: "", 
  description: ""
}


 const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value });
 

 }


 const handleSubmit = e => {
     e.preventDefault();

     props.addOrEditLink(values);
     console.log("end");
     setValues({...initialStatesValues});
 }

 const getLinkById = async (id) => {

   const doc = await db.collection('links').doc(id).get();

    //console.log(doc.data());

    setValues({...doc.data()});

  }

 useEffect(() => {
      if(props.currentId === ''){
         setValues({...initialStatesValues})
      }else{
         console.log("Edit");
          getLinkById(props.currentId);
      }
 },[props.currentId]);

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
            value={values.url}
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
              value={values.name}
           />
       </div>
       <div className="form-group m-2">
             <textarea 
                 name="description" 
                 rows="3" 
                 className="form-control"
                 onChange={handleInputChange}
                 value={values.description}
                 ></textarea>
       </div>

       <button className="btn btn-primary btn-block">
           {props.currentId === '' ? 'Save' : ' Update'}
       </button>
     </form>
   )
}

export default LinkForm;