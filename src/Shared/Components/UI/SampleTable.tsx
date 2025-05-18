import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';

function createData(
  title: string,
  status: 'Online' | 'Offline',
  users: number,
  eventCount: number,
  viewsPerUser: number,
  avgTime: string
) {
  return { title, status, users, eventCount, viewsPerUser, avgTime };
}

const allRows = [
  createData('Homepage Overview', 'Online', 212423, 8345, 18.5, '2m 15s'),
  createData('Product Details - Gadgets', 'Online', 172240, 5653, 9.7, '2m 30s'),
  createData('Checkout Process - Step 1', 'Offline', 58240, 3455, 15.2, '2m 10s'),
  createData('User Profile Dashboard', 'Online', 96240, 112543, 4.5, '2m 40s'),
  createData('Article Listing - Tech News', 'Offline', 142240, 3653, 3.1, '2m 55s'),
  // ...adicione mais linhas para testar a paginação
];

export const SampleTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const rows = allRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper
      sx={(theme) => ({
        background:
          theme.palette.mode === 'dark'
            ? 'transparent'
            : '#fff',
        borderRadius: 8,
        boxShadow: theme.palette.mode === 'dark' ? 0 : 1,
        mt: 2,
      })}
    >
      <TableContainer
        sx={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          overflow: 'hidden',
        }}
      >
        <Table
          size="small"
          aria-label="sample table"
          sx={(theme) => ({
            minWidth: 900,
            '& th, & td': { border: 0 },
            '& thead th': {
              color: theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
              fontWeight: 700,
              background: theme.palette.mode === 'dark'
                ? 'rgba(12,16,23,255)'
                : '#f4f6fb',
              fontSize: 14,
              letterSpacing: 0.5,
            },
            '& tbody td': {
              color: theme.palette.mode === 'dark' ? 'text.primary' : '#1a1a1a',
              fontSize: 14,
              borderBottom: '1px solid',
              borderColor: 'divider',
            },
            '& tbody tr:last-of-type td': {
              borderBottom: 0,
            },
          })}
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  sx={(theme) => ({
                    color: theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
                    p: 0.5,
                  })}
                />
              </TableCell>
              <TableCell>Page Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="left">Users</TableCell>
              <TableCell align="left">Event Count</TableCell>
              <TableCell align="left">Views per User</TableCell>
              <TableCell align="left">Average Time</TableCell>
              <TableCell align="left">Daily Conversions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow
                key={row.title}
                hover
                sx={{
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  '&:hover': { backgroundColor: 'action.hover' },
                  ...(idx % 2 === 1 && { backgroundColor: 'rgba(255,255,255,0.01)' }),
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    sx={(theme) => ({
                      color: theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
                      p: 0.5,
                    })}
                  />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === 'Online' ? 'success' : 'default'}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      fontSize: 12,
                      px: 1,
                      borderRadius: 1,
                      minWidth: 60,
                    }}
                  />
                </TableCell>
                <TableCell align="left">{row.users.toLocaleString()}</TableCell>
                <TableCell align="left">{row.eventCount.toLocaleString()}</TableCell>
                <TableCell align="left">{row.viewsPerUser}</TableCell>
                <TableCell align="left">{row.avgTime}</TableCell>
                <TableCell align="left">
                  <Box
                    sx={{
                      height: 18,
                      width: 90,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.2,
                    }}
                  >
                    {Array.from({ length: 18 }).map((_, i) => (
                      <Box
                        key={i}
                        sx={{
                          width: 3,
                          height: `${Math.random() * 16 + 2}px`,
                          bgcolor: 'primary.main',
                          borderRadius: 1,
                          opacity: 0.7,
                        }}
                      />
                    ))}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={allRows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20]}
        sx={(theme) => ({
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(12,16,23,255)' : '#fff',
          borderTop: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          px: 2,
          '.MuiTablePagination-toolbar': {
            minHeight: 40,
            height: 40,
            color: theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
            paddingTop: 0,
            paddingBottom: 0,
          },
          '.MuiTablePagination-selectLabel, .MuiTablePagination-input, .MuiTablePagination-displayedRows': {
            fontSize: 14,
          },
          '.MuiTablePagination-actions button': {
            color: theme.palette.mode === 'dark' ? '#fff' : '#1a1a1a',
          },
        })}
      />
    </Paper>
  );
}; 