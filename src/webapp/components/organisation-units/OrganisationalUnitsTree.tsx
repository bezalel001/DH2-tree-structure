import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { MinusSquare, PlusSquare } from "../icons/TreeViewIcons";

export const OrganisationalUnitsTree = ({ data }: OrganisationalUnitsTreeViewProps) => {
    const classes = useStyles();

    const renderTree = (nodes: DTO.DataNode) => {
        if (!nodes) {
            return null;
        }
        return (
            <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
                {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
            </TreeItem>
        );
    };

    return (
        <TreeView
            className={classes.root}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpanded={["root"]}
            defaultExpandIcon={<PlusSquare />}
        >
            {renderTree(data)}
        </TreeView>
    );
};

interface OrganisationalUnitsTreeViewProps {
    data: DTO.DataNode;
}

const useStyles = makeStyles({
    root: {
        height: 110,
        flexGrow: 1,
        maxWidth: 400,
    },
});
