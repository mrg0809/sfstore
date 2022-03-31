const productos = [
    {id: '1', modelo: 'VN0EE3BKA', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic Black', precio: 899, foto:'image'},
    {id: '2', modelo: 'VN0EE3RED', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic Red', precio: 899, foto:'image'},
    {id: '3', modelo: 'VN0EE3W00', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic White', precio: 899, foto:'https://cdn.shopify.com/s/files/1/0284/3046/7144/products/VN0EE3W00_b610753c-448a-4914-932e-4778f2b62178_1000x.png?v=1624072666'},
    {id: '4', modelo: 'VN0QFKBKA', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Era Black', precio: 899, foto:'image'},
    {id: '5', modelo: 'VN0QER5U8', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Authentic Port', precio: 899, foto:'image'},
    {id: '6', modelo: 'VN0EYEW00', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Slip-on White', precio: 899, foto:'image'},
    {id: '7', modelo: 'VN0EYEBKA', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Slip-on Black', precio: 899, foto:'image'},
    {id: '8', modelo: 'VN0EYEBLK', marca: 'Vans', familia: 'Calzado', categoria: 'Moda', subfamilia: 'Caballero', subcategoria: 'Tenis', descripcion: 'Slip-on Black', precio: 899, foto:'image'},
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