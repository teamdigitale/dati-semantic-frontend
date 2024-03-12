// Funzione helper per verificare se un valore è un oggetto
const isObject = (obj) => {
  return obj != null && typeof obj === "object";
};

export const equalsObj = (obj1, obj2) => {
  // Ottieni le chiavi di entrambi gli oggetti
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Verifica se il numero di proprietà è diverso
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Verifica se i valori di ciascuna chiave sono uguali
  for (let key of keys1) {
    const val1 = obj1[key];
    const val2 = obj2[key];
    const areObjs = isObject(val1) && isObject(val2);

    // Se sono entrambi oggetti, esegui un confronto ricorsivo
    if (areObjs && !equalsObj(val1, val2)) {
      return false;
    }
    // Se non sono oggetti, verifica se i valori sono uguali
    else if (!areObjs && val1 !== val2) {
      return false;
    }
  }

  // Se non ci sono discrepanze, gli oggetti sono uguali
  return true;
};
