import { Question } from '../interfaces/quest';

export const questions: Question[] = [
  {
    id: '1',
    title: '¿Donde se ejecuta Javascript?',
    options: [
      { id: 'resp-1', textoRespuesta: 'Lado del cliente', isCorrect: true },
      { id: 'resp-2', textoRespuesta: 'Servidor', isCorrect: false },
      { id: 'resp-3', textoRespuesta: 'BIOS', isCorrect: false },
      {
        id: 'resp-4',
        textoRespuesta: 'Ninguna de las anteriores',
        isCorrect: false,
      },
    ],
  },
  {
    id: '2',
    title: '¿Qué tipo de operador es (===)?',
    options: [
      { id: 'resp-4', textoRespuesta: 'Igualdad', isCorrect: false },
      { id: 'resp-5', textoRespuesta: 'Igualdad estricta', isCorrect: true },
      { id: 'resp-6', textoRespuesta: 'Desigualdad', isCorrect: false },
      { id: 'resp-7', textoRespuesta: 'Diferente a', isCorrect: false },
    ],
  },
  {
    id: '3',
    title: '¿Cuánto es `11`+ 1 en JavaScript?',
    options: [
      { id: 'resp-8', textoRespuesta: '111', isCorrect: true },
      { id: 'resp-9', textoRespuesta: '12', isCorrect: false },
      { id: 'resp-10', textoRespuesta: 'Syntax Error', isCorrect: false },
      { id: 'resp-11', textoRespuesta: '`11`1', isCorrect: false },
    ],
  },
  {
    id: '4',
    title: '¿En qué año fue creado JavaScript?',
    options: [
      { id: 'resp-12', textoRespuesta: '1997', isCorrect: false },
      { id: 'resp-13', textoRespuesta: '2001', isCorrect: false },
      { id: 'resp-14', textoRespuesta: '1987', isCorrect: false },
      { id: 'resp-15', textoRespuesta: '1995', isCorrect: true },
    ],
  },
  {
    id: '5',
    title:
      '¿Cuál es la sintaxis básica para declarar una variable en JavaScript?',
    options: [
      { id: 'resp-16', textoRespuesta: 'var myVar;', isCorrect: true },
      { id: 'resp-17', textoRespuesta: 'variable myVar;', isCorrect: false },
      { id: 'resp-18', textoRespuesta: 'v = myVar;', isCorrect: false },
      { id: 'resp-19', textoRespuesta: 'declare myVar;', isCorrect: false },
    ],
  },
  {
    id: '6',
    title: '¿Cuál es la diferencia entre == y === en JavaScript?',
    options: [
      {
        id: 'resp-20',
        textoRespuesta:
          'Ambos operadores realizan una comparación estricta de igualdad.',
        isCorrect: false,
      },
      {
        id: 'resp-21',
        textoRespuesta:
          'El operador == compara el valor y el tipo de datos, mientras que === solo compara el valor.',
        isCorrect: false,
      },
      {
        id: 'resp-22',
        textoRespuesta:
          'El operador === compara el valor y el tipo de datos, mientras que == solo compara el valor.',
        isCorrect: true,
      },
      {
        id: 'resp-23',
        textoRespuesta:
          '== y === son lo mismo y se pueden usar indistintamente.',
        isCorrect: false,
      },
    ],
  },
  {
    id: '5',
    title:
      '¿Cuál de las siguientes opciones se usa para agregar un comentario de una sola línea en JavaScript?',
    options: [
      {
        id: 'resp-24',
        textoRespuesta: '// Este es un comentario',
        isCorrect: true,
      },
      {
        id: 'resp-25',
        textoRespuesta: '/* Este es un comentario */',
        isCorrect: false,
      },
      {
        id: 'resp-26',
        textoRespuesta: '<!-- Este es un comentario -->',
        isCorrect: false,
      },
      {
        id: 'resp-27',
        textoRespuesta: ' ** Este es un comentario **',
        isCorrect: false,
      },
    ],
  },
  {
    id: '7',
    title:
      '¿Cuál es el método utilizado para agregar un elemento al final de un array en JavaScript?',
    options: [
      { id: 'resp-28', textoRespuesta: 'push()', isCorrect: true },
      { id: 'resp-29', textoRespuesta: 'add()', isCorrect: false },
      { id: 'resp-30', textoRespuesta: 'append()', isCorrect: false },
      { id: 'resp-31', textoRespuesta: 'insert()', isCorrect: false },
    ],
  },
  {
    id: '8',
    title:
      '¿Cuál es la sintaxis correcta para imprimir un mensaje en la consola en JavaScript?',
    options: [
      { id: 'resp-32', textoRespuesta: "print('Mensaje')", isCorrect: false },
      {
        id: 'resp-33',
        textoRespuesta: "console.log('Mensaje')",
        isCorrect: true,
      },
      { id: 'resp-34', textoRespuesta: "log('Mensaje')", isCorrect: false },
      { id: 'resp-35', textoRespuesta: "display('Mensaje')", isCorrect: false },
    ],
  },
  {
    id: '9',
    title:
      '¿Cuál de las siguientes opciones es un método para convertir una cadena en minúsculas en JavaScript?',
    options: [
      { id: 'resp-36', textoRespuesta: 'toLowerCase()', isCorrect: true },
      { id: 'resp-37', textoRespuesta: 'toUpperCase()', isCorrect: false },
      { id: 'resp-38', textoRespuesta: 'convertToLower()', isCorrect: false },
      {
        id: 'resp-39',
        textoRespuesta: 'convertToLowerCase()',
        isCorrect: false,
      },
    ],
  },
  {
    id: '10',
    title:
      '¿Cuál es el resultado al ejecutar el siguiente código? console.log(typeof 42);',
    options: [
      { id: 'resp-40', textoRespuesta: 'number', isCorrect: true },
      { id: 'resp-41', textoRespuesta: 'string', isCorrect: false },
      { id: 'resp-42', textoRespuesta: 'boolean', isCorrect: false },
      { id: 'resp-43', textoRespuesta: 'undefined', isCorrect: false },
    ],
  },
  {
    id: '11',
    title:
      '¿Cuál de los siguientes métodos se utiliza para eliminar el último elemento de un array en JavaScript?',
    options: [
      { id: 'resp-44', textoRespuesta: 'pop()', isCorrect: true },
      { id: 'resp-45', textoRespuesta: 'remove()', isCorrect: false },
      { id: 'resp-46', textoRespuesta: 'delete()', isCorrect: false },
      { id: 'resp-47', textoRespuesta: 'splice()', isCorrect: false },
    ],
  },
  {
    id: '12',
    title: '¿Cuál es la forma correcta de declarar una función en JavaScript?',
    options: [
      {
        id: 'resp-48',
        textoRespuesta: 'function myFunction() {}',
        isCorrect: true,
      },
      {
        id: 'resp-49',
        textoRespuesta: 'myFunction() = function() {}',
        isCorrect: false,
      },
      {
        id: 'resp-50',
        textoRespuesta: 'def myFunction() {}',
        isCorrect: false,
      },
      {
        id: 'resp-51',
        textoRespuesta: 'myFunction = () => {}',
        isCorrect: false,
      },
    ],
  },
];
