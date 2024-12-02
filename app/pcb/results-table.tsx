import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface ResultsTableProps {
    data: Map<number, number>;
}

function getFormattedData(data: any) {
    const data_arr = [];
    let defect_number = 1;
    for (const value of data.values()) {
        data_arr.push(
            {
                name: String('Defect ' + defect_number++),
                time: value
            }
        )
    }
    return data_arr;
}

export default function ResultsTable({data}: ResultsTableProps) {
  const tableData = getFormattedData(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Defect</TableCell>
            <TableCell>Time&nbsp;(seconds)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
