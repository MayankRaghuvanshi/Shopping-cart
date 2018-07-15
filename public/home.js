function fetchList(done){
    $.get('http://localhost:1221/product',(data)=>{
        done(data)
    })
}
function makeTable(data){
    return $(`<div class="col-4 card ">
        <img  class="img" src="${data.image}" class="img-thumbnail">
        <p id="name">${data.name}</p>
        <p><b id="price">${data.price} RS</b></p><div class="row">
        <button class="btn m-1 col" style="float: left" id="add">ADD</button>
        <button class="btn m-1 col" style="float: right" id="buy">BUY</button>
    </div>
    </div>
`)
}
$(function () {
    let productlist = $('#product-list')

    fetchList(function (product) {
        productlist.empty()

        for(pro of product){
            productlist.append(makeTable(pro))
        }
    })
    
    
    
    
})




$(function () {

})