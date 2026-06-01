let listaDeCompras = [];

const agregarProducto = (producto) => {
  if (listaDeCompras.includes(producto)) {
    console.log(`"${producto}" ya está en la lista.`);
  } else {
    listaDeCompras.push(producto);
    console.log(`"${producto}" agregado correctamente.`);
  }
};