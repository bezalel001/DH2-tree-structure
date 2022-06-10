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

// const entries = [
//     {
//         id: "12",
//         parentId: "0",
//         name: "Man",
//         level: "1",
//         children: null,
//     },
//     {
//         id: "6",
//         parentId: "12",
//         name: "Boy",
//         level: "2",
//         children: null,
//     },
//     {
//         id: "7",
//         parentId: "12",
//         name: "Other",
//         level: "2",
//         children: null,
//     },
//     {
//         id: "9",
//         parentId: "0",
//         name: "Woman",
//         level: "1",
//         children: null,
//     },
//     {
//         id: "11",
//         parentId: "9",
//         name: "Girl",
//         level: "2",
//         children: null,
//     },
// ];

// export default d2_list_to_tree_data_structure;

// console.log(d2_list_to_tree_data_structure(entries));
