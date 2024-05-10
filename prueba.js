const csv = require('csv-parser');
const Readable = require('stream').Readable;

// Texto CSV de ejemplo (la respuesta del servicio)
const csvText = `file,text,number,hex
test3.csv,M,066
test3.csv,iLRTuEeqNpFzfWQWQOtMmP,2,a802927fcc6f671ba596ac235e8ac582
test3.csv,hRjhp,5,336348605957292f5ca117c5dfbf8936
test3.csv,IajPHIhexzZFWKtPYSOzPBZ,493211948,480763e327480b27d8a06aac69194c34`;

// Convertir el texto CSV en un stream legible
const csvStream = new Readable();
csvStream.push(csvText);
csvStream.push(null); // Señal de fin de archivo

const resultados = [];

csvStream
  .pipe(csv())
  .on('data', (row) => {
    resultados.push(row);
  })
  .on('end', () => {
    console.log('Archivo CSV convertido a JSON:', resultados);
    // Aquí puedes hacer lo que quieras con los datos JSON, como enviarlos a través de una respuesta HTTP, etc.
  })
  .on('error', (error) => {
    console.error('Error al analizar el CSV:', error);
  });