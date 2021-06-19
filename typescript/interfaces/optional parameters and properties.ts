interface Named {
    name: string;

    // optional property
    nickName?: string;

    // optional method
    getNickName?(): string | void;
}

interface Greetable extends Named {
    // optional parameter
    greet(name?: string): void;
}

class Person implements Greetable {
    constructor(public name: string, public nickName?: string) {}

    greet(name?: string) {
        if (name) {
            console.log(`Hi ${name}!`);
        } else {
            console.log(`Hi ${this.name}!`);
        }
    }

    getNickName() {
        if (this.nickName) {
            return this.nickName;
        }
    }
}
