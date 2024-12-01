import React from 'react';
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../Styles/UpdateProducts.css' 

function UpdateProducts ()  {

    let[Category,setCategory]=useState("")
  let[productname,setProductname]=useState("")
  let[productprice,setProductprice]=useState("")
  let[desc,setDesc]=useState("")
  let[thumbnail,setThumbnail]=useState("")
  let[ratings,setRatings]=useState("")

 let data={Category,productname,productprice,desc,thumbnail,ratings}

 function updateItem(e){
    e.preventDefault()
    axios.put(`http://localhost:2003/Items/${param.id}`,data)
    .then((res)=>{
        console.log(res)
        toast.success("Updated Successfully")
    })
    .catch((err) => {
        console.log(err)
        toast.err("Invalid Data Format")
    })
 }


  let param=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:2003/Items/${param.id}`)
    .then((res)=>{
      console.log(res.data)
      setProductname(res.data.productname)
      setCategory(res.data.Category)
      setDesc(res.data.desc)
      setProductprice(res.data.productprice)
      setThumbnail(res.data.thumbnail)
      setRatings(res.data.ratings)
    })
    .catch((err)=>{
      console.log(err)
    })
  })



  return (
    <div className='updateproducts'>
          <form className='update' onSubmit={updateItem}>
            <fieldset className='field'>
                <label className='label6' htmlFor=""> Category:</label>
                <select required value={Category} onChange={(v)=>{setCategory(v.target.value)}}>
                    <option >Dress Material</option>
                    <option>Mobile</option>
                    <option>Mobile Accesories</option>
                    <option >Electronics</option>
                    <option >Groceries</option>
                </select>
                <label className='label6' htmlFor="" >Product Name:</label>
                <input required value={productname} onChange={(v)=>{setProductname(v.target.value)}}className='input6' type="text" placeholder='Enter the productname' />

                <label className='label6' htmlFor="">Product price:</label>
                <input required value={productprice} onChange={(v)=>{setProductprice(v.target.value)}} className='input6' type="number" placeholder='Enter the price' />

                <label className='label6' htmlFor="">Desc:</label>  
                <textarea required value={desc} onChange={(v)=>{setDesc(v.target.value)}}rows='2' cols='30' placeholder='Enter Description'></textarea>

                <label className='label6' htmlFor="">Thumbnail:</label>
                <input required value={thumbnail} onChange={(v)=>{setThumbnail(v.target.value)}} className='input6' type="text" placeholder='Enter the image address' />

                <label className='label6' htmlFor="">Ratings:</label>
                <input required value={ratings} onChange={(v)=>{setRatings(v.target.value)}} className='input6' type="number" placeholder='Enter the ratings' />

                <button className='btn btn-warning'>Update Items</button>

            </fieldset>
        </form>
      
    </div>
  );
}

export default UpdateProducts;
