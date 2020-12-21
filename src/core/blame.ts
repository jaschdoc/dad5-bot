import {Repository} from "./repository";

export interface Blame {

    initiator: string;

    target: string;

    title: string;

    result: BlameResult;

}

export enum BlameResult {
    Pending,
    Win,
    Loss,
    Tie,
}

class BlameRepository extends Repository<Blame, string> {}

const blameRepository: BlameRepository = new BlameRepository();

export {blameRepository as BlameRepository}