import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

const Table_employee = () => {
    return (
        <div style={{margin:'0.5rem'}}>
            <h2 style={{color: '#707070', fontWeight: 'bolder'}}>Employee</h2>
            <StyledDataGrid
                rows={mergedEmployees}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
            />
        </div>
    )
}

export default Table_employee;

const employees = [
    { id: 1, name: 'Alice', type: 2 },
    { id: 2, name: 'Bob', type: 3 },
    { id: 3, name: 'John', type: 2 },
    { id: 4, name: 'Karen', type: 1 },
    { id: 5, name: 'Miles', type: 3 },
    { id: 6, name: 'Henry', type: 1 },
]

const employeeType = [
    { id: 1, name: 'FullTime', work_begin: '09:00:00', work_end: '17:00:00' },
    { id: 2, name: 'MidTime', work_begin: '12:00:00', work_end: '21:00:00' },
    { id: 3, name: 'HalfTime', work_begin: '20:00:00', work_end: '00:00:00' },
]

// 資料合併(當employeeType的id與employees的type值有對應時合併)
const mergedEmployees = employees.map( data => { 
    // console.log('employee', data)
    const typeInfo = employeeType.find( type => type.id === data.type);
    // console.log('typeInfo', typeInfo)
    return {
        ...data,
        workType: typeInfo && typeInfo.name,
        work_begin: typeInfo && typeInfo.work_begin,
        work_end: typeInfo && typeInfo.work_end,
    };
});


const columns = [
    { field: 'name', headerName: 'Name', headerAlign: 'center', flex: 1, 
    },
    { field: 'workType', 
        headerName: 'Work Type', 
        headerAlign: 'center', 
        flex: 1, 
    },
    {
        field: 'work_begin',
        headerName: 'Start time',
        headerAlign: 'center',
        flex: 1,
    },
    {
        field: 'work_end',
        headerName: 'End time',
        headerAlign: 'center',
        flex: 1,
    },
];

const StyledDataGrid = styled(DataGrid)({
    '& .MuiDataGrid-root': {
        backgroundColor: '#FFF',
    },
    '& .MuiDataGrid-columnHeaders': {
        color: '#a1a1a1',
    },
    '& .MuiDataGrid-row.Mui-selected': {
        backgroundColor: '#EFF5FF',
    },
    '& .MuiDataGrid-row:hover': {
        backgroundColor: '#EEEEEE',
    },
    
    '& .MuiDataGrid-cell': {
        textAlign: 'center',
    },
});