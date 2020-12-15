export interface Command {
    name: string;

    usage: string;

    description: string;

    alias?: string[];

    args?: boolean;

    execute(message: any, args: any): Promise<void>;
}