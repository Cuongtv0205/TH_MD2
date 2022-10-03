export class Product2{
    private _id:number;
    private _name:string;
    private _sectors:string;
    private _quatity:number
    private _pice:number;
    private _time:string;
    private _describe:string


    constructor(id: number, name: string, sectors: string, quatity: number, pice: number, time: string, describe: string) {
        this._id = id;
        this._name = name;
        this._sectors = sectors;
        this._quatity = quatity;
        this._pice = pice;
        this._time = time;
        this._describe = describe;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get sectors(): string {
        return this._sectors;
    }

    set sectors(value: string) {
        this._sectors = value;
    }

    get quatity(): number {
        return this._quatity;
    }

    set quatity(value: number) {
        this._quatity = value;
    }

    get pice(): number {
        return this._pice;
    }

    set pice(value: number) {
        this._pice = value;
    }

    get time(): string {
        return this._time;
    }

    set time(value: string) {
        this._time = value;
    }

    get describe(): string {
        return this._describe;
    }

    set describe(value: string) {
        this._describe = value;
    }
}