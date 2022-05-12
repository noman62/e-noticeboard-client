import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingNotice.css'
const UpcomingNotice = () => {
    const [user, setUser] = useState({
        noticeNo: '',
        title: '',
        shortTitle:'',
        batchName:'',
        date:''
    })

    //Handle form state
    const handleChange = e => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
    }


    const handleSubmit = e => {
        e.preventDefault()
        const { noticeNo, title,shortTitle,batchName,date } = user;
        const url = `http://localhost:8080/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                noticeNo, title,shortTitle,batchName,date
            })
        })
            .then(res => console.log('server side response'))

    };


    return (
        <div className="container">
            <div className='row'>
                <div className="sidenav col-4">
                    <Link className="nav-link text-white" aria-current="page" to="/updateNotice">Update Notice</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/form">Upload Notice</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/upcomingNotice">Upcoming Notice</Link>
                    <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                </div>
                <div id="upload" className='pt-4 ml-5 mt-5  col-8'>
                    <form className="upload-form" onSubmit={handleSubmit}>
                        <div className="form-row" >
                            <div className="form-group col-md-12">
                                <label for="notice-number">Notice No</label>
                                <input type="text" className="form-control form-control-sm" id="notice-number" required placeholder="Type Notice No"
                                    name='noticeNo'
                                    onChange={handleChange}
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="notice-title">Notice Title</label>
                                <input type="text" className="form-control form-control-sm" id="notice-title" placeholder="Type The Main Title of Notice" required
                                name='title'
                                onChange={handleChange}
                                defaultValue=""
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label for="short-title">Short Title</label>
                                <input type="text" className="form-control form-control-sm" id="short-title" required placeholder="Type a Short Title"
                                name='shortTitle'
                                onChange={handleChange}
                                defaultValue=""
                                />
                              </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="inputBatch">Batch</label>
                            <select id="inputBatch" className="form-control form-control-sm"
                            name='batchName'
                            onChange={handleChange}
                            >
                                <option selected>Choose...</option>
                                <option>ALL BATCH</option>
                                <option>ICE 4th BATCH</option>
                                <option>ICE 5th BATCH</option>
                                <option>ICE 6th BATCH</option>
                                <option>ICE 7th BATCH</option>
                                <option>ICE 8th BATCH</option>
                                <option>ICE 9th BATCH</option>
                            </select>
                        </div>
                            <div className="form-group col-md-6">
                            <label for="lastdate">Last Date</label>
                            <input className="form-control form-control-sm" type="date" name="date" onChange={handleChange} id="" />
                        </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-12 text-center">
                                <button type="submit"  className=" btn btn-info w-50">Upload Notice </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpcomingNotice;