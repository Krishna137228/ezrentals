import React from "react";
import LeftMenu from './LeftMenu';
import RightView from './RightView';
import { Grid,Container,Box } from "@material-ui/core";
function Dashboard(props) {

    const styles = (theme) => ({
        root: {
            flexGrow: 1
        }
      });
    return (
        <div className={styles.root}>
            <Box>
                <Grid container >
                    <Grid  item xs={2}>
                        <LeftMenu />
                    </Grid>
                    <Grid  item xs={10}>
                        <RightView />
                    </Grid>
                </Grid>
                
            </Box>
        </div>
    );
}

export default Dashboard;