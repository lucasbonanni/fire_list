export class List {
    public title:string;
    public items:ItemList[];
}


export class ItemList {
    public text:string;
    public isDone:boolean;
    public isFocus:boolean;
}