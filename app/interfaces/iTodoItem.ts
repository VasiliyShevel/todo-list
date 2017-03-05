export interface ITodoItem {
    userId: number;
    title: string;
    description: string;
    required: boolean;
    shared: boolean;
    hidden: boolean;
    done: boolean;
    id?: number;
}