import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

import { StyledTableCell, StyledTableRow } from '../utils';
import './styles/PropertyTable.css';

const PropertyTable = ({ properties, updateProperties }) => {

  const handleWithdraw = (property) => {
    if (property.status === 'FORSALE') {
      fetch(`http://localhost:8000/properties/${property.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...property,
          status: 'WITHDRAWN'
        })
      }).then(updateProperties);
    }
  };

  const handleResubmit = (property) => {
    if (property.status === 'WITHDRAWN') {
      fetch(`http://localhost:8000/properties/${property.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...property,
          status: 'FORSALE'
        })
      }).then(updateProperties);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650 }} aria-label='Table to show seller info'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Garden</StyledTableCell>
            <StyledTableCell>Number of Bedrooms</StyledTableCell>
            <StyledTableCell>Number of Bathrooms</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Allowed Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {properties.map((property) => (
            <StyledTableRow key={property.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
              <StyledTableCell component='th' scope='row'>
                {property.address}
              </StyledTableCell>
              <StyledTableCell align='left'>{property.price}</StyledTableCell>
              <StyledTableCell align='left'>{property.hasGarden ? 'Yes': 'No'}</StyledTableCell>
              <StyledTableCell align='left'>{property.numberOfBedrooms}</StyledTableCell>
              <StyledTableCell align='left'>{property.numberOfBathrooms}</StyledTableCell>
              <StyledTableCell align='left'>{property.status}</StyledTableCell>
              <StyledTableCell align='left'>
                {property.status === 'FORSALE' ? (
                  <button
                    className='property-table-btn'
                    onClick={() => handleWithdraw(property)}
                  >Withdraw</button>
                ): (
                  property.status === 'WITHDRAWN' ? (
                    <button
                      className='property-table-btn'
                      onClick={() => handleResubmit(property)}
                    >Resubmit</button>
                  ) : null
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )  
};

export default PropertyTable;
