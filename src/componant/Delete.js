import React, { useContext } from 'react'
import ContentDb from './db/ContentDb';

export default function Delete({deleteData}) {
    const { mycuststomer, setMycustomer } = useContext(ContentDb);


   
    return (
        <div class="modal fade" style={{ color: 'black' }} id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Data</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Are You Sure
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={deleteData}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
