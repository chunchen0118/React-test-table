import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

const Table_task = () => {
    return (
        <div style={{margin:'0.5rem'}}>
            <h2 style={{color: '#707070', fontWeight: 'bolder'}}>Task</h2>
            <StyledDataGrid
                rows={tasks}
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

export default Table_task;

const tasks = [
    { id: 1, title: 'task01', duration: 60 }, // min
    { id: 2, title: 'task02', duration: 120 },
    { id: 3, title: 'task03', duration: 180 },
    { id: 4, title: 'task04', duration: 360 },
    { id: 5, title: 'task05', duration: 30 },
    { id: 6, title: 'task06', duration: 220 },
    { id: 7, title: 'task07', duration: 640 },
    { id: 8, title: 'task08', duration: 250 },
    { id: 9, title: 'task09', duration: 119 },
    { id: 10, title: 'task10', duration: 560 },
    { id: 11, title: 'task11', duration: 340 },
    { id: 12, title: 'task12', duration: 45 },
    { id: 13, title: 'task13', duration: 86 },
    { id: 14, title: 'task14', duration: 480 },
    { id: 15, title: 'task15', duration: 900 },
]

const columns = [
    { field: 'title', headerName: 'Title', headerAlign: 'center', flex: 1, 
        renderCell: (params) => <div style={{ textAlign: 'center', width: '100%' }}>{params.value}</div> 
    },
    { field: 'duration', 
        headerName: 'Duration', 
        headerAlign: 'center', 
        flex: 1, 
        renderCell: (params) => <div style={{ textAlign: 'center', width: '100%' }}>{params.value}</div> 
    },
    {
        field: 'work_begin',
        headerName: 'Assign',
        headerAlign: 'center',
        type: 'number',
        flex: 1,
        renderCell: (params) => <div style={{ textAlign: 'center', width: '100%' }}>{params.value}</div> 
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