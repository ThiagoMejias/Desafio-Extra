import { Product, ProductColecction } from "./models";
import { ProductController } from "./controllers";
import * as minimist from "minimist"
 
function parseador(argv){    
    const resultadoParseado = minimist(argv)
    if (resultadoParseado.search){
        return {search: resultadoParseado.search}
    }else{
      return      {}
    }
} 
function main(){
const argumentos = process.argv.slice(2) 
const resultadoFinal = parseador(argumentos)
const Controladordeopciones = new ProductController
 Controladordeopciones.proccesOption(resultadoFinal).then((r)=>{console.log(r)})
}
main()