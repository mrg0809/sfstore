const productos = [
    {id: '1', modelo: 'VN0EE3BKA', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic Black', precio: 899, foto:'http://cdn.shopify.com/s/files/1/0284/3046/7144/products/vn0ee3bka_1200x1200.jpg?v=1624072780'},
    {id: '2', modelo: 'VN0EE3RED', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic Red', precio: 899, foto:'http://cdn.shopify.com/s/files/1/0284/3046/7144/products/VN0EE3RED_2f658407-804c-4e6f-a6da-2876639fd38e_1200x1200.png?v=1625437423'},
    {id: '3', modelo: 'VN0EE3W00', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic White', precio: 899, foto:'https://cdn.shopify.com/s/files/1/0284/3046/7144/products/VN0EE3W00_b610753c-448a-4914-932e-4778f2b62178_1000x.png?v=1624072666'},
    {id: '4', modelo: 'VN0QFKBKA', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Era Black', precio: 899, foto:'https://cdn.shopify.com/s/files/1/0284/3046/7144/products/VN0QFKBKA_952c52f7-d1e7-4ae1-917b-e456b1ecf74e_1000x.png?v=1625437302'},
    {id: '5', modelo: 'VN0QER5U8', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic Port', precio: 899, foto:'https://cdn.shopify.com/s/files/1/0284/3046/7144/products/VN0QER5U8_2de1a033-17fe-4519-a645-7a4ee76b8f39_1000x.png?v=1625437371'},
    {id: '6', modelo: 'VN0EYEW00', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Slip-on White', precio: 899, foto:'https://cdn.shopify.com/s/files/1/0284/3046/7144/products/VN0EYEW00_2c336e0c-e05a-4754-8ce5-dddd3fa9cb60_1000x.png?v=1625437382'},
    {id: '7', modelo: 'VN0EYEBKA', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Slip-on Black', precio: 899, foto:'https://pappomania.com/Images/products/1050x1050/R241125-1/R241125-1_1_grd.jpg'},
    {id: '8', modelo: 'VN0EYEBLK', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Slip-on Black', precio: 899, foto:'https://cdn.shoplightspeed.com/shops/615129/files/13255632/vans-vans-mens-classic-slip-on-vn000eyeblk.jpg'},
    {id: '9', modelo: 'BV6169-001', marca: 'Nike', familia: 'Ropa', categoria: 'Moda', subfamilia: 'Dama', subcategoria: 'Blusa', descripcion: 'Icon Futura', precio: 349, foto:'https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/3012041-0000V1.jpg'},
    {id: '10', modelo: 'CK0877', marca: 'Adidas', familia: 'Accesorios', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Gorra', descripcion: 'Gorra Adidas negra', precio: 399, foto:'https://www.srbalon.com/cdnassets/FK0877-1_l.jpg'},
]

export const getFetch = new Promise((resolve, reject)=>{
    let condition=true
    if (condition) {
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    } else {
        reject('400 not found')
    }
})

const producto = {id: '1', modelo: 'VN0EE3BKA', marca: 'Vans', descripcion: 'Authentic Black', precio: 899, foto:'image'}

export const getFetchOne = new Promise ((resolve, reject)=>{
    let condition=true
    if (condition) {
        setTimeout(()=>{
            resolve(producto)
        }, 2000)
    } else {
        reject('400 not found')
    }
})