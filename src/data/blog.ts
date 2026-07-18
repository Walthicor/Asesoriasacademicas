import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Metodología"
    | "Escritura"
    | "Estadística"
    | "Normas APA"
    | "Sustentación";
  date: string; // ISO
  dateLabel: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  relatedService: { titulo: string; to: string; texto: string };
  blocks: ArticleBlock[];
};

export const CATEGORIES = [
  "Todos",
  "Metodología",
  "Escritura",
  "Estadística",
  "Normas APA",
  "Sustentación",
] as const;

export const articles: Article[] = [
  {
    slug: "como-elegir-tema-tesis-5-criterios",
    title:
      "Cómo elegir el tema de tu tesis: 5 criterios que usan los buenos investigadores",
    excerpt:
      "Elegir bien el tema puede ahorrarte meses de retrabajo. Estos cinco criterios te ayudan a decidir con cabeza fría antes de escribir la primera línea.",
    category: "Metodología",
    date: "2026-06-12",
    dateLabel: "12 de junio de 2026",
    readingMinutes: 7,
    image: blog2,
    imageAlt: "Estudiante analizando temas de investigación",
    relatedService: {
      titulo: "Asesoría de tesis",
      to: "/asesoria-de-tesis",
      texto:
        "Un asesor especializado te ayuda a delimitar tu tema y a planear cada capítulo.",
    },
    blocks: [
      {
        type: "p",
        text: "Casi todas las tesis que se estancan comparten un problema de origen: el tema fue elegido por impulso, por moda o porque el profesor lo sugirió sin más criterio. Después de acompañar a miles de estudiantes, hemos visto que los buenos investigadores aplican, consciente o intuitivamente, cinco filtros antes de comprometerse con un tema. Aplícalos tú también.",
      },
      { type: "h2", id: "interes", text: "1. Interés genuino y sostenido" },
      {
        type: "p",
        text: "Una tesis dura meses. Si el tema no te importa de verdad, cada revisión pesará el doble. Pregúntate: ¿leería sobre esto en mi tiempo libre? ¿podría explicarlo con entusiasmo a un amigo? Un interés real no garantiza rigor, pero sin él el proyecto se vuelve una carga insostenible.",
      },
      {
        type: "quote",
        text: "El mejor combustible metodológico es la curiosidad genuina: sostiene la disciplina cuando la motivación externa se agota.",
      },
      { type: "h2", id: "factibilidad", text: "2. Factibilidad real" },
      {
        type: "p",
        text: "Un buen tema es aquel que efectivamente puedes ejecutar con los recursos que tienes: tiempo, acceso a la población de estudio, permisos institucionales, presupuesto y competencias técnicas. Muchos proyectos ambiciosos fracasan porque nadie preguntó al inicio: ¿podré aplicar 400 encuestas presenciales trabajando en jornada completa?",
      },
      {
        type: "ul",
        items: [
          "¿Tengo acceso a la muestra que necesito?",
          "¿Dispongo de instrumentos o debo diseñarlos?",
          "¿Cuento con software especializado (SPSS, NVivo, AtlasTi)?",
          "¿Me alcanza el semestre para recolectar y analizar datos?",
        ],
      },
      { type: "h2", id: "vacio", text: "3. Vacío o aporte identificable" },
      {
        type: "p",
        text: "Una tesis no repite lo ya dicho: aporta algo. Ese aporte no siempre es un descubrimiento revolucionario; puede ser una nueva población, un contexto local, un instrumento adaptado o una integración teórica. Haz una revisión bibliográfica preliminar en Scopus, Scielo y repositorios universitarios y pregúntate: ¿dónde encaja lo que quiero decir? Si todo ya está dicho, replantea el ángulo.",
      },
      { type: "h2", id: "delimitacion", text: "4. Delimitación estricta" },
      {
        type: "p",
        text: "El tema debe caber en una tesis, no en una enciclopedia. Delimítalo por población, período, lugar y variables específicas. \"Educación en Colombia\" no es un tema; \"factores asociados a la deserción en programas técnicos del SENA en Antioquia entre 2020 y 2024\" sí lo es. Cuanto más específico, más manejable y defendible.",
      },
      { type: "h2", id: "relevancia", text: "5. Relevancia académica y profesional" },
      {
        type: "p",
        text: "Piensa a mediano plazo: ¿este tema me abre puertas? Un buen tema conecta con tu trayectoria profesional, con líneas de investigación de tu programa o con problemáticas reales de tu sector. Además de defenderlo, luego lo podrás capitalizar en artículos, ponencias o entrevistas laborales.",
      },
      { type: "h2", id: "cierre", text: "Antes de escribir la primera línea" },
      {
        type: "p",
        text: "Escribe tu tema en una sola oración y somételo a los cinco filtros. Si alguno falla, ajusta antes de invertir semanas de trabajo. Y recuerda: elegir bien el tema no es un lujo metodológico, es la decisión más rentable de toda tu tesis.",
      },
    ],
  },
  {
    slug: "normas-apa-7-en-10-minutos",
    title: "Normas APA 7 en 10 minutos: los errores que más puntos te quitan",
    excerpt:
      "APA 7 parece infinita, pero el 80% de los descuentos vienen de una decena de errores. Domínalos y tu documento gana profesionalismo al instante.",
    category: "Normas APA",
    date: "2026-06-25",
    dateLabel: "25 de junio de 2026",
    readingMinutes: 8,
    image: blog1,
    imageAlt: "Documento académico con formato APA",
    relatedService: {
      titulo: "Formato y citación APA 7",
      to: "/normas-apa",
      texto:
        "Aplicamos APA 7 a tu documento y te capacitamos para que cites sin errores.",
    },
    blocks: [
      {
        type: "p",
        text: "APA 7 es un estándar internacional que parece complicado hasta que descubres que en la práctica los jurados revisan casi siempre los mismos puntos. Esta guía condensa los errores más frecuentes que vemos en tesis y trabajos de grado, y te da la versión corta y correcta.",
      },
      { type: "h2", id: "formato-general", text: "Formato general del documento" },
      {
        type: "p",
        text: "APA 7 exige interlineado 2.0 en todo el cuerpo (sí, incluso en la lista de referencias), márgenes de 2.54 cm por lado, sangría de 1.27 cm al inicio de cada párrafo y numeración en la esquina superior derecha desde la portada. Fuentes admitidas: Times New Roman 12, Calibri 11, Arial 11, Georgia 11 o Lucida 10. Elige una y respétala en todo el documento.",
      },
      { type: "h2", id: "citas", text: "Citas dentro del texto" },
      {
        type: "p",
        text: "La regla es simple: cita corta (menos de 40 palabras) va entre comillas dentro del párrafo; cita larga va en párrafo aparte, sangría de 1.27 cm y sin comillas. En ambos casos, el paréntesis lleva apellido, año y página.",
      },
      {
        type: "ul",
        items: [
          "Cita narrativa: García (2023) señala que…",
          "Cita entre paréntesis: … (García, 2023, p. 45).",
          "Tres o más autores: (García et al., 2023). Nunca listes a todos.",
          "Cita de cita: evítala; busca la fuente original.",
        ],
      },
      { type: "h2", id: "referencias", text: "Lista de referencias" },
      {
        type: "p",
        text: "El error más común es la incoherencia entre lo citado y lo referenciado: cada cita del texto debe tener su entrada en la lista, y viceversa. Ordena alfabéticamente, aplica sangría francesa (colgante) y usa cursivas solo en el título de la obra o de la revista, según el tipo de fuente.",
      },
      {
        type: "quote",
        text: "Si algo aparece en tus referencias pero no en el texto, sobra. Si algo aparece en el texto pero no en las referencias, es un descuento seguro.",
      },
      { type: "h2", id: "dois", text: "DOI y enlaces" },
      {
        type: "p",
        text: "APA 7 pide incluir DOI como hipervínculo (https://doi.org/...) siempre que exista. Para fuentes web sin DOI, se incluye la URL directa. Ya no se antepone \"Recuperado de\" salvo cuando el contenido puede cambiar (por ejemplo, un tuit o una entrada de Wikipedia).",
      },
      { type: "h2", id: "tablas-figuras", text: "Tablas y figuras" },
      {
        type: "p",
        text: "Cada tabla y figura debe estar numerada (Tabla 1, Figura 1), tener un título en cursiva debajo del número y una nota de fuente si no es de elaboración propia. Se referencian en el texto por su número (\"como se observa en la Tabla 3\"), no por su ubicación (\"en la tabla de abajo\").",
      },
      { type: "h2", id: "portada", text: "Portada versión estudiante" },
      {
        type: "p",
        text: "APA 7 introdujo la portada versión estudiante: título centrado en la mitad superior, nombre del autor, filiación institucional, código del curso, nombre del profesor y fecha. Sin encabezado de cornisa (running head), que en la versión estudiante se elimina.",
      },
      { type: "h2", id: "checklist", text: "Checklist final antes de entregar" },
      {
        type: "ol",
        items: [
          "Fuente y tamaño consistentes en todo el documento.",
          "Todas las citas del texto están en la lista de referencias.",
          "Referencias con sangría francesa y ordenadas alfabéticamente.",
          "DOIs como hipervínculos vivos.",
          "Tablas y figuras numeradas y con nota de fuente.",
          "Portada versión estudiante correcta.",
        ],
      },
      {
        type: "p",
        text: "Con estos ajustes te ahorras el 80% de los descuentos por forma. Y sí, vale la pena revisarlo antes: entregar impecable transmite rigor incluso antes de que el jurado empiece a leer el contenido.",
      },
    ],
  },
  {
    slug: "que-prueba-estadistica-usar-en-tu-tesis",
    title: "Qué prueba estadística usar en tu tesis: guía simple para no estadísticos",
    excerpt:
      "Elegir la prueba equivocada invalida meses de trabajo. Con estas cuatro preguntas y un mapa mental sabrás por dónde empezar sin ser estadístico.",
    category: "Estadística",
    date: "2026-07-04",
    dateLabel: "4 de julio de 2026",
    readingMinutes: 9,
    image: blog3,
    imageAlt: "Gráficos estadísticos en pantalla",
    relatedService: {
      titulo: "Análisis estadístico con SPSS",
      to: "/analisis-estadistico-spss",
      texto:
        "Te capacitamos para procesar e interpretar tus datos con solvencia.",
    },
    blocks: [
      {
        type: "p",
        text: "La pregunta más común en asesoría estadística no es cómo se corre una prueba en SPSS, sino cuál corresponde. Y no es un misterio: elegir la prueba adecuada depende de responder ordenadamente cuatro preguntas. Esta guía es un mapa mental, no un curso, pero te evitará el error más caro de una tesis cuantitativa.",
      },
      { type: "h2", id: "objetivo", text: "1. ¿Qué quieres saber?" },
      {
        type: "p",
        text: "Empieza por el objetivo, no por el dato. Toda pregunta cuantitativa cae en una de tres familias: describir un fenómeno, comparar grupos o poblaciones, o establecer una relación entre variables. Si tu objetivo es describir, las medidas descriptivas y las frecuencias son suficientes. Si es comparar o relacionar, necesitarás inferencia estadística.",
      },
      { type: "h2", id: "variables", text: "2. ¿Qué tipo de variables tienes?" },
      {
        type: "p",
        text: "El tipo de variable determina la familia de pruebas. Simplifica así: cualitativa (nominal u ordinal) o cuantitativa (intervalar o de razón). No mezcles: una escala Likert de 5 puntos puede tratarse como ordinal (más conservador) o como cuantitativa (más común en la práctica), pero elige y justifícalo.",
      },
      {
        type: "ul",
        items: [
          "Comparar promedios entre dos grupos: t de Student (paramétrica) o U de Mann-Whitney (no paramétrica).",
          "Comparar promedios entre tres o más grupos: ANOVA o Kruskal-Wallis.",
          "Relacionar dos variables cuantitativas: correlación de Pearson o Spearman.",
          "Relacionar dos variables cualitativas: Chi cuadrado.",
          "Predecir: regresión lineal, logística o múltiple según el caso.",
        ],
      },
      { type: "h2", id: "supuestos", text: "3. ¿Se cumplen los supuestos?" },
      {
        type: "p",
        text: "Las pruebas paramétricas (t, ANOVA, Pearson, regresión) exigen normalidad de los datos, homogeneidad de varianzas y una muestra razonable. Verifícalo con Kolmogorov-Smirnov o Shapiro-Wilk y con Levene. Si no se cumplen, usa el equivalente no paramétrico y no fuerces el resultado: el jurado leerá tu prueba de normalidad.",
      },
      {
        type: "quote",
        text: "Correr una t de Student sin comprobar normalidad es como ganar un partido sin árbitro: el resultado no cuenta.",
      },
      { type: "h2", id: "muestra", text: "4. ¿De qué tamaño es tu muestra?" },
      {
        type: "p",
        text: "Muestras pequeñas (n<30) sesgan hacia pruebas no paramétricas. Muestras grandes toleran análisis más complejos como ANOVA factorial, regresión logística o modelos multivariados. Además, calcula desde el inicio el tamaño mínimo con una fórmula muestral: te ahorrará que un jurado te cuestione la representatividad.",
      },
      { type: "h2", id: "mapa", text: "Mapa rápido de decisión" },
      {
        type: "ol",
        items: [
          "Describir → media, mediana, moda, frecuencias, tablas de contingencia.",
          "Comparar 2 grupos cuantitativos → t o U de Mann-Whitney.",
          "Comparar 3+ grupos cuantitativos → ANOVA o Kruskal-Wallis + post hoc.",
          "Relación cuanti-cuanti → Pearson o Spearman según normalidad.",
          "Relación cuali-cuali → Chi cuadrado (+ V de Cramer para tamaño de efecto).",
          "Predicción con desenlace continuo → regresión lineal múltiple.",
          "Predicción con desenlace binario → regresión logística.",
        ],
      },
      { type: "h2", id: "interpretacion", text: "Interpretar, no solo reportar" },
      {
        type: "p",
        text: "Una tabla de SPSS no defiende tu tesis: la defiende tu lectura de esa tabla. Reporta siempre valor del estadístico, grados de libertad, valor p y tamaño de efecto. Y traduce a lenguaje natural: qué significa en tu problema real. Un p<0.05 sin interpretación no dice nada; un tamaño de efecto explicado dice todo.",
      },
      {
        type: "p",
        text: "Si respondes las cuatro preguntas y sigues el mapa, tomarás decisiones estadísticas defendibles aunque no seas estadístico. Y si te queda una duda, acompáñate: elegir mal la prueba puede costarte semanas de reanálisis que un asesor experimentado detecta en 15 minutos.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(cat: string): Article[] {
  if (cat === "Todos") return articles;
  return articles.filter((a) => a.category === cat);
}
