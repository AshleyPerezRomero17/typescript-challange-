class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getNameAndAddress(separator: string): string {
        if (!separator) {
            throw new Error('Separator is required');
        }
        return `${this.name} ${separator} ${this.address}`;
    }
}

const person = new Person('John', 30, '123 Main St');
console.log(person.getNameAndAddress(','));
