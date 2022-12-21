import {Box, IconButton, useTheme} from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../theme';
// import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display = 'flex' justifyContent='space-between' p={2}  >
            {/*SEARCH BAR //////////////////////////////////////////////////////*/}
            <Box 
             display = 'flex'
             color = {colors.indigo[200]}
             borderRadius = '3px'>
               <h3>Happy Managing!</h3>
             </Box>

            {/* ICONS ////////////////////////////////////////////////////////////// */}
            <Box display = 'flex'>
               <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark' ? (
                    <DarkModeOutlinedIcon/>
                    ):(
                    <LightModeOutlinedIcon/>
                )}
               </IconButton>
               <IconButton><PersonOutlinedIcon/></IconButton> 
            </Box>
            
        </Box>
    
);
}

export default Topbar;