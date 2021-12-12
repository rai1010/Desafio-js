// import { calcular, adicionarProdutos } from 'util.js';

window.onload = function(){
    

    let produtos = [
        {idProduto:1, desc:'Mamão papaia', pr:0.20},
        {idProduto:2, desc:'Laranja', pr:1.20},
        {idProduto:3, desc:'Manga', pr:2.20},
        {idProduto:4, desc:'Melão', pr:1.80},
        {idProduto:5, desc:'Melancia', pr:0.80},
    ]
   
    const listaProdutos = document.querySelector("#produtos");
    const Total = document.querySelector("#mostraTotalCompra");
   
     ( ()=>{
           let
            totazinho=0;
            
           for( let pro of produtos ){
               const filhoLi = document.createElement('li');
   
               for( listaP in pro ){
                   if( listaP == 'pr' ){
                       listaProdutos.appendChild(filhoLi).setAttribute('data-preco', pro[listaP] );
                       listaProdutos.appendChild(filhoLi).setAttribute('data-id', pro.idProduto);
                      
                   } else {
                       listaProdutos.appendChild(filhoLi).textContent = `${pro[listaP]}` ;    
                   }
                   
                   
               }
           }
        
           Total.value = totazinho.toFixed(2); 
     } )(produtos)
     listaProdutos.addEventListener('click',adicionarProdutos(document.querySelector(listaProdutos.idProduto)));
    //  adicionarProdutos(produtos.idProduto);
     //console.log( pro[listaP] )  
   
       
   }
   function calcular( idProduto, resultado){
 
    const pr         = document.querySelectorAll(`#${idProduto} > li`);
    const valorResultado = document.querySelector(`#${resultado}`);
    let totalzinho=0;

    for( let i of pr ){
       totalzinho += Number(i.dataset.pr);
       //console.log( i.dataset.preco)
    }

    valorResultado.value = totalzinho;


 }
 
 function adicionarProdutos(idProdutos){

    const lista = document.querySelector(`#${idProdutos} > li`);
    
    for(let produto of lista){

        let li = document.createElement('li');
            lista.appendChild(li).setAttribute( 'idProduto' , 'desc', 'pr');
            produto.push(id);
            
            // lista.appendChild(li).textContent =  cxProduto.value;
           produto.addEventListener('click',function(){
           produto.push();
           calcular('produtos','mostraTotalCompra');

          });
    }

 }


// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });