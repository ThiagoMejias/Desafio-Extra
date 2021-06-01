import {Product, ProductColecction} from "./models"

class ProductController {
  colecction : ProductColecction  
    constructor() {
        this.colecction = new ProductColecction()
    }
   proccesOption(option) {
       if (option.search) {
           return this.colecction.getById(option.search)
       }
       else{
           return this.colecction.getAll()
       }
   } 
} 
export {ProductController}