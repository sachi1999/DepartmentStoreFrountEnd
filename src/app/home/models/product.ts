export class product{
    id :number;
    name:String;
    description:string;
    price:number;
    imageUrl:String;

    constructor(id,name,description='',price=0,imageUrl=''){
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl

    }
}