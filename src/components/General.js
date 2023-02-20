import axios from "axios"
import { useState, useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { Link } from "react-router-dom";

const General = () => {
 const [name, setname] = useState("");
 const [email, setemail] = useState("");
 const [discription, setdiscription] = useState();
 const [status, setstatus] = useState();
 const [img, setimg] = useState();
 const [cnt, setcnt] = useState(0);



 const btnhandaler = () => {
  axios.post('http://localhost/php/php/adminform.php', { name: name, email: email, discription: discription, status: cnt, img: img })
   .then(function (response) {
    console.log(response.data);
    window.location.reload(false);
   })
   .catch(function (error) {
    console.log(error);
   });

 }
 const handlechangeName = (e) => {
  setname(e.target.value);
 }

 const handlechangeemail = (e) => {
  setemail(e.target.value);
 }

 const handlechangediscription = (e) => {
  setdiscription(e.target.value);
 }
 const handlechangestatus = (e) => {
  setstatus(e.target.value);
 }
 const handlechangeimg = (e) => {
  setimg(e.target.value);
 }
 return (
  <>
   <Header />
   <Sidebar />
   <div className="content-wrapper">
    <section className="content-header">
     <div className="container-fluid">
      <div className="row mb-2">
       <div className="col-sm-6">
        <h1>General Form</h1>
       </div>
       <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
         <li className="breadcrumb-item"><a href="#">Home</a></li>
         <li className="breadcrumb-item active">General Form</li>
        </ol>
       </div>
      </div>
     </div>
    </section>
    <section className="content ">
     <div className="container-fluid">
      <div className="row">
       <div className="col-md-6">
        <div className="card card-primary ">
         <div className="card-header ">
          <h3 className="card-title">FORM</h3>
         </div>
         <form>
          <div className="card-body">
           <div className="form-group">
            <label htmlFor="exampleInputName">Name</label>
            <input type="text" className="form-control" placeholder="Enter Name" onChange={(e) => { handlechangeName(e); }} />
           </div>
           {/* <div className="form-group">
            <label htmlFor="exampleInputName">email</label>
            <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => { handlechangeemail(e); }} />
           </div> */}
           <div className="form-group">
            <label htmlFor="exampleInputEmail1">discription</label>
            <input type="text" className="form-control" placeholder="discription" onChange={(e) => { handlechangediscription(e); }} />
           </div>
           <div className="form-group">
            <label>status</label><br></br>
            {/* <input type="text" className="form-control" placeholder="status" onChange={(e) => { handlechangestatus(e); }} /> */}
            {cnt}<br></br>
            <input type="button" onClick={() => setcnt(1)} value="+" onChange={(e) => { setcnt(e.target.value); }}></input>
            <input type="button" onClick={() => setcnt(0)} value="-" onChange={(e) => { setcnt(e.target.value); }}></input>
           </div>
           <div className="form-group">
            <label>Img</label>
            <div className="input-group">
             <div className="custom-file">
              <input type="text" onChange={(e) => { handlechangeimg(e); }} />
              <button>upload</button>
             </div>
             <div className="input-group-append">
              {/* <span className="input-group-text " htmlFor="exampleInputFile">brows online img</span> */}
             </div>
            </div>
           </div>
          </div>
          <div className="card-footer">
           {
            <Link to="/Data_table">
             <input type="submit" value="submit" onClick={btnhandaler}/>
            </Link>
           }
          </div>
         </form>
        </div>
       </div>
      </div>
     </div>
    </section>
   </div>
  </>
 )
}
export default General