export interface PaginatedItemsViewModel<T>{
    pageIndex:number;
    pageSize:number;
    count:number;
    data:T[];

    /*constructor(pageIndex:number,pageSize:number,count:number,data:T[]){
        this.PageIndex = pageIndex;
        this.PageSize = pageSize;
        this.Count = count;
        this.Data = data;
    }*/

}