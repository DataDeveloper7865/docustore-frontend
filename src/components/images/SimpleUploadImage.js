import React from 'react';



function SimpleUploadImage() {
  return (
    <div>
      <h1>Hello World from Simple upload image!</h1>
      <form method="post" encType="multipart/form-data" action="http://localhost:3005/images/">
          <p>
              <input type="text" name="title" placeholder="optional title" />
          </p>
          <p>
              <input type="file" name="upl" />
          </p>
          <p>
              <input type="submit" />
          </p>
      </form>
   
    </div>
  )
}

export default SimpleUploadImage;