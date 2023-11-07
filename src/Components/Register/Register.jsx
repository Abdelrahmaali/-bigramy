import React from 'react'
import { useFormik } from 'formik';
import logo from '../../Assets/Images/main-logo.svg';
import bg from '../../Assets/Images/register.webp';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './Register.module.css';





export default function Register() {

  function handleRegister(values) {
    // axios.post( cant get the api docmuntion )
    console.log(values);
  }

  let validate = Yup.object({
    name: Yup.string().required('name is requird').min(3, ' min length is 3 characters').max(10, 'max length is 10 characters'),
    email: Yup.string().required('email is requird').email('email is invalid'),
    password: Yup.string().required('password is requird').matches(/^[A-Z][a-z0-9]{5,10}$/, 'password must start with uppercase and min lengh 5'),
    rePassword: Yup.string().required(' requird').oneOf([Yup.ref('password')], 'dont match'),
    phone: Yup.string().required('phone is requird').matches(/^01[0125][0-9]{8}$/, 'phone must be valid'),

  });

  let formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      rePassword: ''
    },
    validationSchema: validate,
    onSubmit: handleRegister
  });
  return (
    <>
      <div className="container">
        <div className="header d-flex justify-content-center py-3">
          <img src={logo} alt="" className=' img-fluid' />
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">

            <img src={bg} alt="" className=' img-fluid' />

          </div>


          <div className="col-md-6">
            <div >
              <h2>Register Now:</h2>


              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input className=' form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" name='name' id='name' />

                {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}




                <label htmlFor="phone">phone</label>
                <input className=' form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type='tel' name='phone' id='phone' />
                {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger">{formik.errors.phone}</div> : null}


                <label htmlFor="email">email</label>
                <input className=' form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type='email' name='email' id='email' />
                {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : null}

                <label htmlFor="password">password</label>
                <input className=' form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type='password' name='password' id='password' />
                {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : null}


                <label htmlFor="rePassword">rePassword</label>
                <input className=' form-control mb-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type='password' name='rePassword' id='rePassword' />
                {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger">{formik.errors.rePassword}</div> : null}



                <button disabled={!(formik.isValid && formik.dirty) } type='sumbit' className=' btn bgmain text-white'>Register</button>


              </form>


            </div>
          </div>
        </div>

      </div>


    </>
  )
}
