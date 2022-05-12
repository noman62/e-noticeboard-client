import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Screen from '../Screen/Screen';

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
              <h5 class="text-uppercase text-left">Noakhali Science and Technology University</h5>
              <h5 class="text-uppercase text-left">Department of Information and Communication Enginerring</h5>
            </div>


          </div>
          <div class="col-md-4">
            <h2 class=" e-notice p-3">E-NOTICE BOARD</h2>
          </div>
        </div>









        <div class="row">
          <div class="col-md-2 ">
            <ul class="notice mt-1">
            <h4>Latest news</h4>
            {
              notices.map(latest=>{
                return(
                  <div>
                 
              <li>{latest.title}</li>
          
                  </div>
                )
              })
            }
            </ul>
            <ul class="notice mt-2">
              <h4>Latest news</h4>

              {
              notices.map(latest=>{
                return(
                  <div>
                 
              <li>{latest.title}</li>
          
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
            <h4 class="marquee-heading ">Images of ICE </h4>
            <div class="marqueeTwo">

              <ul class="marqueeTwo-content text-center">
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
                <li><img src="https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-sm-12">

          </div>
        </div>






        <footer>

          <div class="row marquee" >
            <div class="col-2 top-notice ">
              <h5 class="text-center pt-1">Top Notice</h5>
            </div>
            <div class="col-10">
              <marquee class="h6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, cupiditate dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora optio autem repellendus magni provident quam praesentium cupiditate voluptate error sunt!
              </marquee>
            </div>
          </div>

        </footer>




      </div>
    </div>
  );
};

export default Homepage;