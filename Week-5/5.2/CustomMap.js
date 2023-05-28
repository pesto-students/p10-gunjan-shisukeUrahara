class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    set(key, value) {
        const node = new Node(key, value);
        if (this.root == null) {
            this.root = node;
        } else {
            let root = this.root;
            while (root.next != null) {
                if (root.key === key) {
                    root.value = value;
                    return;
                }
                root = root.next;
            }
            root.next = node;
        }
    }

    get(key) {
        let root = this.root;
        while (root != null) {
            if (root.key === key) {
                return root.value;
            }
            root = root.next;
        }
        return null;
    }

    remove(key) {
        if (this.root == null) {
            return;
        }

        if (this.root.key === key) {
            this.root = this.root.next;
            return;
        }

        let root = this.root;
        while (root.next != null) {
            if (root.next.key === key) {
                root.next = root.next.next;
                return;
            }
            root = root.next;
        }
    }
}

class CustomMap {
    constructor() {
        this.store = [];
        this.size = 0;
    }

    getHash(value) {
        value = value.toString();
        let hash = 5381;
        for (let i = 0, len = value.length; i < len; i++) {
            hash = (hash * 33) ^ value.charCodeAt(i);
        }
        return hash >>> 0;
    }

    set(key, value) {
        const hashValue = this.getHash(key);
        if (this.store[hashValue] == null) {
            this.store[hashValue] = new LinkedList();
            this.size++;
        }
        this.store[hashValue].set(key, value);
    }

    get(key) {
        const hashValue = this.getHash(key);
        if (this.store[hashValue]) {
            return this.store[hashValue].get(key);
        }
        return null;
    }

    has(key) {
        const hashValue = this.getHash(key);
        return this.store[hashValue] != null;
    }

    remove(key) {
        const hashValue = this.getHash(key);
        if (this.store[hashValue]) {
            this.store[hashValue].remove(key);
            this.size--;
        }
    }
}

module.exports = CustomMap;
