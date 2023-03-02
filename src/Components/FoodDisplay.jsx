import axios from "axios";
import { useState, useEffect, React } from "react";
import "./card.scss"
import Nbar from './Navbar.jsx'
//import { withAlert } from 'react-alert'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';  
import Card from "react-bootstrap/Card";


function FoodDisplay() {
   const [data, setData] = useState([]);
  useEffect(() => {
    axios
      //.get("https://flora-host.herokuapp.com/fetch")
      .get("http://localhost:5001/fetch")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <>
      <Nbar />
      <br></br>
      <div className="wrapper" >
        {
          data.map((singleData) => {
            const base64data = singleData.image;
            console.log("image's binary value : ", base64data)

            return <>
              <div >
                <Cards
                  img={singleData.image}
                  title={singleData.foodName}
                  description={singleData.desc}
                  price={singleData.price}
                />
              </div>
            </>
          })
        }
      </div>
    </>
  );
}

function Cards(props) {
   const notify = () => toast("hi");
  return (
    <>
      {/* <div className="card" >
        <div className="card__body">
          <img src={props.img} alt="plant_image" class="card__image" />
          <div>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__btn1">Rs:{props.price}/-</p>
          </div>
          <p className="card__description" style={{ height: "50px" }}>{props.description}</p>
        </div>
        <a href="/AddedtoCart"> <button className="card__btn" onClick={notify}>Order Now</button></a>
  </div> */}
  
     <div className="card__body" >
         <Card style={{ width: '18rem' }} className="card_body">
         <Card.Img variant="top" src={props.img}  class="card_image" style={{ height: "250px" }}/>
         <Card.Body>
          <Card.Title className="card__title" >{props.title}</Card.Title>
          <Button variant="secondary"> {` $${props.price}`}/-</Button> 
          <Button variant="danger" className="card__btn"  value="remove" onClick={notify} style={{justifyContent:"center",textAlign:"center"}}>Order Now</Button>
          </Card.Body>
          </Card>

    </div>
    </>
  );
}

export default FoodDisplay


// import axios from "axios";
// import { useState, useEffect, React } from "react";
// import "./card.scss"
// import Nbar from './Navbar.jsx'
// //import { withAlert } from 'react-alert'
// // import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';  
// import Card from "react-bootstrap/Card";


// function FoodDisplay() {
//    const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       //.get("https://flora-host.herokuapp.com/fetch")
//       .get("http://localhost:5001/fetch")
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err, "it has an error"));
//   });
//   return (
//     <>
//       <Nbar />
//       <br></br>
//       <div className="wrapper" >
//         {
//           data.map((singleData) => {
//             const base64data = singleData.image;
//             console.log("image's binary value : ", base64data)

//             return <>
//               <div >
//                 <Cards
//                   img={singleData.image}
//                   title={singleData.foodName}
//                   description={singleData.desc}
//                   price={singleData.price}
//                 />
//               </div>
//             </>
//           })
//         }
//       </div>
//     </>
//   );
// }

// function Cards(props) {
//   const clickHandler = (e) => {
//     let items = props.items.slice();
//     items.map( (item) => {
//       if(item.id === e.id){
//         item.selected = !item.selected;
//       }
//       return item;
//     })
//     props.updateItems(items);
//   }
//   return (
//     <>
//       {/* <div className="card" >
//         <div className="card__body">
//           <img src={props.img} alt="plant_image" class="card__image" />
//           <div>
//             <h2 className="card__title">{props.title}</h2>
//             <p className="card__btn1">Rs:{props.price}/-</p>
//           </div>
//           <p className="card__description" style={{ height: "50px" }}>{props.description}</p>
//         </div>
//         <a href="/AddedtoCart"> <button className="card__btn" onClick={notify}>Order Now</button></a>
//   </div> */}
  
//      <div className="card__body" >
//          <Card style={{ width: '18rem' }} className="card_body">
//          <Card.Img variant="top" src={props.img}  class="card_image" style={{ height: "250px" }}/>
//          <Card.Body>
//           <Card.Title className="card__title" >{props.title}</Card.Title>
//           <Button variant="secondary"> {` $${props.price}`}/-</Button> 
//           <Button className="card__btn" bsStyle={props.selected? "success": "primary"} onClick={(e) => clickHandler(props)}>{props.selected? "REMOVE FROM CART": "ADD TO CART"}</Button>
//           </Card.Body>
//           </Card>

//     </div>
//     </>
//   );
// }

// export default FoodDisplay