import React from 'react';
import { useState } from 'react';
import '../App.css';




const Form = () => {
  
    const [data, setData] = useState({
        name:"", date:" ", note:"",
      });
      const [formData, setFormData] = useState([]);

      function changeHandler(event){
       
            setData(prevData =>{
                const {name,date,note, value} = event.target;
          
              return{
                 ...prevData, [name]:event.target.value
              }
            })
            event.preventDefault();
            console.log(data)
      }

      function submitHandler(event){
            event.preventDefault();
            setFormData(
             ([...formData, data])
             )
            console.log(formData)
      }
  
    return (
    <div >
    <form onSubmit={submitHandler} className=' border-b-4 border-black' >
        
          <div className='text-bold text-4xl w-auto mt-12 '>
            <label htmlFor='title' className='text-fuchsia-700' >Title:</label>
            <input required className='border border-black ml-[135px] rounded' type='text' onChange={changeHandler} placeholder='Enter the title'  name="name" id='title' value={data.name} />
            
            <br/>
            <br/>

            <label htmlFor='date' className='text-fuchsia-700'>Date:</label>
            <input required className='border border-black ml-[130px] rounded w-[14vw]' type='date' onChange={changeHandler} placeholder='Enter the Date'  name="date" id='date' value={data.date}  />

            <br/>
            <br/>

            <label htmlFor='title' className='text-fuchsia-700' >Description:</label>
            <input required className='border border-black ml-5 rounded' type='text' onChange={changeHandler} placeholder='Enter your Note'   name="note" id='note' value={data.note} />

            <br/>
            <br/>
          </div>

          <div className='flex flex-col items-center justify-center font-semibold text-xl mt-4 '>

          <input type='submit' name='Submit' className='bg-blue-600 border-blue-600 text-white text-bold border-2 rounded-full w-[10vw] h-[4vh] ease-in duration-200 hover:bg-white hover:text-blue-600 hover:border-white mb-4'  />
          
          </div> 
  </form>

        <div className='mt-10'>
          {
            formData.map((item)=>{
              return(
                <div>
                    <p className='text-fuchsia-700 text-3xl' >Title: <span className='text-red-700'>{item.name}</span></p>
                    <p className='text-fuchsia-700 text-3xl' >Date: <span className='text-red-700'>{item.date}</span></p>
                    <p className='text-fuchsia-700 text-3xl' >Description: <span className='text-red-700'>{item.note}</span></p>
                </div>
                 )

            })
          }  
        </div>

    </div>
  )
}

export default Form;