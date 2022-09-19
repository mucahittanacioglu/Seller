export class BasketItem{
    id:string;
    productId:string;
    productName:string;
    unitPrice:number;
    quantity:number;
    pictureUrl:string;
    constructor(Id:string,ProductId:number,
        ProductName:string,
        UnitPrice:number,
        Quantity:number,
        PictureUrl:string,){
            this.id = Id;
            this.productId = ProductId.toString();
            this.productName = ProductName;
            this.unitPrice = UnitPrice;
            this.quantity = Quantity;
            this.pictureUrl = PictureUrl;
        }
}