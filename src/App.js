import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';


function App() {

  const [file, setFile] = useState("")


  console.log(file && file[0].name)

  return (
    <>
      {/* <Row className="p-2">

       <Col md={2} sm={1} className='col1'>
          Choose File
       </Col>

       <Col md={4} sm={2} className='col2'>
        <input className='col2-input' defaultValue={file && file[0].name}/>
       </Col>
       
       <Col md={2} sm={2} className='col1'>
          Submit
       </Col>

     </Row> */}

      <div className='new'>


        <div className='input-btn-choosefile'>
          Choose File
        </div>

        <div className='input-placeholder'>
          <input style={{background:"transparent" , width:"100%"}} />
        </div>



        {/* <button>submit</button> */}
      </div>


      <input type="file" onChange={e => setFile(e.target.files)} />
    </>
  );
}

export default App;
