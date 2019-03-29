class Person {
    constructor(name){
        this._name = name;
    }
    static say() {
        return '666'
    }
    hello() {
        console.log(arguments);
        return 'Hello, I am ' + this._name + '.'
    }
}

class Child extends Person {
    hello() {
        return super.hello()+ 'I am Child'
    }
}






