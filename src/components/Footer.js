import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assests/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80x" bgColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h5" pb="40px" mt="20px">
          Made with ❤️ by Muhammad Hassan
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
