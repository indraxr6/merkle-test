import React, { useState } from 'react';
import { Header } from '../components'
import helper from '../helpers';
import Swal from 'sweetalert2';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Home() {
     const [data, setData] = useState([]);
     const [currentPage, setCurrentPage] = useState(1);
     const [itemsPerPage] = useState(5);
     const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
     const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

     const paginate = (pageNumber) => setCurrentPage(pageNumber);

     const getAllData = () => {
          fetch('https://fakestoreapi.com/users').then(res => res.json()).then(json => setData(json));
     }

     const showDetails = (item) => {
          Swal.fire({
               title: `${item.name.firstname} ${item.name.lastname}`,
               html: `
              <p>Username: ${item.username}</p>
              <p>Email: ${item.email}</p>
              <p>Password: ${item.password}</p>
              <p>City: ${item.address.city}</p>
              <p>Street: ${item.address.street}</p>
              <p>Number: ${item.address.number}</p>
              <p>Zipcode: ${item.address.zipcode}</p>
              <p>Latitude: ${item.address.geolocation.lat}</p>
              <p>Longitude: ${item.address.geolocation.long}</p>
              <p>Phone: ${item.phone}</p>
            `,
               confirmButtonText: 'OK'
          })
     }

     const deleteRecord = (id) => {
          const updatedData = data.filter(item => item.id !== id);
          setData(updatedData);
          Swal.fire({
               title: 'Record Deleted',
               text: 'The record has been deleted successfully.',
               type: 'success'
          });
     }

     return (
          <>
               <Header />
               <div className='p-5 text-center'>
                    <h1 className='mb-3'>EMPLOYEE DATA LIST</h1>
                    <h4 className='mb-3'></h4>
                    <button onClick={() => getAllData()} className='btn btn-primary' href='' role='button'>
                         Get All Data
                    </button>
               </div>
               <MDBTable>
                    <MDBTableHead>
                         <tr>
                              <th scope='col'>ID</th>
                              <th scope='col'>Name</th>
                              <th scope='col'>Username</th>
                              <th scope='col'>E-mail</th>
                              <th scope='col'>Password</th>
                              <th scope='col'>Actions</th>
                         </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                         {currentItems.map((item, index) => (
                              <tr key={index}>
                                   <td>
                                        <p className='text-muted mb-2'>{item.id}</p>
                                   </td>
                                   <td>
                                        
                                        <div className='d-flex align-items-center'>
                                             <div className='ms-3'>
                                                  <p className='fw-bold mb-1'>{item.name.firstname} {item.name.lastname}</p>
                                             </div>
                                        </div>
                                   </td>
                                   <td>
                                        <p className='fw-normal mb-1'>{item.username}</p>
                                   </td>
                                   <td>
                                        <p className='text-muted mb-0'>{item.email}</p>
                                   </td>
                                   <td>{item.password}</td>
                                   <td>
                                        <div>
                                             <MDBBtn color='link' rounded size='sm' onClick={() => showDetails(item)}>Detail</MDBBtn>
                                             <MDBBtn color='link' rounded size='sm' onClick={() => helper.addRecord()}>Edit</MDBBtn>
                                             <MDBBtn color='link' rounded size='sm' onClick={() => deleteRecord(item.id)}>Delete</MDBBtn>
                                        </div>
                                   </td>
                              </tr>
                         ))}
                    </MDBTableBody>
               </MDBTable>
               <div className='d-flex justify-content-center'>
                    <button onClick={() => paginate(1)} className='btn btn-primary' role='button'>1</button>
                    <button onClick={() => paginate(2)} className='btn btn-primary' role='button'>2</button>
               </div>
          </>

     );
}


export default Home