import { Dictionary } from "../dataStruct/Directionary.js";

function testDictionary() {
    let dic = new Dictionary();
    dic.set("key1", 1);
    dic.set("key2", "aaa");
    dic.set("key3", { a: 10 });
    console.log(dic.has("key1"));
    console.log(dic.has("key4"));
    dic.print();

    console.log(dic.keys());
    console.log(dic.values());

    console.log(dic.size());
    console.log(dic.get("key2"));

    dic.delete("key1");
    console.log(dic.size());
    dic.print();

    dic.clear();
    dic.print();
}

export { testDictionary }