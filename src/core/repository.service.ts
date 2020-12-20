class Repository<K, V> {

    private map: Map<K, V> = new Map();

    save(key: K, value: V): Promise<void> {
        this.map.set(key, value);
        return Promise.resolve();
    }

    findByKey(key: K): Promise<V | void> {
        return Promise.resolve(this.map.get(key));
    }

    findAll(): Promise<Array<V>> {
        const values: Array<V> = [];

        this.map.forEach((value: V) => values.push(value));

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



export class TestRepository extends Repository<String, String> {

}

const entity1 = "Entity1";
const entity2 = "Entity2";
const key1 = "key1";
const key2 = "key2";

const testRepository: TestRepository = new TestRepository();

testRepository.save(key1, entity1);
testRepository.save(key2, entity2);


testRepository.findAll().then(values => console.log(values)).catch();


let find1

testRepository.findByKey(key1).then((value) => find1 = value).catch()

console.log(find1);



testRepository.deleteByKey(key1);
testRepository.findByKey(key1).then((value) => find1 = value).catch()

console.log(find1);