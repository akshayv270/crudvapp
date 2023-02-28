import React, { useContext, useState } from 'react'
import Delete from './Delete';

import Edit from './Edit';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import ContentDb from './db/ContentDb';

export default function Table({ items, index, setIndex, currentSetItem }) {
    const { mycuststomer, setMycustomer } = useContext(ContentDb);

    const [dltIndex, setDltIndex] = useState(-1);

    const vfrmBox = (index) => {
        let d = { ...mycuststomer[index] };
        setIndex(index);
        currentSetItem(d);
    }

    const frmBox = (index) => {
        let d = { ...mycuststomer[index] };
        setIndex(index);
        currentSetItem(d);
    }

    const deleteData = () => {
        let d = [...mycuststomer];
        d.splice(dltIndex, 1);
        setMycustomer(d);
    }
    return (
        
        <tbody>
           
          {
            mycuststomer?.map((items,index)=>{
                return(
                    <tr key={index}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.department}</td>
                    <td>{items.age}</td>
                    <td>{items.email}</td>
                    <td>{items.contact}</td>
                    <td>

                    <button type="button" class="btn btn-info m-1" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => { vfrmBox(index) }}>
                    <FontAwesomeIcon icon={faEye} />
    
                        </button>

                        <button type="button" class="btn btn-info m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { frmBox(index) }}>
                        <FontAwesomeIcon icon={faEdit} />
    
                        </button>
                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => setDltIndex(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                          
                        </button>
                    </td>
                </tr>
                );
            })
          }
            <Delete deleteData={deleteData} />
        </tbody>
    )
}
