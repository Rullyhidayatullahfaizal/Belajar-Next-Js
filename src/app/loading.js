import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";


const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Mengisi seluruh tinggi layar
      }}
    >
      <Stack sx={{ color: "grey.500" }} spacing={5} direction="row">
        <CircularProgress color="secondary" style={{ width: 100, height: 100 }} />
        <CircularProgress color="success" style={{ width: 100, height: 100 }} />
        <CircularProgress color="inherit" style={{ width: 100, height: 100 }} />
      </Stack>
    </Box>
  );
};

export default Loading;
