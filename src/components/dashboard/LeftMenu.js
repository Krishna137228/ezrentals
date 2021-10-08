import React from "react";
import styles from '../../styles/leftmenu.module.scss';
import { Grid,Box } from "@material-ui/core";
import CategoryFilter from "../CategoryFilter";
function LeftMenu(props) {
    return (
        <Box>
            <CategoryFilter />          
        </Box>
    );
}
export default LeftMenu;