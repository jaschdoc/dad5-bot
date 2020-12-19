export interface Blame {

    initiator: string;

    target: string;

    title: string;

    result: BlameResult;
    
    pending: boolean;

};

export enum BlameResult {
    Win,
    Loss,
    Tie,
};