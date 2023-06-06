export interface Quest {
  textoRespuesta: string;
  isCorrect: boolean;
  id: string;
}

export interface Question {
  title: string;
  options: Quest[];
  id: string;
}
