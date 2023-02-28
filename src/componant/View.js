import React, { useContext, useEffect, useState } from 'react'
import ContentDb from './db/ContentDb';

export default function View({ items, index }) {

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
        setInputData({ id: items.id,
            name: items.name, 
            department: items.department,
            age: items.age, 
            contact: items.contact, 
            email: items.email });

    }, [items])

    

    

    return (
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" >
                <div class="modal-content" style={{ backgroundColor: 'aliceblue' }}  >
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">View Data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form >
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> ID</label>
                                <input type="text" name='id' readOnly value={inputData.id} class="form-control" id="exampleFormControlInput1" placeholder="Enter You ID"  />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"  class="form-label"> Name</label>
                                <input type="text" name='name' readOnly value={inputData.name} class="form-control" id="exampleFormControlInput1" placeholder="Enter You Name"  />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Department</label>
                                <input type="text" name='department' readOnly value={inputData.department} class="form-control" id="exampleFormControlInput1" placeholder="Enter You Department" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> Age</label>
                                <input type="text" name='age' readOnly value={inputData.age} class="form-control" id="exampleFormControlInput1" placeholder="Enter You age"  />
                            </div>                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label"> email</label>
                                <input type="text" name='email' readOnly value={inputData.email} class="form-control" id="exampleFormControlInput1" placeholder="Enter You email"  />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contact</label>
                                <input type="text" name='contact' readOnly value={inputData.contact} class="form-control" id="exampleFormControlInput1" placeholder="Enter You Contact"  />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}
