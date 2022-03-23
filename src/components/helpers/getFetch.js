const productos = [
    {id: '1', modelo: 'VN0EE3BKA', marca: 'Vans', descripcion: 'Authentic Black', precio: 899, foto:'image'},
    {id: '2', modelo: 'VN0EE3RED', marca: 'Vans', descripcion: 'Authentic Red', precio: 899, foto:'image'},
    {id: '3', modelo: 'VN0EE3W00', marca: 'Vans', descripcion: 'Authentic White', precio: 899, foto:'image'},
    {id: '4', modelo: 'VN0QFKBKA', marca: 'Vans', descripcion: 'Era Black', precio: 899, foto:'image'},
    {id: '5', modelo: 'VN0QER5U8', marca: 'Vans', descripcion: 'Authentic Port', precio: 899, foto:'image'},
    {id: '6', modelo: 'VN0EYEW00', marca: 'Vans', descripcion: 'Slip-on White', precio: 899, foto:'image'},
    {id: '7', modelo: 'VN0EYEBKA', marca: 'Vans', descripcion: 'Slip-on Black', precio: 899, foto:'image'},
    {id: '8', modelo: 'VN0EYEBLK', marca: 'Vans', descripcion: 'Slip-on Black', precio: 899, foto:'image'},
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
