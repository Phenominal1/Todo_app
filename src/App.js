import './App.css';
import Form from './componenets/Form';



function App() {
  return (

    <div  className='h-screen img ' >
        <div className='font-semibold flex flex-col justify-center items-center '>
            <h1 className='font-bold text-4xl mt-10 text-white'>Notes Application</h1>
            <br/>
            <br/>
            <Form/>   
       </div>
    </div>
      

  );
}

export default App;
