// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// 解法:
// 這邊題目要求是寫移個 LRU Cache的建構式 , new 出來的物件會有兩個方法
// ● get : 若key有存在於cache中的話 , 回傳對應key的value值 , 且將該值移動到cache第一位置 , 若無對應key就return -1 , 
// ● put : 插入key與對應值 , 若超過cache容量 , 則從 cache 移除 最近最少使用的項目(invalidate the least recently used item) , 然後再插入新的item , 若key已存在 , 則更新key對應值 , 並把該key移動到cache最前頭
// 可以先了解什麼是 LRU: 
// https://blog.techbridge.cc/2019/04/06/how-to-use-python-implement-least-recently-used/
// https://www.interviewcake.com/concept/java/lru-cache
// https://codertw.com/%E8%B3%87%E6%96%99%E5%BA%AB/123342/
// 還有什麼是cache(快取) , 與使用它的目的:
// https://www.interviewcake.com/concept/java/lru-cache
// https://progressbar.tw/posts/93
// 簡而言之LRU Cache (Least Recently Used) 核心思想就是 , 「如果是最近使用到的資料 , 就有可能是最近會很常用到」 反之來說 , 離最近越遠越沒用到的 , 就是可能最不常使用到的
var LRUCache = function(capacity) {
    Object.defineProperty(this,'cacheLength',{
        value: capacity,
        writable : false,
        enumerable :false,
        configurable :false
    })
    this.hash = {}
    this.cache = []
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.hash.hasOwnProperty(key)) {
        this.cache.unshift(this.cache.splice(this.cache.findIndex(ele => ele === key),1)[0])
        return this.hash[key]
    }else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.hash.hasOwnProperty(key)) {
        if(this.cache.length + 1 > this.cacheLength) {
            delete this.hash[this.cache.pop()]
            this.cache.unshift(key)
            this.hash[key] = value
        }else {
            this.cache.unshift(key)
            this.hash[key] = value
        }
    }else {
        this.cache.unshift(this.cache.splice(this.cache.findIndex(ele => ele === key),1)[0])
        this.hash[key] = value
    }
     
    return key
};

let mycache = new LRUCache(3)
mycache.put(1,11)
mycache.put(2,10)
mycache.put(3,12)
console.log(mycache.get(2))
mycache.put(4,13)
mycache.put(2,12)
console.log(mycache)
