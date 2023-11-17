import { Box, Grid, Typography } from "@mui/material"

const CardRT = ({color, text, total}) => {
    return (
        <Grid item xs={12} sm={3}>
            <Box sx={{
                height: '150px',
                width: 'auto',
                backgroundColor: color,
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <Typography variant= 'h4' color ='#FFF'> {text}</Typography>
                <Typography variant= 'h2' color ='#FFF' sx={{alignSelf: 'flex-end'}}>{total}</Typography>
            </Box>
        </Grid>
    )
}

export default CardRT