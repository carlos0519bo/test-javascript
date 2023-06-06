export const questions = [
  {
    title: '¿Donde se ejecuta Javascript?',
    options: [
      { textoRespuesta: 'Lado del cliente', isCorrect: true },
      { textoRespuesta: 'Servidor', isCorrect: false },
      { textoRespuesta: 'BIOS', isCorrect: false },
      { textoRespuesta: 'Ninguna de las anteriores', isCorrect: false },
    ],
  },
  {
    title: '¿Qué tipo de operador es (===)?',
    options: [
      { textoRespuesta: 'Igualdad', isCorrect: false },
      { textoRespuesta: 'Igualdad estricta', isCorrect: true },
      { textoRespuesta: 'Desigualdad', isCorrect: false },
      { textoRespuesta: 'Diferente a', isCorrect: false },
    ],
  },
  {
    title: '¿Cuánto es `11`+ 1 en JavaScript?',
    options: [
      { textoRespuesta: '111', isCorrect: true },
      { textoRespuesta: '12', isCorrect: false },
      { textoRespuesta: 'Syntax Error', isCorrect: false },
      { textoRespuesta: '`11`1', isCorrect: false },
    ],
  },
  {
    title: '¿En qué año fue creado JavaScript?',
    options: [
      { textoRespuesta: '1997', isCorrect: false },
      { textoRespuesta: '2001', isCorrect: false },
      { textoRespuesta: '1987', isCorrect: false },
      { textoRespuesta: '1995', isCorrect: true },
    ],
  },
  {
    title:
      '¿Cuál es la sintaxis básica para declarar una variable en JavaScript?',
    options: [
      { textoRespuesta: 'var myVar;', isCorrect: true },
      { textoRespuesta: 'variable myVar;', isCorrect: false },
      { textoRespuesta: 'v = myVar;', isCorrect: false },
      { textoRespuesta: 'declare myVar;', isCorrect: false },
    ],
  },
  {
    title: '¿Cuál es la diferencia entre == y === en JavaScript?',
    options: [
      {
        textoRespuesta:
          'Ambos operadores realizan una comparación estricta de igualdad.',
        isCorrect: false,
      },
      {
        textoRespuesta:
          'El operador == compara el valor y el tipo de datos, mientras que === solo compara el valor.',
        isCorrect: false,
      },
      {
        textoRespuesta:
          'El operador === compara el valor y el tipo de datos, mientras que == solo compara el valor.',
        isCorrect: true,
      },
      {
        textoRespuesta:
          '== y === son lo mismo y se pueden usar indistintamente.',
        isCorrect: false,
      },
    ],
  },
  {
    title:
      '¿Cuál de las siguientes opciones se usa para agregar un comentario de una sola línea en JavaScript?',
    options: [
      { textoRespuesta: '// Este es un comentario', isCorrect: true },
      { textoRespuesta: '/* Este es un comentario */', isCorrect: false },
      { textoRespuesta: '<!-- Este es un comentario -->', isCorrect: false },
      { textoRespuesta: ' ** Este es un comentario **', isCorrect: false },
    ],
  },
  {
    title:
      '¿Cuál es el método utilizado para agregar un elemento al final de un array en JavaScript?',
    options: [
      { textoRespuesta: 'push()', isCorrect: true },
      { textoRespuesta: 'add()', isCorrect: false },
      { textoRespuesta: 'append()', isCorrect: false },
      { textoRespuesta: 'insert()', isCorrect: false },
    ],
  },
  {
    title:
      '¿Cuál es la sintaxis correcta para imprimir un mensaje en la consola en JavaScript?',
    options: [
      { textoRespuesta: "print('Mensaje')", isCorrect: false },
      { textoRespuesta: "console.log('Mensaje')", isCorrect: true },
      { textoRespuesta: "log('Mensaje')", isCorrect: false },
      { textoRespuesta: "display('Mensaje')", isCorrect: false },
    ],
  },
  {
    title:
      '¿Cuál de las siguientes opciones es un método para convertir una cadena en minúsculas en JavaScript?',
    options: [
      { textoRespuesta: 'toLowerCase()', isCorrect: true },
      { textoRespuesta: 'toUpperCase()', isCorrect: false },
      { textoRespuesta: 'convertToLower()', isCorrect: false },
      { textoRespuesta: 'convertToLowerCase()', isCorrect: false },
    ],
  },
  {
    title:
      '¿Cuál es el resultado al ejecutar el siguiente código? console.log(typeof 42);',
    options: [
      { textoRespuesta: 'number', isCorrect: true },
      { textoRespuesta: 'string', isCorrect: false },
      { textoRespuesta: 'boolean', isCorrect: false },
      { textoRespuesta: 'undefined', isCorrect: false },
    ],
  },
  {
    title:
      '¿Cuál de los siguientes métodos se utiliza para eliminar el último elemento de un array en JavaScript?',
    options: [
      { textoRespuesta: 'pop()', isCorrect: true },
      { textoRespuesta: 'remove()', isCorrect: false },
      { textoRespuesta: 'delete()', isCorrect: false },
      { textoRespuesta: 'splice()', isCorrect: false },
    ],
  },
  {
    title: '¿Cuál es la forma correcta de declarar una función en JavaScript?',
    options: [
      { textoRespuesta: 'function myFunction() {}', isCorrect: true },
      { textoRespuesta: 'myFunction() = function() {}', isCorrect: false },
      { textoRespuesta: 'def myFunction() {}', isCorrect: false },
      { textoRespuesta: 'myFunction = () => {}', isCorrect: false },
    ],
  },
];
