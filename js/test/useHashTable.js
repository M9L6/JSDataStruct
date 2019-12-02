import { HashTable, djv2HashCode } from "../dataStruct/HashTable.js";

function testHashTable() {
    let hash = new HashTable();
    hash.put("key1", 12);
    hash.put("key2", 100);
    hash.put("key3", "aaa");
    hash.put("key4", "bbb");
    hash.put("key7", "aaaaa");
    hash.put("kye1", 123);
    hash.print();

    console.log(hash.get("kye1"));
    console.log(hash.get("key1"));

    console.log(hash.remove("key1"));
    hash.print();
    console.log(hash.remove("key7"));
    hash.print();

    let hash1 = new HashTable(djv2HashCode);
    hash1.put("key1", 12);
    hash1.put("key2", 100);
    hash1.put("key3", "aaa");
    hash1.put("key4", "bbb");
    hash1.put("key7", "aaaaa");
    hash1.put("kye1", 123);
    hash1.print();

    console.log(hash1.get("kye1"));
    console.log(hash1.get("key1"));

    console.log(hash1.remove("key1"));
    hash1.print();
    console.log(hash1.remove("key7"));
    hash1.print();
}

export { testHashTable }