let listaDeCompras = [];

const agregarProducto = (producto) => {
  if (listaDeCompras.includes(producto)) {
    console.log(`"${producto}" ya está en la lista.`);
  } else {
    listaDeCompras.push(producto);
    console.log(`"${producto}" agregado correctamente.`);
  }
};

const eliminarProducto = (producto) => {
  const index = listaDeCompras.indexOf(producto);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`"${producto}" eliminado correctamente.`);
  } else {
    console.log(`"${producto}" no está en la lista.`);
  }
};

const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista está vacía.");
  } else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, i) => {
      console.log(`  ${i + 1}. ${producto}`);
    });
  }
};