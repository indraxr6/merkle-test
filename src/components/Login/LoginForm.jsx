import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function LoginForm({ handleChange, username, password, login }) {
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput
                name='username'
                value={username}
                onChange={handleChange('username')}
                onKeyDown={handleChange()}
                wrapperClass='mb-4 w-100'
                label='Email address'
                id='formControlLg'
                type='email' size="lg" />

              <MDBInput
                name='password'
                value={password}
                onChange={handleChange('password')}
                onKeyDown={handleChange()}
                wrapperClass='mb-4 w-100'
                label='Password'
                id='formControlLg'
                type='password'
                size="lg" />

              <hr className="my-4" />
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

              <MDBBtn onClick={() => login()} size='lg'>
                Login
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginForm;