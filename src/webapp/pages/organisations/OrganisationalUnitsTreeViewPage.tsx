import { useState } from "react";
import { Route } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { d2TreeData } from "../../../utils/d2-list-data";
import { OrganisationalUnitsTree } from "../../components/organisation-units/OrganisationalUnitsTree";
import { OrganisationalUnitDetail } from "../../components/organisation-units/OrganisationsalUnitDetail";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
            left: "0",
            top: "0",
            transform: "translate(20%, 50%)",
        },
    })
);

export const OrganisationalUnitsViewPage = () => {
    const classes = useStyles();

    const [node, setNode] = useState(d2TreeData[0]);
    

    return (
        <StyledTreeView className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                    <OrganisationalUnitsTree data={d2TreeData[0] as DTO.DataNode} setNode={setNode} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Route
                            path={`/tree/${node?.path}`}
                            render={() => <OrganisationalUnitDetail node={node as DTO.DataNode} />}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </StyledTreeView>
    );
};

const StyledTreeView = styled.div`
    /* display: flex;
    justify-content: space-betweeen;
    align-items: center; */
`;
