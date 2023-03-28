import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  avatar: "/favicon-80x80.png",
  city: "Pariquera-açu",
  country: "SP",
  jobTitle: "Hospitalidade",
  name: "Dunamis Farm",
  timezone: "GTM-7",
};

export const AccountProfile = () => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 80,
            mb: 2,
            width: 80,
          }}
        />
        <Typography gutterBottom variant="h5">
          {user.name}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {user.city} {user.country}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {user.timezone}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button fullWidth variant="text">
        Trocar Imagem
      </Button>
    </CardActions>
  </Card>
);
