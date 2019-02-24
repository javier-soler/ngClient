export class Account {

    constructor(
        public id: number,
        public tentantId: number,
        public userName: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public age: number
    ) { }
}
