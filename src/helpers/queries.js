const URL_Recetas = import.meta.env.VITE_API_RECETAS;

//GET
export const leerRecetaAPI = async () => {
  try {
    const respuesta = await fetch(URL_Recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Recetas + '/' + id);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URL_Recetas, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT
export const editarRecetaAPI = async (recetaModificada, id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recetaModificada),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//DELETE
export const borrarRecetaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Recetas}/${id}`, {
      method: 'DELETE',
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//detalle receta
const buscarReceta = (recetas, id) => {
  return recetas.find((receta) => receta.id === id);
};

export const obtenerRecetaPorID = async (id) => {
  try {
    const respuesta = await fetch(URL_Recetas);
    const recetas = await respuesta.json();
    const recetaEncontrada = buscarReceta(recetas, id);
    return recetaEncontrada;
  } catch (error) {
    console.log(error);
    return null;
  }
};
