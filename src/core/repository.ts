export abstract class Repository<T, K> {

    private map: Map<K, T> = new Map();

    save(value: T, key: K): Promise<void> {
        this.map.set(key, value);
        return Promise.resolve();
    }

    findByKey(key: K): Promise<T | void> {
        return Promise.resolve(this.map.get(key));
    }

    findAll(): Promise<Array<T>> {
        const values: Array<T> = [];

        this.map.forEach((value: T) => values.push(value));

        return Promise.resolve(values)
    }

    deleteByKey(key: K): Promise<void> {
        this.map.delete(key);
        return Promise.resolve();
    }

    deleteAll(): Promise<void> {
        this.map = new Map();
        return Promise.resolve();
    }
}

class TestRepository extends Repository<String, String> {

}

const entity1 = "Entity1";
const entity2 = "Entity2";
const key1 = "key1";
const key2 = "key2";

const testRepository: TestRepository = new TestRepository();

testRepository.save(entity1, key1).then(r => console.log(r));
testRepository.save(entity2, key2).then(r => console.log(r));


testRepository.findAll().then(values => console.log(values)).catch();

testRepository.findByKey(key1).then((value) => console.log(`findByKey: ${value}`)).catch()




testRepository.deleteByKey(key1).then(r => console.log(r));
testRepository.findByKey(key1).then((value) =>  console.log(`find after deletion: ${value}`)).catch()
