import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../Styles/UserViewitems.css'
const UserViewItems = () => {
 
    let[products,setProducts]=useState([])
    let[force,setForce]=useState(0)
    
    useEffect(()=>{
        function fetchData(){
          axios.get('http://localhost:2003/Items')
          .then((res)=>{
            setProducts(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
        }
        fetchData()
      },[])
    
      console.log(products)

      function deleteProduct(id,productname){
        axios.delete(`http://localhost:2003/Items/${id}`)
        .then(()=>{
          toast.success(`${productname} Deleted Successfully`)
          setForce(force+1)
        })
        .catch(()=>{
          toast.error('Data is not present')
        })
      }
      console.log(deleteProduct)  
      
      
      let navi=useNavigate();
      
      function editpage(id)
      {
        console.log(id);
           navi(`/AdminHomepage/UpdateProducts/${id}`)
      }
      
    
  return (
    <div className='UserViewItems'>  
        {products.map((product)=>{
          return(
            <div className='items'>

              <div className="card2">

                <div className="Thumbnail2">
                  <img className='thumb2'src={product.thumbnail} alt="" /> 
                  
                </div>
                <br />

                <div className="description2">
                 <h4>{product.productname}</h4>
                 <span id='cost2'>M.R.P:<big> <strike>{product.productprice}</strike> </big></span>
                 <h5>Offer price:12% off ₹{Math.round(product.productprice*0.88)}</h5>
                 <p>Description: {product.desc}</p>
                 <span>Ratings: <b>{product.ratings}*</b> </span>
                 <br /> <br />

                 <button className='mx-3 btn btn-warning' onClick={()=>{editpage(product.id)}}><EditIcon/>Update</button>
                 <button className='mx-3 btn btn-danger' onClick={()=>{deleteProduct(product.id,product.productname)}}> <DeleteForeverIcon/> Delete</button>

                 <br /><br /><br /><br /> <br /><br /><br /> <br /><br />


                </div>
              </div>
            </div>
          )
        })}
    </div>
  );
}

export default UserViewItems;
