export interface RepositoryService {
    save(item: Saveable): Promise<void>;
}

export interface Saveable {
    
}