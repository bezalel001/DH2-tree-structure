declare namespace DTO {
    export interface DataNode {
        level: number;
        name: string;
        id: string;
        path: string;
        children: DataNode[] | null;
        parent?: { id: string };
        readableCode?: string;
        closingDate?: Date;
        openiningDate?: Date;
    }
}
