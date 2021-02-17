export class Product {
    ProductId: number =0;
    ProductCode: string ="";
    ProductName :string ="";
     VatRate :number=0;
     Quantity: number=0;
     Price:number =0;
     AdetBarkod: string="";
     KoliBarkod: string="";
   }
   export class ProductViewModel{
       ProductId: number;
       ProductCode: string;
       ProductName:string;
       VatRate: number;
        Quantity: number;
       Price:number;
       AdetBarkod: string;
       KoliBarkod:string;
       constructor(data:Product){
   this.ProductId =data.ProductId;
   this.ProductCode = data.ProductCode;
   this.ProductName = data.ProductName;
   this.VatRate =data.VatRate;
    this.Quantity =data.Quantity;
    this.Price =data.Price;
    this.AdetBarkod = data.AdetBarkod;
    this.KoliBarkod = data.KoliBarkod;
       }
   }
//    export class ProductDetail {
//     InvoiceId: number = 0;
//     ItemQuantity: number = 0;
//     ItemPrice: number = 0;
//     ItemBarkod: string = "";
//     ItemVatRate: number = 0;
//   }
//   export class ProductDetailViewModel {
//     InvoiceId: number;
//     ItemNumber: string;
//     ItemName: string;
//     ItemQuantity: number;
//     ItemPrice: number;
//     ItemVatRate: number;
//     ItemBarkod: string;
//     constructor(data: ProductDetail) {
//       this.InvoiceId = data.InvoiceId;
//       this.ItemNumber = data.ItemNumber;
//       this.ItemName = data.ItemName;
//       this.ItemQuantity = data.ItemQuantity;
//       this.ItemPrice = data.ItemPrice;
//       this.ItemVatRate = data.ItemVatRate;
//       this.ItemBarkod = data.ItemBarkod;
//     }
//   }

   export class ProductEntryModel {
    ProductId: string = "";
    ProductCode: string = "";
    ProductName: string = "";
    Quantity: string = "";
    VatRate : string ="";
    Price: string = "";
    AdetBarkod: string = "";
    KoliBarkod: string = "";
  
  }


   export const initialProductData:Array<Product>=[
   {
       ProductId:  1,
       ProductCode: "RK2020",
       ProductName: "RAKI",
       VatRate : 18,
       Quantity:  10,
       Price:   5,
       AdetBarkod : "3123213415",
       KoliBarkod:  "24214214141",
   },
   {
       ProductId:  2,
       ProductCode: "VT2021",
       ProductName: "VOTKA",
       Quantity:  11,
       VatRate : 18,
       Price:   1,
       AdetBarkod : "3123213415",
       KoliBarkod:  "24214214141",
   },
   ]
   export const storageProductsKey = "GURPA_PRODUCTS";