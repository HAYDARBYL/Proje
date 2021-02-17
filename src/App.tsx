
import React, { useEffect, useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import{
Product,
ProductViewModel,
initialProductData,
storageProductsKey,
ProductEntryModel
//ProductDetailEntryModel
} from "./app/models/app-models";

function App() {
  const [productData,setProductData]=useState<Array<Product>>(
initialProductData
  );
  const[productList,setProductList]=useState<Array<ProductViewModel>>(
    []
  );
  const [selectedDetaiils,setSelectedDetails]=useState<Array<ProductViewModel>>([]);

  const [currentProductEntry,setCurrentProductEntry] = useState<ProductEntryModel>(new ProductEntryModel());

  const restoreProducts = () =>{
const jsonStr = localStorage.getItem(storageProductsKey);
if(jsonStr){
  const data=JSON.parse(jsonStr);
  setProductData(data);
}
  };
  
  const saveProduct = () => {
    let id = Number((document.getElementById("fproductId") as HTMLInputElement)?.value);
    let itemName =(document.getElementById("fproductName") as HTMLInputElement)?.value;
    let itemCode = (document.getElementById("fproductCode") as HTMLInputElement)?.value;
    let itemQuantity = (document.getElementById("fproductQuantity") as HTMLInputElement)?.value;
    let itemPrice = (document.getElementById("fproductPrice") as HTMLInputElement)?.value;
    let vatRate = (document.getElementById("fproductVatRate") as HTMLInputElement)?.value;
    let barkod1 = (document.getElementById("fproductBarkod1") as HTMLInputElement)?.value;
    let barkod2 = (document.getElementById("fproductBarkod2") as HTMLInputElement)?.value;
    const product = new Product();
    if (id && id>0) {
      if (productData.find((d) => d.ProductId === id)) {
        alert("Bu id'ye ait ürün mevcut");
        return;
      } else {
        product.ProductId = id;
      }
    } else {
      alert("Ürün kodu zorunlu.");
      return;
    }

    if (itemCode && itemCode.trim()) {
      if (productData.find((d) => d.ProductCode === itemCode)) {
        alert("Bu koda ait ürün mevcut");
        return;
      } else {
        product.ProductCode = itemCode.toString();
      }
    } else {
      alert("Ürün kodu zorunlu.");
      return;
    }

    if (itemName && itemName.trim()) {
      product.ProductName = itemName.toString();
    } else {
      alert("Ürün adı zorunlu.");
      return;
    }

    if (itemQuantity && itemQuantity.trim()) {
      product.Quantity = Number(itemQuantity);
    } else {
      alert("Ürün miktarı zorunlu.");
      return;
    }
    
    if (itemPrice && itemPrice.trim()) {
      product.Price = Number(itemPrice);
    } else {
      alert("Ürün fiyatı zorunlu.");
      return;
    }

    const newData = [...productData];
    newData.push(product);
    setProductData(newData);
  };

  useEffect(() => {
    if (productData) {
      const _productList = productData.map((x) => new ProductViewModel(x));
      setProductList(_productList);
      localStorage.setItem(storageProductsKey, JSON.stringify(productData));
    }
  }, [productData]);

  const deleteProduct = (p: ProductViewModel) => {
    const productIndex = productData.indexOf(p);
    productData.splice(productIndex);
    localStorage.setItem(storageProductsKey, JSON.stringify(productData));
    restoreProducts();
  };

  return (
    <div className="App">
      <div className="container">
        <div className ="row"> 
                  <div className ="col">
                  <h3 style ={{textAlign:"center"}}>Ürün Kaydı</h3>
          </div>
        </div>
        <div className="row">
        <div className="col">
        <div className="form-group">
        </div>
        <div className = "row col-12">
          <div className = ""> </div>
       <div className="card">
         <h4 className = "d-inline">    
            <label>Ürün Id  </label> <input type="text" id="fproductId" className="form-control" onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, ProductId :ev.target.value.trim()
        })
      }} /></h4>
 
        
       </div>
       
        </div>
        <div className="row col-12">
        <label>Ürün Adı </label>
      <input type="text" id="fproductName" className="form-control" onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, ProductName :ev.target.value.trim()
        })
      }} />
        </div>
        <div className="row col-12">
        <label>Ürün Kodu : </label>
      <input type="text" id="fproductCode" className="form-control" onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, ProductCode:ev.target.value.trim()
        })
      }} />
        </div>
        <div className ="row col-12" >
        <label>Ürün Miktari : </label>
      <input type="text" id="fproductQuantity" className="form-control"onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, Quantity:ev.target.value.trim()
        })
      }} />
        </div>
        <div className ="row col-12">
        <label>Ürün Fiyatı : </label>
        <input type="text" id="fproductPrice" className="form-control" onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, Price:ev.target.value.trim()
        })
      }} />
        </div>
        <div className ="row col-12">
        <label>Kdv Oranı : </label>
        <input type="text" id="fproductVatRate" className="form-control" onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, VatRate:ev.target.value.trim()
        })
      }} />
        </div>
        <div className ="row col-12">
        <label>Adet Barkodu : </label>
        <input type="text" id="fproductBarkod1" className="form-control" onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, AdetBarkod:ev.target.value.trim()
        })
      }} />
        </div>
        <div className ="row col-12">
        <label>Koli Barkodu : </label>
        <input type="text" id="fproductBarkod2" className="form-control" onChange={(ev)=>{
        setCurrentProductEntry({
          ...currentProductEntry, KoliBarkod:ev.target.value.trim()
        })
      }} />
        </div>
        <div className="row col-4">
        <button type="button" className="btn btn-primary gap-right" style ={{marginTop:10}} onClick={saveProduct}> <i className="fas fa-spinner fa-spin gap-right">
          </i> Kaydet
          </button>
        </div>
        </div>
        <div className="col">
        <table className="table table-striped" style={{marginTop:40}}>
        <thead>
          <tr>
            <th>Ürün Kodu</th>
            <th>Ürün Adı</th>
            <th>Ürün Kdv Oranı</th>
            <th>Adet Barkodu</th>
            <th>Koli Barkodu</th>
            <th>Ürün Miktari</th>
            <th>Ürün Fiyat</th>
      
          </tr>
        </thead>
        <tbody>
          {productList.map((x) => (
            <tr key={x.ProductId?.toString()}>
              <td id="idx">{x.ProductCode}</td>
              <td>{x.ProductName}</td>
              <td>{x.VatRate}</td>
              <td>{x.AdetBarkod}</td>
              <td>{x.KoliBarkod}</td>
              <td>{x.Quantity}</td>
              <td>{x.Price}</td>

              <td>
                <button
                  onClick={() => {
                    deleteProduct(x);
                  }}
                >
                  {" "}
                  Sil{" "}
                </button>
              </td>
            </tr>
          ))}
          {selectedDetaiils.map((d) => (
            <tr>
              {<td>{d.ProductId}</td>}
              {<td>{d.ProductName}</td>}
              {<td>{d.ProductCode}</td>}
              {<td>{d.Quantity}</td>}
              {<td>{d.Price}</td>}
              {<td>{d.VatRate}</td>}
              {<td>{d.AdetBarkod}</td>}
              {<td>{d.KoliBarkod}</td>}
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
      <div className ="row">
      <div className ="row col-12"> 
     
      </div>
      </div>
      </div>
    </div>
  );
 }

export default App;
