export class User {
    constructor(
        public email: string, 
        public password: string,
        private _token: string,
        private _tokenExirationDate: Date
        ) {}

    get token() {
        if (!this._tokenExirationDate || 
            new Date() > this._tokenExirationDate) {
                return null;
            }

        return this._token;
    }
}