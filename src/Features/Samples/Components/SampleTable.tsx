import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme
} from '@mui/material';
import { getSampleStyles } from '@/Features/Samples/Styles/sampleTheme';

interface Sample {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

const mockData: Sample[] = [
  {
    id: 1,
    name: 'Sample 1',
    description: 'This is a sample description',
    status: 'active',
    createdAt: '2024-03-20'
  },
  {
    id: 2,
    name: 'Sample 2',
    description: 'Another sample description',
    status: 'inactive',
    createdAt: '2024-03-19'
  }
];

export const SampleTable = () => {
  const theme = useTheme();
  const styles = getSampleStyles(theme);

  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table sx={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell sx={styles.headerCell}>ID</TableCell>
            <TableCell sx={styles.headerCell}>Name</TableCell>
            <TableCell sx={styles.headerCell}>Description</TableCell>
            <TableCell sx={styles.headerCell}>Status</TableCell>
            <TableCell sx={styles.headerCell}>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockData.map((row) => (
            <TableRow key={row.id} sx={styles.row}>
              <TableCell sx={styles.cell}>{row.id}</TableCell>
              <TableCell sx={styles.cell}>{row.name}</TableCell>
              <TableCell sx={styles.cell}>{row.description}</TableCell>
              <TableCell sx={styles.cell}>
                <span style={{
                  color: row.status === 'active' ? theme.palette.success.main : theme.palette.error.main
                }}>
                  {row.status}
                </span>
              </TableCell>
              <TableCell sx={styles.cell}>{row.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 