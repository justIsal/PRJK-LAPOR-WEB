import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles((theme) => ({
//     boxShadow: theme,
//   }));

const Tables = ({data,columns,title}) => {
    // const classes = useStyles();
    const options = { 
        filterType: 'checkbox',
        elevation: 0
    };

    return (
        <div className="my-10 bg-white shadow-md px-2 pt-2">
            <MUIDataTable
                title={title}
                data={data}
                columns={columns}
                options={options}
            />
        </div>
    );
};


export default Tables;
