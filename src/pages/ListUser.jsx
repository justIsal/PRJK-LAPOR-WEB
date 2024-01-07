import React,{ useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Appshell} from '../components/Appshell';
import Header from '../components/Header';
import { UsersIcon } from '@heroicons/react/24/solid';
import Tables from '../components/Table';
import axios from "axios";

const ListUser = ()=> {
    const [users, setUsers] = useState([])
    const getData = async()=> {
        try{
            const req = await axios.get('http://localhost:5174/user');
            setUsers(req.data);
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=> {
        getData();
    },[]);
    const columns = [
        {
         name: "namaLengkap",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "email",
         label: "Email",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "jenisKelamin",
         label: "Jenis kelamin",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "noHp",
         label: "NO Hp",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];
       
    //    const data = [
    //     { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    //     { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    //     { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    //     { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    //    ];
    return(
        <Appshell>
            <Header 
                title="List User"
                icon={ <UsersIcon className="h-4 w-auto" /> }
            />
            <Tables 
                data={users}
                columns={columns}
                title={'List users'}
            />
        </Appshell>
    )
}
export default ListUser;