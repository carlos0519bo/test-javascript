import { Question } from '../interfaces/quest';

export const questions: Question[] = [
  {
    id: '1',
    title: '¿Donde se ejecuta Javascript?',
    options: [
      {
        id: 'resp-1',
        textoRespuesta: 'Lado del cliente & Servidor',
        isCorrect: true,
      },
      { id: 'resp-2', textoRespuesta: 'Base de datos', isCorrect: false },
      { id: 'resp-3', textoRespuesta: 'BIOS', isCorrect: false },
      {
        id: 'resp-04',
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
  {
    id: '13',
    title: '¿Qué significa JSON?',
    options: [
      {
        id: 'resp-52',
        textoRespuesta: 'JavaScript Object Notation',
        isCorrect: true,
      },
      {
        id: 'resp-53',
        textoRespuesta: 'JavaScript Object Navigation',
        isCorrect: false,
      },
      {
        id: 'resp-54',
        textoRespuesta: 'JavaScript Object Network',
        isCorrect: false,
      },
      {
        id: 'resp-055',
        textoRespuesta: 'JavaScript Output Name',
        isCorrect: false,
      },
    ],
  },
  {
    id: '14',
    title:
      '¿Cuál es la forma correcta de declarar una variable que tenga un valor fijo e inmutable?',
    options: [
      {
        id: 'resp-55',
        textoRespuesta: 'let myVariable = 10;',
        isCorrect: false,
      },
      {
        id: 'resp-56',
        textoRespuesta: 'var myVariable = 10;',
        isCorrect: false,
      },
      {
        id: 'resp-57',
        textoRespuesta: 'const myVariable = 10;',
        isCorrect: true,
      },
      {
        id: 'resp-58',
        textoRespuesta: 'myVariable = 10;',
        isCorrect: false,
      },
    ],
  },
  {
    id: '15',
    title: '¿Qué es el infinito negativo?',
    options: [
      {
        id: 'resp-099',
        textoRespuesta: 'El número mínimo representable en JavaScript',
        isCorrect: false,
      },
      {
        id: 'resp-60',
        textoRespuesta:
          'Es un número en JavaScript que puede ser derivado, al dividir el número negativo entre cero',
        isCorrect: true,
      },
      {
        id: 'resp-61',
        textoRespuesta: 'Cualquier número negativo',
        isCorrect: false,
      },
      {
        id: 'resp-62',
        textoRespuesta: 'No existe en JavaScript',
        isCorrect: false,
      },
    ],
  },
  {
    id: '16',
    title: '¿Qué es un cuadro de diálogo?',
    options: [
      {
        id: 'resp-63',
        textoRespuesta: 'Borde para dividir tablas',
        isCorrect: false,
      },
      {
        id: 'resp-64',
        textoRespuesta:
          'Es un cuadro que permite al usuario introducir datos, mediante un cuadro de texto',
        isCorrect: true,
      },
      {
        id: 'resp-65',
        textoRespuesta: 'Es un cuadro que envuelve los textos',
        isCorrect: false,
      },
      {
        id: 'resp-66',
        textoRespuesta: 'Borde para dividir tablas Todas las anteriores',
        isCorrect: false,
      },
    ],
  },
  {
    id: '17',
    title:
      '¿Cuál es la palabra clave utilizada para declarar una variable en JavaScript?',
    options: [
      {
        id: 'resp-79',
        textoRespuesta: 'let',
        isCorrect: true,
      },
      {
        id: 'resp-80',
        textoRespuesta: 'variable',
        isCorrect: false,
      },
      {
        id: 'resp-81',
        textoRespuesta: 'int',
        isCorrect: false,
      },
      {
        id: 'resp-82',
        textoRespuesta: 'if',
        isCorrect: false,
      },
    ],
  },
  {
    id: '18',
    title:
      '¿Cuál es el operador utilizado para concatenar cadenas de texto en JavaScript?',
    options: [
      {
        id: 'resp-83',
        textoRespuesta: '+',
        isCorrect: true,
      },
      {
        id: 'resp-84',
        textoRespuesta: '-',
        isCorrect: false,
      },
      {
        id: 'resp-85',
        textoRespuesta: '*',
        isCorrect: false,
      },
      {
        id: 'resp-86',
        textoRespuesta: '/',
        isCorrect: false,
      },
    ],
  },
  {
    id: '19',
    title:
      '¿Cuál de las siguientes opciones devuelve el número de elementos en un arreglo en JavaScript?',
    options: [
      {
        id: 'resp-87',
        textoRespuesta: 'arr.length',
        isCorrect: true,
      },
      {
        id: 'resp-88',
        textoRespuesta: 'arr.count',
        isCorrect: false,
      },
      {
        id: 'resp-89',
        textoRespuesta: 'arr.size',
        isCorrect: false,
      },
      {
        id: 'resp-90',
        textoRespuesta: 'arr.elements',
        isCorrect: false,
      },
    ],
  },
  {
    id: '20',
    title:
      '¿Cuál es el resultado de la siguiente expresión en JavaScript: 3 + 2 * 4 / 2 - 1?',
    options: [
      {
        id: 'resp-91',
        textoRespuesta: '8',
        isCorrect: false,
      },
      {
        id: 'resp-92',
        textoRespuesta: '7',
        isCorrect: true,
      },
      {
        id: 'resp-93',
        textoRespuesta: '9',
        isCorrect: false,
      },
      {
        id: 'resp-94',
        textoRespuesta: '6',
        isCorrect: false,
      },
    ],
  },
  {
    id: '21',
    title:
      '¿Cuál de los siguientes métodos de arreglos en JavaScript NO modifica el arreglo original?',
    options: [
      {
        id: 'resp-95',
        textoRespuesta: 'splice()',
        isCorrect: false,
      },
      {
        id: 'resp-96',
        textoRespuesta: 'push()',
        isCorrect: false,
      },
      {
        id: 'resp-97',
        textoRespuesta: 'concat()',
        isCorrect: true,
      },
      {
        id: 'resp-98',
        textoRespuesta: 'sort()',
        isCorrect: false,
      },
    ],
  },
  {
    id: '22',
    title:
      '¿Cuál es el resultado de la siguiente expresión en JavaScript: 10 % 3?',
    options: [
      {
        id: 'resp-99',
        textoRespuesta: '1',
        isCorrect: true,
      },
      {
        id: 'resp-100',
        textoRespuesta: '2',
        isCorrect: false,
      },
      {
        id: 'resp-101',
        textoRespuesta: '3',
        isCorrect: false,
      },
      {
        id: 'resp-102',
        textoRespuesta: '0',
        isCorrect: false,
      },
    ],
  },
  {
    id: '23',
    title:
      "¿Cuál es el resultado de la siguiente expresión en JavaScript: '5' + 2?",
    options: [
      {
        id: 'resp-103',
        textoRespuesta: '52',
        isCorrect: true,
      },
      {
        id: 'resp-104',
        textoRespuesta: '7',
        isCorrect: false,
      },
      {
        id: 'resp-105',
        textoRespuesta: 'Error',
        isCorrect: false,
      },
      {
        id: 'resp-106',
        textoRespuesta: 'NaN',
        isCorrect: false,
      },
    ],
  },
  {
    id: '24',
    title:
      '¿Cuál de los siguientes métodos de cadena en JavaScript NO modifica la cadena original?',
    options: [
      {
        id: 'resp-107',
        textoRespuesta: 'slice()',
        isCorrect: true,
      },
      {
        id: 'resp-108',
        textoRespuesta: 'toUpperCase()',
        isCorrect: false,
      },
      {
        id: 'resp-109',
        textoRespuesta: 'replace()',
        isCorrect: false,
      },
      {
        id: 'resp-110',
        textoRespuesta: 'trim()',
        isCorrect: false,
      },
    ],
  },
  {
    id: '25',
    title:
      '¿Cuál de las siguientes opciones NO es un método de arreglo en JavaScript?',
    options: [
      {
        id: 'resp-111',
        textoRespuesta: 'indexOf()',
        isCorrect: false,
      },
      {
        id: 'resp-112',
        textoRespuesta: 'slice()',
        isCorrect: false,
      },
      {
        id: 'resp-113',
        textoRespuesta: 'map()',
        isCorrect: false,
      },
      {
        id: 'resp-114',
        textoRespuesta: 'toJSON()',
        isCorrect: true,
      },
    ],
  },
  {
    id: '26',
    title:
      "¿Cuál es el resultado de la siguiente expresión en JavaScript: Boolean('false')?",
    options: [
      {
        id: 'resp-115',
        textoRespuesta: 'true',
        isCorrect: true,
      },
      {
        id: 'resp-116',
        textoRespuesta: 'false',
        isCorrect: false,
      },
      {
        id: 'resp-117',
        textoRespuesta: 'Error',
        isCorrect: false,
      },
      {
        id: 'resp-118',
        textoRespuesta: 'NaN',
        isCorrect: false,
      },
    ],
  },
  {
    id: '27',
    title:
      '¿Cuál de las siguientes opciones NO es una forma válida de declarar una variable en JavaScript?',
    options: [
      {
        id: 'resp-119',
        textoRespuesta: 'variable x;',
        isCorrect: true,
      },
      {
        id: 'resp-120',
        textoRespuesta: 'var x;',
        isCorrect: false,
      },
      {
        id: 'resp-121',
        textoRespuesta: 'let x;',
        isCorrect: false,
      },
      {
        id: 'resp-122',
        textoRespuesta: 'const x = 5;',
        isCorrect: false,
      },
    ],
  },
  {
    id: '28',
    title:
      '¿Cuál de las siguientes opciones NO es un operador de comparación en JavaScript?',
    options: [
      {
        id: 'resp-123',
        textoRespuesta: '===',
        isCorrect: false,
      },
      {
        id: 'resp-124',
        textoRespuesta: '<=',
        isCorrect: false,
      },
      {
        id: 'resp-125',
        textoRespuesta: '<>',
        isCorrect: true,
      },
      {
        id: 'resp-126',
        textoRespuesta: '>=',
        isCorrect: false,
      },
    ],
  },
  {
    id: '29',
    title:
      '¿Cuál es el resultado de la siguiente expresión en JavaScript: NaN === NaN?',
    options: [
      {
        id: 'resp-127',
        textoRespuesta: 'true',
        isCorrect: false,
      },
      {
        id: 'resp-128',
        textoRespuesta: 'false',
        isCorrect: true,
      },
      {
        id: 'resp-129',
        textoRespuesta: 'Error',
        isCorrect: false,
      },
      {
        id: 'resp-130',
        textoRespuesta: 'NaN',
        isCorrect: false,
      },
    ],
  },
  {
    id: '30',
    title:
      '¿Cuál de las siguientes opciones es la forma correcta de crear un objeto en JavaScript?',
    options: [
      {
        id: 'resp-131',
        textoRespuesta: 'obj = new Object();',
        isCorrect: false,
      },
      {
        id: 'resp-132',
        textoRespuesta: 'obj = {}',
        isCorrect: true,
      },
      {
        id: 'resp-133',
        textoRespuesta: 'obj = []',
        isCorrect: false,
      },
      {
        id: 'resp-134',
        textoRespuesta: 'obj = Object.create()',
        isCorrect: false,
      },
    ],
  },
];
