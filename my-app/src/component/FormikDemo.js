import React from 'react';
import {useFormik} from 'formik';

const FormikComponent = () =>
    {
        const formik = useFormik(
            {
                initialValues: {
                    ProductId: '',
                    Name: '',
                    Price: ''
                },
                onSubmit: values =>{
                    document.write(`
                        <h1>Product Details</h1>
                        <table border='1' width='400px'>
                            <tr>
                                <th>Product ID</th>
                                <td>${values.ProductId}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>${values.Name}</td>
                            </tr>
                            <tr>
                                <th>Price</th>
                                <td>${values.Price}</td>
                            </tr>
                        </table>`
                       


                    );
                }
            }
        )
        return(
            <>
                <div className='container'>
                    <h1>Enter  Details for  Registration.</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <dl>

                            <dt>Product ID</dt>
                            <dd><input type='text' name='ProductId' value={formik.values.ProductId} onChange={formik.handleChange}></input></dd>
                            <dt>Name</dt>
                            <dd><input type='text'name='Name' value={formik.values.Name} onChange={formik.handleChange}></input></dd>
                            <dt>Price</dt>
                            <dd><input type='text'name='Price' value={formik.values.Price} onChange={formik.handleChange}></input></dd>

                        </dl>
                        <button>Register </button>
                    </form>
                </div>

            </>
        )
    }
export default FormikComponent;