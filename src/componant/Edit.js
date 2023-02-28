import React, { useContext, useEffect, useState } from 'react'
import ContentDb from './db/ContentDb';
import { customers } from './db/Db';

export default function Edit({ items, index }) {

    const { mycuststomer, setMycustomer } = useContext(ContentDb);

    const [inputData, setInputData] = useState({
        id: '',
        name: '',
        department: '',
        age: '',
        email: '',
        contact: ''
    })
    useEffect(() => {
        setInputData({ id: items.id,name: items.name, department: items.department,age: items.age, contact: items.contact, email: items.email });

    }, [items])

    

    const InpHan = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    }
    const submitData = (e) => {
        e.preventDefault();

        let edit = [...mycuststomer];
        edit[index] = inputData;
        console.log(edit[index]);
        setMycustomer(edit);
    }

    
    return (
        <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style={{ backgroundColor: 'aliceblue' }} >
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Update Data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={submitData}>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your ID</label>
                                <input type="text" name='id' value={inputData.id} class="form-control" id="exampleFormControlInput1" placeholder="Enter You ID" onChange={InpHan} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
                                <input type="text" name='name' value={inputData.name} class="form-control" id="exampleFormControlInput1" placeholder="Enter You Name" onChange={InpHan} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your Department</label>
                                <input type="text" name='department' value={inputData.department} class="form-control" id="exampleFormControlInput1" placeholder="Enter You Department" onChange={InpHan} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your Age</label>
                                <input type="text" name='age' value={inputData.age} class="form-control" id="exampleFormControlInput1" placeholder="Enter You age" onChange={InpHan} />
                            </div>                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your email</label>
                                <input type="text" name='email' value={inputData.email} class="form-control" id="exampleFormControlInput1" placeholder="Enter You email" onChange={InpHan} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Enter Your Contact</label>
                                <input type="text" name='contact' value={inputData.contact} class="form-control" id="exampleFormControlInput1" placeholder="Enter You Contact" onChange={InpHan} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
