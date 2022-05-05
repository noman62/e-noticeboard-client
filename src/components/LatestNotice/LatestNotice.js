import axios from 'axios';
import React, { useState } from 'react';
import Resizer from "react-image-file-resizer";
import './LatestNotice.css';


const LatestNotice = () => {
  const [notice, setNotice] = useState({
    title: "", description: "",image:""
  })

  const onChangeFile=async e=>{
    let file = e.target.files[0]

    // prepare the image
    const resizeFile = file =>
      new Promise(resolve => {
        Resizer.imageFileResizer(
          file,
          500,
          500,
          'JPEG',
          100,
          0,
          uri => {
            resolve(uri)
          },
          'base64'
        )
      })
    const image = await resizeFile(file)
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '')

    try {
      // Get Image URL
      let { data } = await axios.post(
        '/upload-image',
        {
          image: base64Data,
        }
      )
      console.log(data)
      // set image in the state
      setNotice({ ...notice, image: data.display_url })
    
    } catch (err) {
      console.log(err)
    }
  }

  //Handle form state                                                                           
  const handleInputes = e => {
    const newNoticeInfo = { ...notice }
    newNoticeInfo[e.target.name] = e.target.value
    setNotice(newNoticeInfo)
  }

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description,image } = notice;

    const res = await fetch("/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title, description,image
      })
    });
    const data = await res.json();
    console.log(data)
    if (res.status === 404 || !data) {
      alert("error");
    } else {
      alert("data inserted")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >

        <center>  <h1> Student Notice Form</h1> </center>
        <hr />
        <label> Title </label>
        <input type="text" name="title" placeholder="Enter the Notice Title" autoComplete='off'
          value={notice.title}
          onChange={handleInputes}
          required />
        <label> Description </label>
        <input type="text" name="description" placeholder="Enter the notice Description" autoComplete='off'
          value={notice.description}
          onChange={handleInputes}
          required />
        <input type="file" name="noticeImage"
         onChange={onChangeFile} 
         />
                    

        <button type="submit" class="registerbtn"  >Submit</button>

      </form>

    </div>
  );
};

export default LatestNotice;