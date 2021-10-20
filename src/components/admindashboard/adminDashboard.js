import React, { useEffect } from "react";
import { Grid,Container,Box } from "@material-ui/core";
function admindashboard(props) {

    const styles = (theme) => ({
        root: {
            flexGrow: 1
        }
    });
    
    return (
        <div className={styles.root}>
            <Box>
                <Grid container >
                    <Grid  item xs={12}>
                        Welcome to admin dashboard
                    </Grid>
                </Grid>
                
            </Box>
        </div>
    );
}

export default admindashboard;