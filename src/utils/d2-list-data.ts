import d2ListData from "../data/stubs/OrganisationUnits.json";
import { d2_list_to_tree_data_structure } from "./d2-list-to-tree-data-structure";

export const d2TreeData = d2_list_to_tree_data_structure(d2ListData.organisationUnits as DTO.DataNode[]);
