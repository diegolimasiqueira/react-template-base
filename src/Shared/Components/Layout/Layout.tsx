import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { TopBar } from '@/Features/TopBar/Index';
import { Sidebar } from '@/Features/Sidebar/Index';
import { Breadcrumb } from '@/Features/Breadcrumb/Index';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <TopBar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
        <Toolbar />
        <Breadcrumb />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};
