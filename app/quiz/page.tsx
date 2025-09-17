import {
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  Star,
  Trophy,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Quiz() {
  const temas = [
    {
      id: 1,
      titulo: "Introducción a la Inteligencia Artificial",
      descripcion: "Conceptos básicos, historia y aplicaciones de la IA",
      modulos: 3,
      duracion: "2 horas",
      completado: true,
      dificultad: "Básico",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      titulo: "Machine Learning Fundamentals",
      descripcion: "Algoritmos supervisados, no supervisados y por refuerzo",
      modulos: 5,
      duracion: "4 horas",
      completado: true,
      dificultad: "Intermedio",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 3,
      titulo: "Redes Neuronales",
      descripcion: "Perceptrón, backpropagation y deep learning",
      modulos: 4,
      duracion: "3 horas",
      completado: false,
      dificultad: "Avanzado",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      titulo: "Procesamiento de Lenguaje Natural",
      descripcion: "NLP, tokenización, análisis de sentimientos",
      modulos: 3,
      duracion: "2.5 horas",
      completado: false,
      dificultad: "Intermedio",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      titulo: "Visión por Computadora",
      descripcion: "CNN, reconocimiento de imágenes y objetos",
      modulos: 4,
      duracion: "3.5 horas",
      completado: false,
      dificultad: "Avanzado",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 6,
      titulo: "Ética en IA",
      descripcion: "Sesgos, privacidad y responsabilidad en IA",
      modulos: 2,
      duracion: "1.5 horas",
      completado: false,
      dificultad: "Básico",
      color: "from-teal-500 to-green-600",
    },
  ];

  const estadisticas = {
    totalTemas: temas.length,
    completados: temas.filter((tema) => tema.completado).length,
    horasTotal: temas.reduce((acc, tema) => acc + parseFloat(tema.duracion), 0),
    progresoGeneral: Math.round(
      (temas.filter((tema) => tema.completado).length / temas.length) * 100
    ),
  };

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-blue-900 to-tech-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-tech-purple-600 to-tech-cyan-500 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
              
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Aqui encontraras los conceptos clave del quiz
            </p>
          </div>
        </div>
      </section>

      {/* Panel de estadísticas */}

      {/* Grid de temas */}

      {/* Material de Estudio */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-tech-purple-400 to-tech-cyan-400 bg-clip-text text-transparent">
                Conceptos Clave del Quiz
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                pregunta:
                  "¿Qué es 'regularización' y cómo afecta a un modelo de machine learning?",
                concepto:
                  "Una técnica utilizada para evitar el overfitting penalizando la complejidad del modelo, lo que reduce los coeficientes de las características menos importantes.",
              },
              {
                pregunta:
                  "¿Qué es 'ensemble learning' y cómo mejora el rendimiento de los modelos de machine learning?",
                concepto:
                  "Una técnica que combina múltiples modelos de machine learning para formar un modelo más robusto y preciso, reduciendo el sesgo, la varianza, o ambos.",
              },
              {
                pregunta:
                  "¿Qué es un 'árbol de decisión' y cómo se utiliza en machine learning?",
                concepto:
                  "Un modelo de machine learning que divide los datos en ramas basadas en decisiones tomadas sobre las características, lo que lleva a una clasificación o predicción final.",
              },
              {
                pregunta:
                  "¿Qué es 'clustering jerárquico' y en qué contextos es útil?",
                concepto:
                  "Un método de agrupamiento que organiza los datos en una estructura de árbol basada en su similitud, lo que es útil en situaciones donde se desea entender las relaciones entre grupos.",
              },
              {
                pregunta:
                  "¿Qué es un 'k-Nearest Neighbors' (k-NN) y para qué se utiliza en machine learning?",
                concepto:
                  "Un algoritmo de clasificación que asigna una etiqueta a una nueva observación basándose en las etiquetas de sus k vecinos más cercanos en el espacio de características.",
              },
              {
                pregunta:
                  "¿Qué es 'Gradient Boosting' y cómo se diferencia de otros métodos de ensemble?",
                concepto:
                  "Un método de ensemble que crea nuevos modelos que corrigen los errores de los modelos anteriores de manera secuencial, mejorando la precisión del modelo final.",
              },
              {
                pregunta:
                  "¿Qué es la 'función de pérdida' en el entrenamiento de un modelo de machine learning?",
                concepto:
                  "Una función que mide la diferencia entre las predicciones del modelo y los valores reales, utilizada para ajustar los parámetros del modelo durante el entrenamiento.",
              },
              {
                pregunta:
                  "¿Qué es una 'matriz de confusión' y cómo se utiliza en la evaluación de modelos de clasificación?",
                concepto:
                  "Una tabla que muestra el desempeño de un modelo de clasificación al listar las verdaderas etiquetas versus las predicciones, ayudando a evaluar la precisión, la sensibilidad, y otras métricas del modelo.",
              },
              {
                pregunta:
                  "¿Qué es 'normalización' y por qué es importante en el preprocesamiento de datos?",
                concepto:
                  "El proceso de escalar las características de los datos para que todas tengan la misma escala, lo que es crucial para que los algoritmos de machine learning funcionen de manera óptima.",
              },
              {
                pregunta:
                  "¿Qué es 'dropout' en redes neuronales y cómo ayuda a prevenir el overfitting?",
                concepto:
                  "Una técnica de regularización que desactiva aleatoriamente un porcentaje de neuronas durante el entrenamiento de una red neuronal, lo que ayuda a prevenir el overfitting y mejora la capacidad de generalización del modelo.",
              },
              {
                pregunta:
                  "¿Qué es un 'perceptrón' en el contexto de redes neuronales?",
                concepto:
                  "La unidad básica de una red neuronal artificial, que toma una o más entradas, aplica un peso a cada una y produce una salida basada en una función de activación.",
              },
              {
                pregunta:
                  "¿Qué es el 'gradiente descendente' y cómo se utiliza en el entrenamiento de redes neuronales?",
                concepto:
                  "Un algoritmo de optimización que ajusta los pesos del modelo minimizando la función de pérdida iterativamente, moviéndose en la dirección del gradiente negativo.",
              },
              {
                pregunta:
                  "En el contexto de redes neuronales, ¿qué es 'backpropagation' y cuál es su propósito?",
                concepto:
                  "Un algoritmo para ajustar los pesos de una red neuronal utilizando el gradiente descendente, calculando el error en la salida y propagándolo hacia atrás a través de la red.",
              },
              {
                pregunta:
                  "¿Qué es 'Regularización L2' (Ridge Regression) y cómo afecta a un modelo de machine learning?",
                concepto:
                  "Una técnica de regularización que agrega una penalización proporcional al cuadrado de los coeficientes del modelo, ayudando a reducir el overfitting al evitar que los coeficientes se vuelvan demasiado grandes.",
              },
              {
                pregunta:
                  "¿Qué es la 'validación cruzada' (cross-validation) y cómo ayuda a evaluar el rendimiento de un modelo de machine learning?",
                concepto:
                  "Un método que divide el conjunto de datos en k partes, entrenando el modelo en k-1 partes y validándolo en la parte restante, para asegurar una evaluación más robusta y evitar el overfitting.",
              },
              {
                pregunta:
                  "¿Qué es 'aprendizaje por refuerzo' (Reinforcement Learning) y en qué contextos se utiliza?",
                concepto:
                  "Un tipo de aprendizaje en el que un agente aprende a tomar decisiones mediante la interacción con un entorno, recibiendo recompensas o castigos, y ajustando sus acciones para maximizar la recompensa a largo plazo.",
              },
              {
                pregunta:
                  "¿Qué es un 'algoritmo de clasificación' en el contexto de la inteligencia artificial?",
                concepto:
                  "Un conjunto de reglas que dividen los datos en categorías basadas en sus características, asignando una etiqueta a cada observación.",
              },
              {
                pregunta:
                  "¿Cuál es la diferencia principal entre el aprendizaje supervisado y no supervisado?",
                concepto:
                  "El aprendizaje supervisado utiliza datos etiquetados para entrenar el modelo, mientras que el no supervisado trabaja con datos sin etiquetas.",
              },
              {
                pregunta:
                  "¿Qué es el 'overfitting' en el entrenamiento de modelos de machine learning y cómo se puede prevenir?",
                concepto:
                  "El fenómeno en el que un modelo se ajusta demasiado a los datos de entrenamiento, capturando incluso el ruido, y se puede prevenir utilizando técnicas como la regularización y la validación cruzada.",
              },
              {
                pregunta:
                  "¿Qué es el 'aprendizaje por lotes' (batch learning)?",
                concepto:
                  "Un método de aprendizaje en el que el modelo se entrena utilizando todo el conjunto de datos de una vez, preferido cuando los datos no cambian frecuentemente o se tiene acceso a todos los datos en un solo lote.",
              },
            ].map((item, index) => (
              <div key={index} className="tech-card">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-tech-purple-600 to-tech-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-3 leading-relaxed">
                        {item.pregunta}
                      </h3>
                      <div className="bg-tech-darker/50 rounded-lg p-4 border-l-4 border-tech-cyan-400">
                        <p className="text-gray-300 leading-relaxed">
                          {item.concepto}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
