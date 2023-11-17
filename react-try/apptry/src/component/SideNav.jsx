import React, {useState} from 'react'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import { Link, useLocation } from 'react-router-dom';

const SideNav = ({ data, children }) => {
  const imageUrl = "https://cdn-icons-png.flaticon.com/512/6556/6556270.png";
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    console.log(index);
    setSelectedItem(index);
  };

  return (
    <Grid container sx={{width: "100%", backgroundColor: "#95BDFF", height: "100%"}} direction="column">
        <Grid item xs={2} sm={2} sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%', // Full width only for xs
            borderBottom: '1px solid white'
        }}>
            <img src={imageUrl} alt="My Image" style={{ width: '175px', height: 'auto' }} /><br/>
        </Grid>
        <Grid item sx={{padding: "10px"}}>
            <nav>
                <List>
                {data
                    ? data.map((item, index) => (
                        <ListItem key={item.text} disablePadding selected={selectedItem === index} onClick={() => handleItemClick(index)}>
                            <ListItemButton>
                            {item.icon && <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>}
                            <ListItemText sx={{ color: "white"}} primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                        ))
                : children}
                </List>
            </nav>
        </Grid>
    </Grid>
  )
}

export default SideNav