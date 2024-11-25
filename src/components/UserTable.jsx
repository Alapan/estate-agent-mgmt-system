import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { StyledTableCell, StyledTableRow } from '../utils';

const UserTable = ({ users }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650 }} aria-label='Table to show seller info'>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
              <StyledTableCell component='th' scope='row'>
                {user.id}
              </StyledTableCell>
              <StyledTableCell align='left'>{user.firstName}</StyledTableCell>
              <StyledTableCell align='left'>{user.lastName}</StyledTableCell>
              <StyledTableCell align='left'>{user.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
