class HashMap {
    constructor() {
      this.map = {};
    }
  
    put(key, value) {
      this.map[key] = value;
    }
  
    get(key) {
      return this.map[key];
    }
  
    remove(key) {
      delete this.map[key];
    }
  }

const myHashMap = new HashMap();
myHashMap.put("key1", "value1");
console.log(myHashMap.get("key1"));
myHashMap.remove("key1");
console.log(myHashMap.get("key1"));