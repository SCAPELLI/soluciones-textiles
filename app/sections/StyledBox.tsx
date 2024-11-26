"use client";


import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default StyledBox;