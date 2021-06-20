// a class to store data of a generic type
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return this.data;
    }
}

// create a storage object to store string data
const textStorage = new DataStorage<string>();

textStorage.addItem("Abdur");
textStorage.addItem(1); // error

// create a storage object to store number data
const numStorage = new DataStorage<number>();

numStorage.addItem(1);
numStorage.addItem("Abdur"); // error
