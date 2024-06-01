import React from 'react';
import { useFormik } from 'formik';

const ValidationData = (props)=>{
    const errors = {
        Name : '',
        Price: '',
        Code: ''
    }
        if(!props.Name)
            {
                errors.Name = "Product Name is Required."
            }
        if(!props.Price){
            errors.Price="Price is Required."
        }
        if(!props.Code){
            errors.Code="Code is  Required."

        }else if(!/[A-Z]{3}[0-9]{2}/.test(props.Code)){
            errors.Code = "Invalid Code";
        }
        return errors;
        

}
const FormValidation =props=>{
   
    const formik = useFormik({
        
        initialValues: {
            Name : '',
            Price : '',
            Code : ''
        },

        validate: ValidationData,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return(

        <>
           <div className='container-fluid'>
           <h2>Register Product</h2>
            <form onSubmit={formik.handleSubmit}>
                <tr>
                    <dt>Name</dt>
                    <dd><input type='text' className='form-control' name='Name' value={formik.values.Name} onBlur={formik.handleBlur} onChange={formik.handleChange}></input></dd>
                    <dd className='text-danger'>{(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}</dd>
                    <dt>Price</dt>
                    <dd><input type='text' name='Price' className='form-control' value={formik.values.Price} onBlur={formik.handleBlur} onChange={formik.handleChange}></input></dd>
                    <dd className='text-danger'>{(formik.touched.Price && formik.errors.Price)?formik.errors.Price:null}</dd>
                    <dt>Code</dt>
                    <dd><input type='text' name='Code' className='form-control' value={formik.values.Code} onBlur={formik.handleBlur} onChange={formik.handleChange}></input></dd>
                    <dd className='text-danger'>{(formik.touched.Code && formik.errors.Code)?formik.errors.Code:null}</dd>

                </tr>
                <div className="d-grid">
                        <button className='btn btn-primary'>Register</button>
                </div>
            </form>
           </div>

        </>
    )

    
}
export default FormValidation;
