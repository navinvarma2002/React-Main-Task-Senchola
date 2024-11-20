
import React from "react";
import TourCard from "./comp1";
import "./styles.css";

const App = () => {
  const tours = [
    {
      image: "https://plus.unsplash.com/premium_photo-1661951189203-12decb9d7f8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "China",
      subtitle: "China city Tour",
    },
    {
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Paris",
      subtitle: "Paris Lights Tour",
    },
    {
      image: "https://images.unsplash.com/photo-1505441213084-5a6287bd2042?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "London",
      subtitle: "London Royal Palace Tour",
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1723921344875-8f2a7a5343eb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tokyo",
      subtitle: "Tokyo Sushi Tour",
    },
  ];

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#" style={{marginLeft:"30px"}}>
          Nv Paradise
        </a>
        <div className="collapse-navbar-collapse" >
          <div style={{Diaplay:"flex",marginLeft:"30%"}} className="smalldisplay">
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tours
              </a>
            </li>
          </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <div className="row">
          {tours.map((tour, index) => (
            <div className="col-md-3" key={index}>

              <TourCard  image={tour.image}
                title={tour.title}
                subtitle={tour.subtitle}/>
             
                         
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
