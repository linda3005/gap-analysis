import SidebarRT from './component/SidebarRT';
import { Grid, Typography, Box, Card, CardActions, CardContent } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import CardRT from './component/CardRT';
import SideNav from './component/SideNav';
import TopNav from './component/TopNav';
import ChartRT from './component/ChartRT';
const App = () => {
  const data = [
    { text: 'Dashboard', icon: <HomeIcon /> },
    { text: 'Profile', icon: <Person2Icon /> },
  ];

  return (
    <Grid container sx={{minHeight: "100vh", maxHeight: "100vh"}}>
      <Grid item xs={12} sm={2}>
        <SideNav data={data}/>
      </Grid>
      <Grid item xs={12} sm={10} sx={{display: "flex", flexDirection: "column"}}>
        <Box>
          <TopNav />
        </Box>
        <Grid container sx={{backgrounColor:"blue"}} spacing={4} p={4}>
          <CardRT color = "#FF8080" text = "Total Locomotive" total = "50"/>
          <CardRT color = "#FFCF96" text = "Total Locomotive Poor" total = "50"/>
          <CardRT color = "#CDFAD5" text = "Total Locomotive Good" total = "50"/>
          <CardRT color = "#C5DFF8" text = "Total Locomotive Excellent" total = "50"/>
        </Grid>
        <Card sx={{ minWidth: 275, marginX: "30px", border: "1px solid #ccc" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Linda's Train
            </Typography>
            <Typography variant="h4" component="div">
              Summary
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Summary dari status lokomotif kereta saat ini
            </Typography>
            <ChartRT />
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  );
}

export default App;

