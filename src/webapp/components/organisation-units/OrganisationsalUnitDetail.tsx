import { useState } from "react";
import styled from "styled-components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import i18n from "../../../locales";

export const OrganisationalUnitDetail = ({ node }: OrganisationalUnitDetailProps) => {
    const classes = useStyles();

    const [edit, setEdit] = useState(false);

    return (
        <>
            <Heading>{i18n.t("Organisational Units")}</Heading>

            {!edit ? (
                <>
                    <EditOutlinedIcon onClick={() => setEdit(true)} />
                    <StyledFormFields>
                        <TextField
                            id="org-unit-name"
                            label="Name"
                            value={node.name}
                            defaultValue={node.name}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="org-unit-nam"
                            label="Level"
                            type="number"
                            value={node.level}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="org-unit-code"
                            label="Code"
                            defaultValue={node.readableCode}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </StyledFormFields>
                </>
            ) : (
                <form className={classes.root} noValidate autoComplete="off">
                    <CloseOutlinedIcon onClick={() => setEdit(false)} color="secondary" />
                    <StyledFormFields>
                        <TextField
                            id="org-unit-name"
                            label="Name"
                            value={node.name}
                            defaultValue={node.name}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="org-unit-nam"
                            label="Level"
                            type="number"
                            value={node.level}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField id="org-unit-code" label="Code" defaultValue={node.readableCode} />
                        <TextField id="org-unit-opening-date" type="date" defaultValue={node.openiningDate} />
                    </StyledFormFields>
                    <ActionButtons>
                        <Button variant="contained" color="primary">
                            {i18n.t("Save")}
                        </Button>
                        <Button variant="contained" color="secondary">
                            {i18n.t("Clear Form")}
                        </Button>
                    </ActionButtons>
                </form>
            )}
        </>
    );
};

interface OrganisationalUnitDetailProps {
    node: DTO.DataNode;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "25ch",
            },
            "& .MuiSvgIcon-root": {
                cursor: "pointer",
            },
        },
        button: {
            margin: theme.spacing(1),
        },
    })
);

const StyledFormFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const ActionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 25%;
`;

const Heading = styled.div`
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 30px;
`;
