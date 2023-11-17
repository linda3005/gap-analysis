import { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';

const SidebarRT = ({ 
  data, 
  children, 
  drawerColor,
  iconColor, 
  textColor,
  imageUrl,
  ...props }) => {
  const drawerWidth = 240;
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: drawerColor
        },
        ...props,
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
      {imageUrl && <img src={imageUrl} alt="Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
      </Toolbar>
      <Divider sx={{ backgroundColor: '#fff' }}/>
      <List>
        {data
          ? data.map((item, index) => (
              <ListItem key={item.text} disablePadding selected={selectedItem === index} onClick={(event) => handleItemClick(event, index)}>
                <ListItemButton>
                  {item.icon && <ListItemIcon sx={{ color: iconColor }}>{item.icon}</ListItemIcon>}
                  <ListItemText sx={{ color: textColor}} primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))
          : children}
      </List>
    </Drawer>
  );
};

export default SidebarRT;
