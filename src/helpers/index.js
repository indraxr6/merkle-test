import Swal from "sweetalert2";

function capitalize(name) {
     return name.replace(/^./, name[0].toUpperCase())
}


const addRecord = () => {
     Swal.fire({
       title: 'Add New Record',
       html: `
         <input id="firstname" class="swal2-input" placeholder="First Name">
         <input id="lastname" class="swal2-input" placeholder="Last Name">
         <input id="username" class="swal2-input" placeholder="Username">
         <input id="email" class="swal2-input" placeholder="Email">
         <input id="password" class="swal2-input" placeholder="Password">
         <input id="city" class="swal2-input" placeholder="City">
         <input id="street" class="swal2-input" placeholder="Street">
         <input id="number" class="swal2-input" placeholder="Number">
         <input id="zipcode" class="swal2-input" placeholder="Zipcode">
         <input id="latitude" class="swal2-input" placeholder="Latitude">
         <input id="longitude" class="swal2-input" placeholder="Long
         <input id="phone" class="swal2-input" placeholder="Phone">
       `,
       showCancelButton: true,
       confirmButtonText: 'Save',
       preConfirm: () => {
         const firstname = document.getElementById('firstname').value;
         const lastname = document.getElementById('lastname').value;
         const username = document.getElementById('username').value;
         const email = document.getElementById('email').value;
         const password = document.getElementById('password').value;
         const city = document.getElementById('city').value;
         const street = document.getElementById('street').value;
         const number = document.getElementById('number').value;
         const zipcode = document.getElementById('zipcode').value;
         const latitude = document.getElementById('latitude').value;
         const longitude = document.getElementById('longitude').value;
         const phone = document.getElementById('phone').value;
 
         const newRecord = {
           name: {
             firstname: firstname,
             lastname: lastname
           },
           username: username,
           email: email,
           password: password,
           address: {
             city: city,
             street: street,
             number: number,
             zipcode: zipcode,
             geolocation: {
               lat: latitude,
               long: longitude
             }
           },
           phone: phone
         };
         Swal.fire({
           title: 'Record Added',
           text: 'The new record has been added successfully.',
           type: 'success'
         });
       }
     });
   }

   const helper = { capitalize, addRecord }


export default helper