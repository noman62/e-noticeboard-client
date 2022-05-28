import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Screen from '../Screen/Screen';
import UpcomingNotice from '../UpcomingNotice/UpcomingNotice';

const Homepage = () => {
  const [notices, setNotices] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    setNotices(data);
    console.log(data);

    console.log(notices);
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <div class="container-fluid all">
        <div class="row main-heading">
          <div class="col-md-8">
            <img class="nstu_logo p-2" src="image/Logo_of_Noakhali_Science_and_Technology_University.gif" alt="NSTU LOGO" />
            <div class="nstu">
              <h5 class="text-uppercase text-left font-weight-bolder">Noakhali Science and Technology University</h5>
              <h5 class="text-uppercase text-left font-weight-bolder">Department of Information and Communication Engineering</h5>
            </div>


          </div>
          <div class="col-md-4">
            <h2 class=" e-notice p-3">E-NOTICE BOARD</h2>
          </div>
        </div>









        <div class="row mt-3">
          <div class="col-md-2 ">
            <ul class="notice mt-1">
              <h4>Notice</h4>
              {
                notices.reverse().map(latest => {
                  return (
                    <div>

                      <li style={{fontSize:'13px'}}>{latest.title}</li>

                    </div>
                  )
                })
              }
            </ul>
            <ul class="notice mt-2">
              <h4>Upcoming Events</h4>

              {
                notices.reverse().map(latest => {
                  return (
                    <div>

                      <li style={{fontSize:'13px'}}>{latest.utitle}</li>

                    </div>
                  )
                })
              }
            </ul>

          </div>





















          <div class="col-md-8 p-1">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div class="carousel-inner">
                {
                  notices.map((notice, index) => <Screen index={index} notice={notice} />)
                }
              </div>
              <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
          <div class="col-md-2 mt-1 marquee-image">
            <h4 class="marquee-heading ">Achievements </h4>
            <div class="marqueeTwo">

              <ul class="marqueeTwo-content text-center">
                <li><img src="./image/ICE_1.jpeg" alt="" /></li>
                <li><img src="./image/ICE_2.jpeg" alt="" /></li>
                <li><img src="./image/ICE_4.jpeg " alt="" /></li>
                <li><img src="./image/ICE_5.jpeg " alt="" /></li>
                <li><img src="./image/ICE_6.jpeg " alt="" /></li>
                <li><img src=" ./image/ICE_7.jpeg" alt="" /></li>
                <li><img src="./image/ICE_8.jpeg " alt="" /></li>
                <li><img src="./image/ICE_9.jpeg " alt="" /></li>
                <li><img src="./image/ICE_10.jpeg" alt="" /></li>
                <li><img src="./image/ICE_11.jpeg" alt="" /></li>
                <li><img src="./image/ICE_12.jpeg" alt="" /></li>
                <li><img src="./image/ICE_13.jpg" alt="" /></li>
                <li><img src="./image/ICE_14.jpg" alt="" /></li>
                <li><img src="./image/ICE_15.jpg" alt="" /></li>
                <li><img src="./image/ICE_16.jpg" alt="" /></li>
                <li><img src="./image/ICE_17.jpg" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
        





        <footer>

          <div class="row marquee" >
            <div class="col-2 top-notice ">
              <h5 class="text-center pt-1">Top Notice</h5>
            </div>
            <div class="col-8">
              {
                notices.reverse().map((latest, index) => {
                  if (index === 0) {
                    return (
                      <div >

                        <marquee behavior="" direction="">{latest.shortTitle}</marquee>

                      </div>
                    )
                  }
                })
              }
            </div>
            <div class="col-2 top-time ">
              <p class="mb-0">
                <b>Time:</b> 11:32 <br/>
                <b>Date:</b> 11/11/22
                </p>
            </div>
          </div>

        </footer>




      </div>
    </div>
  );
};

export default Homepage;