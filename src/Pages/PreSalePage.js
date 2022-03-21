import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import RetroInput from './../Components/RetroInput/RetroInput';

const StyledCheckBox = styled(Checkbox)(({theme}) => {
    return {
        color: theme.status.danger,
    }
});

const PreSalePage = () => {
    return (
        <div>
            <Grid sx={{ flexGrow:1 }} container spacing={4}>
                <Grid item>
                    <RetroInput name="AvaxInput" />
                </Grid>
                
                <Grid item>
                    <RetroInput name="RetroInput" />
                </Grid>
            </Grid>
            <div>
                {/* <RetroButton /> */}
                <StyledCheckBox />
            </div>
        </div>
    );
}

export default PreSalePage;