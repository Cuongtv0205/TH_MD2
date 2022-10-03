import {Manager2} from "./manager2";
import {Product2} from "../model1/product2";

export class ManagerProduct2 implements Manager2<Product2> {
    listProduct2: Product2[] = [];

    add(t: Product2) {
        this.listProduct2.push(t);
    }

    delete(id: number) {
        let index = this.findbyID1(id);
        this.listProduct2.splice(index, 1)
    }

    display() {
        return this.listProduct2
    }

    edit(id: number, t: Product2) {
        let index = this.findbyID1(id)
        this.listProduct2[index] = t;
    }

    findbyID1(id: number) {
        for (let i = 0; i < this.listProduct2.length; i++) {
            if (this.listProduct2[i].id == id) {
                return i;
            }
        }
        return -1;

    }

    findByIdProduct2(id: number) {
        let index = this.findbyID1(id);
        return this.listProduct2[index]
    }

    findbyName(name:string){
        let flat = 0;
        for (let i = 0; i < this.listProduct2.length; i++) {
            if(this.listProduct2[i].name == name){
                flat++;
                console.log(this.listProduct2[i])
            }
        }
        if(flat==0){
            console.log('ko tim thay: ');
        }
    }
}