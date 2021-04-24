import { Progress } from 'antd';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import ImageApi from '../../api/api';

//FROM: https://reactgo.com/react-file-upload/
function UploadImage() {

  //storing uploaded file in state
  const [file, setFile] = useState('');
  //storing the received file from the backend
  const [data, getFile] = useState({name: "", path: "" });
  //store file name in state
  const [fileName, setFileName] = useState('')
  //progress bar state
  const [progress, setProgress] = useState(0);
  //accessing the input element
  const el = useRef();
  const nameEl = useRef();

  const handleChange = (e) => {
    setProgress(0)
    //Access the file element
    const file = e.target.files[0]
    console.log(file)
    //store file in state
    setFile(file);
  }

  const handleNameChange = (e) => {
    setFileName(e.target.value);
    console.log("inside handle name change!!!!")
  }

  const uploadFile = () => {
    const formData = new FormData();
    //append file to form
    console.log("Inside trying to upload file!!!!")
    formData.append('file', file)
    axios.post('http://localhost:3005/images/images-upl-s3/', formData, {
      onUploadProgress: (ProgressEvent) => {
        let progress = Math.round(
        ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
        setProgress(progress);
      }
    }).then( res => {
      console.log('inside the upload file')
      console.log(res);
      // getFile({ name: res.data.name,
      //   path: 'http://localhost:3005' + res.data.path
      // })
    }).catch(err => console.log(err))

    const dataToSend = {name: fileName};
    //append file to form
    axios.post('http://localhost:3005/images/images-upl-db', dataToSend
    ).then( res => {
      console.log('inside the image upload to database')
      console.log(res);
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <div className='file-upload'>
        <input type='text' ref={nameEl} onChange={handleNameChange} />
        <input type='file' ref={el} onChange={handleChange} />
        <div className='progressBar' style={{ width: progress}} >
          {progress}
        </div>
        <button onClick={uploadFile} className='upbutton'>
          Upload
        </button>
      <hr />
      {/* displaying the received image */}
      {/* {data.path && <img src={data.path} alt={data.name} />} */}
      </div>
    </div>
  )
}

export default UploadImage;