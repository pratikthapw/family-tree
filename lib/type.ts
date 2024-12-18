export type HierrachyItemProps = {
    name: string;
    dob: string;
    role: string;
    spouse?: Omit<HierrachyItemProps, "childrens">;
    childrens?: HierrachyItemProps[];
};