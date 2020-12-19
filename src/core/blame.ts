export interface Blame {

    initiator: string;

    target: string;

    title: string;

    result: BlameResult;

};

export enum BlameResult {
    Pending,
    Win,
    Loss,
    Tie,
};