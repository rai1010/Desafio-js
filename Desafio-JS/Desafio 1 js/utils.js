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
 
 function adicionarProdutos(id){

    const lista = document.querySelectorAll(`#${id} > li`);

    for(let produto of lista){

           produto.addEventListener('click',function(){
           produto.push();
           calcular('produtos','mostraTotalCompra');

           });
    }

 }

export {calcular, adicionarProdutos};
