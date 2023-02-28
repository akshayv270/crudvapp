import React, { useContext, useState } from 'react'
import ContentDb from './db/ContentDb';
import Edit from './Edit';
import Table from './Table';
import View from './View';

export default function Home() {
    const { mycuststomer, setMycustomer } = useContext(ContentDb);

    const [inx, setIndex] = useState();


    const [items, setItems] = useState({})
    return (

        
        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Age</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
        </thead>
       
            <Table currentSetItem={setItems} setIndex={setIndex} />
            <Edit items={items} index={inx} />

            <View items={items} index={inx} />
        </table>
    )
}
