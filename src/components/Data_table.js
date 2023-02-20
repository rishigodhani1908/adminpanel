import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { BsFillTrashFill } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import './style.css';
function Data_table() {

  const [get, setget] = useState([]);
  useEffect(() => {
    axios.post('http://localhost/php/php/adminform.php')
      .then(function (response) {
        console.log(response.data);
        setget(response.data);
      })
      .catch(function (error) {
        console.log(error);

      });
  }, [])
  const del = (id) => {
    axios.post('http://localhost/php/php/deletedata.php', { id })
      .then(function (response) {
        console.log(response);
        window.location.reload(true);

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const handleEdit = (id) => {
   
    get.map((i, j) => {
   
      if (i.id == id) {
        Document.getElementById("eh1" + j).style.display = "none";
        Document.getElementById("p1" + j).style.display = "none";
        Document.getElementById("p2" + j).style.display = "none";
        Document.getElementById("editn" + j).style.display = "block";
        Document.getElementById("editd" + j).style.display = "block";
        Document.getElementById("edite" + j).style.display = "block";
        alert("hi")
      }
      else {
        Document.getElementById("eh1" + j).style.display = "block";
        Document.getElementById("p1" + j).style.display = "block";
        Document.getElementById("p2" + j).style.display = "block";
        Document.getElementById("editn" + j).style.display = "none";
        Document.getElementById("editd" + j).style.display = "none";
        Document.getElementById("edite" + j).style.display = "none";
      }
    })
  }
  const handleConfirm = (id) => {
   
    get.map((i, j) => {
      if (i.id == id) {
        axios.post("http://localhost/php/php/updatedata.php", {
          "id": id,
          "name": document.getElementById('editn' + j).value,
          "discription": document.getElementById('editd' + j).value,
          "email": document.getElementById('edite' + j).value,
          // "img": ""
        })
          .then(function (fetch) {
            window.location.reload()
          })
      }
    })
  }
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-1">
              <div className="col-sm-6">
                <h1>DataTables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>  
              </div>  
            </div>  
          </div>  
        </section> 
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>name</th>
                          <th>email</th>  
                          <th>discription</th>
                          <th>status</th>
                          <th>img</th>
                          <th>delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          get.map((k, j) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    {k.id}
                                    {/* <button onClick={() => { handleEdit(k.id) }} className=" bton border-danger bg-danger">Edit</button>
                                    <button onClick={() => { handleConfirm(k.id) }} className=' bton border-danger'>confirm</button> */}
                                  </td>
                                  <td>
                                    <h4 id={"eh1" + j}>{k.name}</h4>

                                    <input type="text" defaultValue={k.name} style={{ display: "" }} id={"editn" + j}></input>

                                    <button onClick={() => { handleEdit(k.id) }} className=" bton border-danger bg-danger">Edit</button>
                                    <button onClick={() => { handleConfirm(k.id) }} className=' bton border-danger'>confirm</button>
                                  </td>
                                  <td>
                                    <p id={"p2" + j}>{k.email}</p>
                                    <input type="text" defaultValue={k.email} style={{ display: "" }} id={"edite" + j}></input>

                                  </td>
                                  <td>
                                    <p id={"p1" + j}>{k.discription}</p>
                                    <textarea defaultValue={k.discription} style={{ display: "" }} id={"editd" + j} />
                                  </td>

                                  <td> {k.status}
                                  <label className="switch">
                                      {/* <input type="checkbox" onChange={(j)=>{handlswitch(j.target.checked.k.id)}} id={"s"+j}/> */}
                                      {/* <span className="slider round " htmlFor={"s"+j}></span> */}
                                        
                                    </label>
                                  </td>
                                  <td><img src={k.img} className="img_view_table" /></td>
                                  <td>
                                    <button className="border-danger bg-danger" onClick={() => del(k.id)}><BsFillTrashFill /></button>
                                    </td>
                                  {/* <td><button className="border-primary bg-primary">update</button></td> */}
                               
                                </tr>
                               
                              </>
                            )
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div >

      <Footer />
    </>
  )
}
export default Data_table