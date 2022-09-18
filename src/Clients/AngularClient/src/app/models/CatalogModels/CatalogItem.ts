import { CatalogBrand } from "./CatalogBrand";
import { CatalogType } from "./CatalogType";

export interface CatalogItem{
    id:number;
    name:string;
    description:string;
    price:number;
    pictureFileName:string;
    pictureUri:string;
    catalogType:CatalogType
    catalogBrand:CatalogBrand;
    catalogTypeId:number;
    catalogBrandId:number;
    availableStock:number;
    onReorder:boolean;
}