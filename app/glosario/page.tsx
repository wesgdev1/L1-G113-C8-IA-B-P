"use client";

import { Search, BookOpen, Brain, Filter } from "lucide-react";
import { useState } from "react";

export default function Glosario() {
  const terminos = [
    {
      id: 1,
      termino: "Inteligencia Artificial (IA)",
      categoria: "Conceptos Básicos",
      definicion:
        "Campo de la informática que se enfoca en crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana.",
      ejemplo:
        "Asistentes virtuales como Siri o Alexa que pueden entender y responder preguntas en lenguaje natural.",
      relacionados: ["Machine Learning", "Deep Learning", "Algoritmo"],
    },
    {
      id: 2,
      termino: "Machine Learning",
      categoria: "Algoritmos",
      definicion:
        "Subcampo de la IA que permite a las máquinas aprender y mejorar automáticamente a partir de la experiencia sin ser programadas explícitamente.",
      ejemplo:
        "Sistema de recomendaciones de Netflix que aprende de tus preferencias para sugerir películas.",
      relacionados: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
      ],
    },
    {
      id: 3,
      termino: "Deep Learning",
      categoria: "Redes Neuronales",
      definicion:
        "Subcampo del machine learning basado en redes neuronales artificiales con múltiples capas (profundas) que pueden aprender representaciones complejas de datos.",
      ejemplo:
        "Reconocimiento facial en fotografías de redes sociales que puede identificar personas automáticamente.",
      relacionados: ["Red Neuronal", "CNN", "RNN"],
    },
    {
      id: 4,
      termino: "Algoritmo",
      categoria: "Conceptos Básicos",
      definicion:
        "Conjunto de instrucciones o reglas bien definidas y ordenadas que se utilizan para resolver un problema o realizar una tarea.",
      ejemplo:
        "Algoritmo de búsqueda de Google que determina qué páginas web mostrar para una consulta específica.",
      relacionados: ["Machine Learning", "Programación", "Lógica"],
    },
    {
      id: 5,
      termino: "Red Neuronal",
      categoria: "Redes Neuronales",
      definicion:
        "Modelo computacional inspirado en el funcionamiento del cerebro humano, compuesto por nodos interconectados (neuronas artificiales) que procesan información.",
      ejemplo:
        "Red neuronal que puede distinguir entre imágenes de gatos y perros después de ser entrenada con miles de ejemplos.",
      relacionados: ["Deep Learning", "Perceptrón", "Backpropagation"],
    },
    {
      id: 6,
      termino: "Supervised Learning",
      categoria: "Algoritmos",
      definicion:
        "Tipo de machine learning donde el algoritmo aprende usando datos de entrenamiento que incluyen tanto las entradas como las salidas correctas esperadas.",
      ejemplo:
        "Entrenar un modelo para detectar spam en emails usando una base de datos de correos ya clasificados como spam o no spam.",
      relacionados: ["Machine Learning", "Classification", "Regression"],
    },
    {
      id: 7,
      termino: "Unsupervised Learning",
      categoria: "Algoritmos",
      definicion:
        "Tipo de machine learning donde el algoritmo encuentra patrones ocultos en datos que no tienen etiquetas o respuestas predefinidas.",
      ejemplo:
        "Agrupar clientes de una tienda en segmentos basados en sus patrones de compra sin conocer previamente estos grupos.",
      relacionados: [
        "Machine Learning",
        "Clustering",
        "Dimensionality Reduction",
      ],
    },
    {
      id: 8,
      termino: "Natural Language Processing (NLP)",
      categoria: "Aplicaciones",
      definicion:
        "Rama de la IA que se enfoca en la interacción entre computadoras y lenguaje humano, permitiendo que las máquinas entiendan, interpreten y generen lenguaje natural.",
      ejemplo:
        "Google Translate que puede traducir texto de un idioma a otro manteniendo el significado original.",
      relacionados: ["Tokenización", "Sentiment Analysis", "Chatbot"],
    },
    {
      id: 9,
      termino: "Computer Vision",
      categoria: "Aplicaciones",
      definicion:
        "Campo de la IA que permite a las computadoras interpretar y analizar contenido visual del mundo real, como imágenes y videos.",
      ejemplo:
        "Cámaras de seguridad que pueden detectar automáticamente actividades sospechosas o reconocer rostros.",
      relacionados: ["CNN", "Image Recognition", "Object Detection"],
    },
    {
      id: 10,
      termino: "Dataset",
      categoria: "Datos",
      definicion:
        "Colección organizada de datos que se utiliza para entrenar, validar y probar algoritmos de machine learning.",
      ejemplo:
        "ImageNet, una base de datos con millones de imágenes etiquetadas usado para entrenar modelos de reconocimiento visual.",
      relacionados: ["Training Data", "Validation Data", "Test Data"],
    },
    {
      id: 11,
      termino: "Overfitting",
      categoria: "Problemas Comunes",
      definicion:
        "Problema que ocurre cuando un modelo aprende demasiado específicamente los datos de entrenamiento y no puede generalizar bien a datos nuevos.",
      ejemplo:
        "Un modelo que memoriza todas las respuestas del examen de práctica pero falla en el examen real con preguntas ligeramente diferentes.",
      relacionados: ["Underfitting", "Regularización", "Validation"],
    },
    {
      id: 12,
      termino: "Feature",
      categoria: "Datos",
      definicion:
        "Característica individual y medible de un objeto o fenómeno que se está observando. Los features son las variables de entrada para los algoritmos de ML.",
      ejemplo:
        "En un modelo para predecir precios de casas, los features podrían ser: número de habitaciones, área, ubicación, año de construcción.",
      relacionados: ["Feature Engineering", "Dataset", "Variables"],
    },
    {
      id: 13,
      termino: "Bias",
      categoria: "Ética y Problemas",
      definicion:
        "Sesgo sistemático en los datos o algoritmos que puede llevar a resultados injustos o discriminatorios.",
      ejemplo:
        "Un sistema de contratación que discrimina contra ciertos grupos demográficos porque fue entrenado con datos históricos sesgados.",
      relacionados: ["Fairness", "Ethics", "Discrimination"],
    },
    {
      id: 14,
      termino: "API",
      categoria: "Tecnología",
      definicion:
        "Interfaz de Programación de Aplicaciones que permite que diferentes software se comuniquen entre sí, facilitando la integración de servicios de IA.",
      ejemplo:
        "API de Google Cloud Vision que permite a desarrolladores agregar capacidades de reconocimiento de imágenes a sus aplicaciones.",
      relacionados: ["Integration", "Cloud Services", "REST"],
    },
    {
      id: 15,
      termino: "Chatbot",
      categoria: "Aplicaciones",
      definicion:
        "Programa de computadora diseñado para simular conversaciones con usuarios humanos, especialmente a través de internet.",
      ejemplo:
        "Asistente de atención al cliente en sitios web que puede responder preguntas frecuentes automáticamente.",
      relacionados: ["NLP", "Conversational AI", "Virtual Assistant"],
    },
  ];

  const categorias = Array.from(new Set(terminos.map((t) => t.categoria)));

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-tech-dark via-tech-cyan-900 to-tech-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-tech-cyan-600 to-tech-blue-500 rounded-2xl mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-tech-cyan-400 to-tech-blue-400 bg-clip-text text-transparent">
                Glosario de IA
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diccionario completo de términos y conceptos fundamentales de
              Inteligencia Artificial
            </p>
          </div>
        </div>
      </section>

      {/* Barra de búsqueda y filtros */}
      <section className="py-8 bg-tech-dark/50 sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Búsqueda */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar términos..."
                className="w-full pl-10 pr-4 py-3 bg-tech-dark border border-tech-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-tech-cyan-400 focus:ring-1 focus:ring-tech-cyan-400"
              />
            </div>

            {/* Filtro por categoría */}
            <div className="relative">
              <select className="appearance-none bg-tech-dark border border-tech-cyan-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tech-cyan-400 focus:ring-1 focus:ring-tech-cyan-400 pr-10">
                <option value="">Todas las categorías</option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-8 bg-tech-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="tech-card text-center">
              <BookOpen className="w-8 h-8 text-tech-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {terminos.length}
              </div>
              <div className="text-sm text-gray-400">Términos Definidos</div>
            </div>
            <div className="tech-card text-center">
              <Brain className="w-8 h-8 text-tech-blue-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">
                {categorias.length}
              </div>
              <div className="text-sm text-gray-400">Categorías</div>
            </div>
            <div className="tech-card text-center">
              <Search className="w-8 h-8 text-tech-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-gray-400">Cobertura del Curso</div>
            </div>
          </div>
        </div>
      </section>

      {/* Glosario rápido de ML con Python & Pandas */}
      <section className="py-16 bg-tech-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-tech-cyan-400 to-tech-blue-400 bg-clip-text text-transparent">
                📘 Glosario Rápido de ML con Python & Pandas
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comandos esenciales para manipulación de datos y machine learning
            </p>
          </div>

          <div className="tech-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-tech-cyan-500/30">
                    <th className="py-4 px-6 text-tech-cyan-400 font-semibold">
                      Término / Acción
                    </th>
                    <th className="py-4 px-6 text-tech-cyan-400 font-semibold">
                      Función / Comando
                    </th>
                    <th className="py-4 px-6 text-tech-cyan-400 font-semibold">
                      Ejemplo
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Leer CSV</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        pd.read_csv("archivo.csv")
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df = pd.read_csv("datos.csv")
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Leer Excel</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        pd.read_excel("archivo.xlsx")
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df = pd.read_excel("datos.xlsx")
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Guardar CSV</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.to_csv("salida.csv", index=False)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.to_csv("limpio.csv", index=False)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Ver primeras filas
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.head()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.head(10)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Ver últimas filas</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.tail()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.tail(3)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Tamaño (filas, columnas)
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.shape
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        (100, 5)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Info de tipos y nulos
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.info()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.info()
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Estadísticas básicas
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.describe()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.describe()
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Nombres de columnas
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.columns
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        print(df.columns)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Contar nulos</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.isnull().sum()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.isnull().sum()
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Eliminar filas nulas
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.dropna()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.dropna(inplace=True)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Eliminar columnas nulas
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.dropna(axis=1)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.dropna(axis=1, inplace=True)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Rellenar con valor fijo
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.fillna(0)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["edad"].fillna(0)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Rellenar con la media
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df["col"].fillna(df["col"].mean())
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["salario"].fillna(df["salario"].mean())
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Seleccionar columna
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df["col"]
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["nombre"]
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Seleccionar varias columnas
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df[["col1","col2"]]
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df[["edad","sexo"]]
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Filtrado por condición
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df[df["col"] &gt; 10]
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df[df["edad"] &gt; 18]
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Seleccionar por etiquetas
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.loc[fila, columna]
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.loc[0,"nombre"]
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Seleccionar por índices
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.iloc[fila, columna]
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.iloc[0,1]
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Eliminar columna</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.drop("col", axis=1)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.drop("id", axis=1, inplace=True)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Renombrar columna</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.rename(columns={'{"vieja":"nueva"}'})
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.rename(columns={'{"id":"user_id"}'}, inplace=True)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Nueva columna</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df["nueva"] = ...
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["total"] = df["precio"]*df["cantidad"]
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Aplicar función</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df["col"].apply(func)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["nombre"].apply(str.upper)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Convertir tipo de dato
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df["col"].astype(float)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["edad"] = df["edad"].astype(int)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">One-Hot Encoding</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        pd.get_dummies(df["col"])
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        pd.get_dummies(df["ciudad"])
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Mapear valores</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df["col"].map(diccionario)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["sexo"].map({'{"M":"Hombre","F":"Mujer"}'})
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Normalización Z-score
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        (df["col"]-df["col"].mean())/df["col"].std()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["peso_norm"]=(df["peso"]-df["peso"].mean())/df["peso"].std()
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Contar valores únicos
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df["col"].value_counts()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df["ciudad"].value_counts()
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Agrupar y calcular
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.groupby("col")["otra"].mean()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.groupby("sexo")["edad"].mean()
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Ordenar valores</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        df.sort_values("col")
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        df.sort_values("salario", ascending=False)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Separar train/test
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        train_test_split(X,y,test_size=0.2)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Estandarizar datos
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        StandardScaler().fit_transform()
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        X_train = scaler.fit_transform(X_train)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Entrenar modelo</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        modelo.fit(X_train, y_train)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        reg = LinearRegression().fit(X_train, y_train)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">Predecir</td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        modelo.predict(X_test)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        y_pred = reg.predict(X_test)
                      </code>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700/50 hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Error cuadrático medio
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        mean_squared_error(y_test, y_pred)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        mse = mean_squared_error(y_test, y_pred)
                      </code>
                    </td>
                  </tr>
                  <tr className="hover:bg-tech-dark/30 transition-colors">
                    <td className="py-3 px-6 font-medium">
                      Precisión (clasificación)
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-tech-cyan-300">
                        accuracy_score(y_test, y_pred)
                      </code>
                    </td>
                    <td className="py-3 px-6">
                      <code className="bg-tech-darker px-2 py-1 rounded text-gray-400">
                        accuracy_score(y_test, y_pred)
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de términos por categoría */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categorias.map((categoria) => {
            const terminosCategoria = terminos.filter(
              (t) => t.categoria === categoria
            );
            return (
              <div key={categoria} className="mb-16">
                {/* Título de categoría */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-tech-cyan-400 to-tech-blue-400 bg-clip-text text-transparent">
                      {categoria}
                    </span>
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-tech-cyan-500 to-tech-blue-500 rounded"></div>
                </div>

                {/* Grid de términos */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {terminosCategoria.map((item) => (
                    <div key={item.id} className="tech-card">
                      <div className="space-y-4">
                        {/* Término */}
                        <h3 className="text-xl font-bold text-white border-b border-tech-cyan-500/30 pb-2">
                          {item.termino}
                        </h3>

                        {/* Definición */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-tech-cyan-400 uppercase tracking-wide">
                            Definición
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {item.definicion}
                          </p>
                        </div>

                        {/* Ejemplo */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-tech-blue-400 uppercase tracking-wide">
                            Ejemplo
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed italic">
                            {item.ejemplo}
                          </p>
                        </div>

                        {/* Términos relacionados */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-tech-cyan-400 uppercase tracking-wide">
                            Términos Relacionados
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {item.relacionados.map((relacionado, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-tech-cyan-500/20 text-tech-cyan-300 text-sm rounded-full border border-tech-cyan-500/30 hover:bg-tech-cyan-500/30 transition-colors cursor-pointer"
                              >
                                {relacionado}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sección de ayuda */}
      <section className="py-16 bg-gradient-to-r from-tech-cyan-600 to-tech-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿No encuentras un término?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Nuestro glosario está en constante crecimiento. Si hay un término
            que te gustaría ver incluido, háznoslo saber.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/recursos"
              className="bg-white text-cyan-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explorar Recursos
            </a>
            <a
              href="/quiz"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Practicar Conceptos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
