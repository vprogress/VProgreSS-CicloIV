import React, { useState, useEffect, createContext } from "react";
import  Data   from '../Data.js'

export const DataContext = createContext();

export const DataProvider = (props) => {
    // Trabajo
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

// se importo los Id de productos.
    useEffect(() => {
        const producto = Data.items
        if (producto) {
            setProductos(producto)
        } else {
            setProductos([])
        }
        setProductos(producto)
    }, [])

  // Agregar productos al carrito con cada ID del producto

    const addCarrito = (id) => {
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if (check) {
            const data = productos.filter(producto => {
                return producto.id === id
            })
            setCarrito([...carrito,...data])
        } else {
            alert("El producto se ha añadido al carrito")
        }
    }

    // Se consume los datos del carrito con JSON para identificar cada producto
    useEffect(() => {
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito')
        )
        if (dataCarrito) {
            setCarrito(dataCarrito)
        }
    }, [])

    // Se utiliza una memoria para almacenar el ID de cada producto  dentro del carrito

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])

    // Se llama los productos para multiplicar y sumar el precio y cantidad.
    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
    return prev + (item.price * item.cantidad);
            }, 0)
            setTotal(res)
        }
        getTotal()
    },[carrito])
    
    // se importo productos, menu, agregar carrito, lo que hay dentro del carrito y el total.
    const value = {
        productos: [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }
    //si todo es verdad sobre el estado de cada funcion al integrar carrito y producto se importara su contexto.
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}