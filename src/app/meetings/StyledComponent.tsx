"use client"

import { Box, styled } from "@mui/material";

export const Header = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderBottom: '1px solid #D9D9D9',
  boxShadow: theme.shadows[1],
}));