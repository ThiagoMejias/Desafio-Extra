import * as jsonfile from  "jsonfile"

class Product {
  name: string 
  id : number 
  
    constructor(name, id ) {
        this.name = name
        this.id = id  }}


class ProductColecction {

 getAll(){
     return jsonfile.readFile("./products.json").then((i)=> {return i})
 }
 getById(id:number){
     return this.getAll().then((i)=>{
        const busqueda = i.find((p)=> {return p.id == id})
        return busqueda 
    })
    
    }
    

}
    

//const prueba = new ProductColecction
//prueba.getAll().then((i)=> console.log(i))
//prueba.getById(3).then((i)=> console.log(i))

export {Product,ProductColecction}