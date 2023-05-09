export const getCoordinates = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      //resolve();
      //reject();  
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    //console.log("Datos desde la promesa");
    console.log(position);
    return {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
  } catch (_) {
    return null
  }
};
