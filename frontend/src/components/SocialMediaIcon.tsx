import * as React from "react";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const SocialMediaIcon: React.FC = () => {

  return (
    <Container maxWidth="md" sx={{ mt: 20 }}>
      <Stack direction="row" alignItems="center" spacing={4}>
        <InstagramIcon fontSize="large" sx={{ color: "#E1306C" }} />
        <YouTubeIcon fontSize="large" sx={{ color: "#FF0000" }} />
        <FacebookIcon color="primary" fontSize="large" />
        <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
        <PinterestIcon fontSize="large" sx={{ color: "#E60023" }} />
        <LinkedInIcon fontSize="large" color="primary" />
      </Stack>
    </Container>
  );
};

export default SocialMediaIcon;

