import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
        },
    })
);

export const OrganisationalUnitDetail = ({ node }: OrganisationalUnitDetailProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>{node.id}</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>{node.name}</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>{node.level}</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>{node.path}</Paper>
                </Grid>
            </Grid>
        </div>
    );
};

interface OrganisationalUnitDetailProps {
    node: DTO.DataNode;
}
