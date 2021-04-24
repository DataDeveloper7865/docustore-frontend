import { Button, Input } from 'antd';
import React, { useState } from 'react';

function SimpleUploadImage() {

    const [formData, setFormData] = useState({
        name: "",
        upl: null
    })
    
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(evt)
        // let nameFromForm = formData.name;
        //post to api

    }

    function handleChange(evt) {
        const {name, value } = evt;
        setFormData(data => ({...data, [name]: value}));
        console.log(formData)
    }
    

  return (
    <div>
      <h1>Hello World from Simple upload image!</h1>
      {/* <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" action="http://localhost:3005/images/"> */}
      <form onSubmit={handleSubmit} >
          <div>
              <label> Name of Image</label>
              <input 
                    type="text" 
                    name="name" 
                    placeholder="optional title" 
                    onChange={handleChange}
                />
          </div>
          <div>
                <label> File To Upload</label>
                <input 
                    type="file" 
                    name="upl"
                    placeholder="Image to Upload"
                    onChange={handleChange}
                />
          </div>
      </form>
          <div>
              <Button type="submit" />
          </div>
    </div>
  )
}

export default SimpleUploadImage;