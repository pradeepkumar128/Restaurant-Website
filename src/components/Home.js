import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Fooddata from "./data";

const Home = () => {
  const [menu, setMenu] = useState(Fooddata);

  const filteritems = (curitems)=>{
     const updateitems = Fooddata.filter((cur,ind)=>{
          return cur.category === curitems
     });
     setMenu(updateitems)
  }

  return (
    <>
      <section className="container mt-2">
        <h2 className="text-center mb-2 mt-5" style={{ fontWeight: 700 }}>
          Search Your Food
        </h2>
        <hr/>
        <div className="btn-container d-flex justify-content-around mt-5">
          <Button variant="primary" onClick={()=>filteritems("punjabi")}>Punjabi</Button>
          <Button variant="success" onClick={()=>filteritems("vadapav")}>Vadapav</Button>
          <Button variant="danger" onClick={()=>filteritems("Pizza")}>Pizza</Button>
          <Button variant="warning" onClick={()=>filteritems("Chai")}>Chai</Button>
          <Button variant="danger" onClick={()=>filteritems("Frankie")}>Franki</Button>
          <Button variant="primary" onClick={()=>setMenu(Fooddata)}>All</Button>
        </div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-around align-items-center">
            {menu.map((el, ind) => {
              return (
                <>
                  <Card style={{ width: "22rem", border:'none'}} className="mx-2 mt-4 card-shadow">
                    <Card.Img variant="top" src={el.imgdata} className="mt-3 card-image" />
                    <Card.Body>
                      <Card.Title>{el.rname}</Card.Title>
                      <Card.Text>
                       Price : {el.price}
                      </Card.Text>
                      <Button variant="primary">Add To Cart +</Button>
                    </Card.Body>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
