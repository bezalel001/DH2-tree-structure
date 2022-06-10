import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { MinusSquare, PlusSquare } from "../icons/TreeViewIcons";

export const OrganisationalUnitsTree = ({ data, setNode }: OrganisationalUnitsTreeViewProps) => {
    const classes = useStyles();

    const renderTree = (nodes: DTO.DataNode) => {
        if (!nodes) {
            return null;
        }
        return (
            <StyledLink to={`/tree/${nodes.path}`}>
                <TreeItem
                    key={nodes.id}
                    nodeId={nodes.id}
                    label={nodes.name}
                    onIconClick={() => setNode(nodes)}
                    onLabelClick={() => setNode(nodes)}
                >
                    {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
                </TreeItem>
            </StyledLink>
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
    setNode: (node: DTO.DataNode) => void;
}

const useStyles = makeStyles({
    root: {
        height: 110,
        flexGrow: 1,
        maxWidth: 400,
    },
});

const StyledLink = styled(Link)`
    && {
        text-decoration: none;
        color: #000;
    }
`;
