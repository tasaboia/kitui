import { useCallback } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";

export const SettingsNotifications = () => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="Gerenciar Notificações" title="Notificações" />
        <Divider />
        <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid xs={12} sm={6} md={4}>
              <Stack spacing={1}>
                <Typography variant="h6">Notificações</Typography>
                <Stack>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Notificações via push"
                  />
                  <FormControlLabel control={<Checkbox />} label="Mensagens de texto" />
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">Mensagens</Typography>
                <Stack>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                  <FormControlLabel control={<Checkbox />} label="Notificações via push" />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Salvar</Button>
        </CardActions>
      </Card>
    </form>
  );
};
