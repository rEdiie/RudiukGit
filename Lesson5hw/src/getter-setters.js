const user = {
    name: 'Anna',
    age: 25,
    contact: {
        email: 'example@gmail.com',
        phone: '123-456-789'
    },
    get info() {
        return `${this.name}, ${this.age} ago`;
    },
    set changeName(newName) {
        this.name = newName;
    },
    summary() {
        return `Name: ${this.name}, email: ${this.contact.email.length}`;
    }
};

console.log(user.info);
user.changeName = 'Eddie';
console.log( user.info);
console.log(user.summary());
