import React, { useEffect, useState } from 'react';
import LinkForm from './LinkForm';
import {db} from '../firebase';
import { toast } from 'react-toastify';

const Links = () => {

  const [links, setLinks] =  useState([]);

  const [currentId, setCurrentId] = useState('');

  const addOrEditLink = async (linkObject) => {

     await db.collection('links').doc().set(linkObject);

     toast('Add', {
         type: 'success',
         autoClose: 2000
     })
    

  }

  const onDeleteLink = async (id) => {

      if(window.confirm('are you sure?')){
         await db.collection('links').doc(id).delete();
         toast('Delete', {
            type: 'error',
            autoClose: 2000
        })
      }
      

  }
  const getLinks =  () => {
      db.collection('links').onSnapshot((querySnapshot) => {
         const docs = [];
         querySnapshot.forEach(doc => {
            //console.log(doc.data())
            //console.log(doc.id);
            docs.push({...doc.data(), id:doc.id});
         });
         setLinks(docs);
      });

  }

  useEffect(() => {
         console.log('gettting data');
         getLinks();
  }, [])

   return(
    <div>
       <div className="col-md-4 p-2">
         <LinkForm addOrEditLink ={addOrEditLink} />
       </div>
       <h2>Links</h2>
       <div className="col-md-8 p-2">
          
          { links.map(link => (
            <div className="card mb-1" key={link.id}>
                  <div className="card-body">
                     <div className="d-flex justify-content-between">
                     <h4> {link.name} </h4>
                        <div>
                        <i onClick={ () => onDeleteLink(link.id)} className="material-icons text-danger" >close</i>
                        <i onClick={() => setCurrentId(link.id)} className="material-icons text-success" >create</i>
                        </div>
               
                     </div>
                     
                     <p> {link.description} </p>
                     <a rel="noopener noreferrer" href={link.url} target="_blank"> Go website</a>
                  </div>
            </div>

          ))}
    
       </div>
    </div>
    
   )

};

export default Links;