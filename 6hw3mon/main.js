

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    print() {
        console.log(`имя - ${this.name}; фамилия - ${this.surname}`);
    }
}

class Student extends User {
    #password
    constructor(name, surname, username, password) {
        super(name, surname);
        this.#password = password
        this.username = username;
    }
    print(password) {
        if (password === this.#password) {
            console.log(`имя - ${this.name}; фамилия - ${this.surname}`);
        };
    }
}

let student = new Student('name', 'surname', 'username', 'password')
student.print('password')
