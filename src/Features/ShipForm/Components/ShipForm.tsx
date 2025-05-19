import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  useTheme,
  Stack
} from '@mui/material';
import { getShipFormStyles } from '@/Features/ShipForm/Styles/shipFormTheme';
import { Ship, ShipType } from '../Types/ship';

const shipTypes: ShipType[] = ['Cargo', 'Tanker', 'Container', 'Bulk Carrier'];
const shipStatus = ['Active', 'Inactive', 'Maintenance'];

export const ShipForm = () => {
  const theme = useTheme();
  const styles = getShipFormStyles(theme);
  const [formData, setFormData] = useState<Partial<Ship>>({});

  const handleChange = (field: keyof Ship) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.type === 'number' 
      ? Number(event.target.value)
      : event.target.value;
    
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={styles.container}>
      <Typography variant="h5" sx={styles.sectionTitle}>
        Ship Registration
      </Typography>

      <Box sx={styles.form}>
        <Box sx={styles.section}>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Basic Information
          </Typography>
          <Stack direction="row" spacing={0.01} sx={{ flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                fullWidth
                label="Ship Name"
                value={formData.name || ''}
                onChange={handleChange('name')}
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                fullWidth
                select
                label="Ship Type"
                value={formData.type || ''}
                onChange={handleChange('type')}
                required
              >
                {shipTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                fullWidth
                label="IMO Number"
                value={formData.imoNumber || ''}
                onChange={handleChange('imoNumber')}
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                fullWidth
                label="Flag"
                value={formData.flag || ''}
                onChange={handleChange('flag')}
                required
              />
            </Box>
          </Stack>
        </Box>

        <Box sx={styles.section}>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Technical Specifications
          </Typography>
          <Stack direction="row" spacing={0.01} sx={{ flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                type="number"
                label="Length (m)"
                value={formData.length || ''}
                onChange={handleChange('length')}
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                type="number"
                label="Beam (m)"
                value={formData.beam || ''}
                onChange={handleChange('beam')}
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                type="number"
                label="Draft (m)"
                value={formData.draft || ''}
                onChange={handleChange('draft')}
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 200px' }}>
              <TextField
                fullWidth
                type="number"
                label="Gross Tonnage"
                value={formData.grossTonnage || ''}
                onChange={handleChange('grossTonnage')}
                required
              />
            </Box>
          </Stack>
        </Box>

        <Box sx={styles.section}>
          <Typography variant="h6" sx={styles.sectionTitle}>
            Additional Information
          </Typography>
          <Stack direction="row" spacing={0.01} sx={{ flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                fullWidth
                type="number"
                label="Year Built"
                value={formData.yearBuilt || ''}
                onChange={handleChange('yearBuilt')}
                required
              />
            </Box>
            <Box sx={{ flex: '1 1 300px' }}>
              <TextField
                fullWidth
                select
                label="Status"
                value={formData.status || ''}
                onChange={handleChange('status')}
                required
              >
                {shipStatus.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box sx={{ flex: '1 1 100%' }}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="Description"
                value={formData.description || ''}
                onChange={handleChange('description')}
              />
            </Box>
          </Stack>
        </Box>

        <Box sx={styles.actions}>
          <Button variant="outlined" color="inherit">
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}; 