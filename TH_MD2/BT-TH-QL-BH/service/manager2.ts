export interface Manager2<T>{
    add(t:T);
    edit(id:number,t:T);
    delete(id:number);
    display();
    findbyID1(id:number);
    findbyName(name:string);
}