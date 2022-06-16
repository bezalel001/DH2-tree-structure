export const d2_list_to_tree_data_structure = (inputData: DTO.DataNode[]) => {
    const idMappings: { [key: string]: number } = {};

    const roots: DTO.DataNode[] = [];

    for (let i = 0; i < inputData.length; i += 1) {
        const data = inputData[i] as DTO.DataNode;
        const index = data.id as string;
        idMappings[index] = i;
        data.children = [];
    }

    for (let i = 0; i < inputData.length; i += 1) {
        const node = inputData[i] as DTO.DataNode;
        if (node.parent?.id !== undefined) {
            const index = idMappings[node.parent?.id] as number;
            inputData[index]?.children?.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
};
