import Question from "./Question";
import Divider from "./Divider";

function FrequentQuestions(){
  const questions = [
    {
      question: "Ventanilla Única de Comercio Exterior Mexicano (VUCEM)",
      response: "Es una solución que permite a los usuarios enviar información en forma electrónica,  mediante una página web, para efectuar los trámites de las distintas regulaciones y restricciones no arancelarias de comercio exterior que emiten 10 dependencias gubernamentales: SAT, SE-DGN, AGRICULTURA, SEMARNAT, SEDENA, SALUD, SENER, PROFEPA, INBA, INAH y dos organismos reguladores AMECAFE y CRT.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Sistema Electrónico Aduanero (SEA)",
      response: "Es una herramienta informática de la autoridad aduanera, que permite y facilita a las diferentes figuras autorizadas para llevar a cabo el despacho aduanero de mercancías de comercio exterior, llevar a cabo los diferentes procesos establecido para la transmisión de información relacionada con los trámites de comercio exterior por medio de documentos digitales o electrónicos.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Documento electrónico",
      response: "Todo mensaje que contiene información escrita en datos generada, transmitida, comunicada, presentada, recibida, archivada o almacenada por medios electrónicos o cualquier otro medio tecnológico.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Documento digital.",
      response: "Todo mensaje que contiene información por reproducción electrónica de documentos escritos o impresos, transmitida, comunicada, presentada, recibida, archivada o almacenada, por medios electrónicos o cualquier otro medio tecnológico.      ",
      color: "black",
      bg: 'white'
    },
    {
      question: "Pedimento",
      response: "La declaración en documento electrónico, generada y transmitida respecto del cumplimiento de los ordenamientos que gravan y regulan la entrada o salida de mercancías del territorio nacional, en la que se contiene la información relativa a las mercancías, el tráfico y régimen aduanero al que se destinan, y los demás datos exigidos para cumplir con las formalidades de su entrada o salida del territorio nacional, así como la exigida conforme a las disposiciones aplicables.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Aviso consolidado.",
      response: "La declaración en documento electrónico, generada y transmitida respecto del cumplimiento de los ordenamientos que gravan y regulan la entrada o salida de mercancías del territorio nacional, en la que se contiene información relativa a las operaciones que se consolidan en un pedimento, en la forma y con la información requerida por el Servicio de Administración Tributaria mediante reglas.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Comprobante de Valor Electrónico (COVE). ",
      response: "Es un módulo de Ventanilla Única que permite la recepción, de manera anticipada, de la información de los documentos que comprueban el valor de las mercancías, así como la información de los documentos de cruce de remesas de consolidados.\n El COVE es el Comprobante de Valor Electrónico, este sistema recibe y valida de forma anticipada la documentación que comprueba el valor comercial de las mercancías durante los despachos en aduanas. Sólo tienes que cargar los datos del documento que comprueba el valor de la mercancía en la Ventanilla Única del SAT (VUCEM), para que te arroje el COVE.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Reconocimiento Previo de Mercancía. ",
      response: "El reconocimiento previo es la facultad del dueño, consignatario o sus comitentes de realizar en presencia del depositario, la constatación y verificación de la situación y condición de la mercancía o extraer muestras de la misma, antes de la presentación de la declaración de mercancías, previo aviso a la autoridad.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Prevalidación de Pedimento.",
      response: "La prevalidación consiste en comprobar que los datos asentados en el pedimento, estén dentro de los criterios sintácticos, catalógicos, estructurales y normativos, conforme se establezca por el Servicio de Administración Tributaria, para ser presentados al sistema electrónico del propio Servicio (Art. 16-A de la L.A.). ",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Validación de Pedimento.",
      response: "Una vez que el sistema de prevalidación analiza que la información declarada en un pedimento cumple con lo señalado en el punto anterior, se generará un archivo que se enviará para su validación al SEA.\n El SEA verificará que el archivo de validación cumpla con los criterios sintácticos, catalógicos, estructurales y normativos, conforme se establezca por el Servicio de Administración Tributaria y, en caso de no detectarse ningún error en su contenido arrojará el acuse electrónico de validación con el cual se considerará que el pedimento ha sido validado y que puede presentarse para su pago ante las instituciones de crédito autorizadas para recibir el pago de contribuciones o en su caso a través del sistema electrónico de pago.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Despacho aduanero",
      response: "Como lo establece el artículo 35 de la Ley Aduanera es el conjunto de actos y formalidades relativos a la entrada de mercancías al territorio nacional y a su salida del mismo, que de acuerdo con los diferentes tráficos y regímenes aduaneros establecidos en la ley aduanero, deben realizar ante la aduana, las autoridades aduaneras y quienes introducen o extraen mercancías del territorio nacional, ya sea los consignatarios, destinatarios, propietarios, poseedores o tenedores en las importaciones y los remitentes en las exportaciones, así como los agentes aduanales o agencias aduanales, empleando el sistema electrónico aduanero.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Mecanismo de Selección Automatizada",
      response: "El mecanismo que determinará si las mercancías se someterán a reconocimiento aduanero; el mecanismo de selección automatizado se activará con la presentación ante la aduana del dispositivo tecnológico o medio electrónico de que se trate, o bien del pedimento, aviso consolidado o documento aduanero, en los términos que al efecto establezca el Servicio de Administración Tributaria mediante reglas.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Reconocimiento aduanero",
      response: "El examen de las mercancías, así como de sus muestras que lleven a cabo las autoridades para allegarse de elementos que ayuden a cerciorarse de la veracidad de lo declarado ante la autoridad aduanera, así como del cumplimiento de las disposiciones que gravan y regulan la entrada o salida de mercancías del territorio nacional.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Toma de muestras de mercancía.",
      response: "Cuando en el reconocimiento aduanero se requiera efectuar la toma de muestras de mercancías estériles, radioactivas, peligrosas o cuando sean necesarias instalaciones o equipos especiales para la toma de las mismas, los importadores, exportadores, los agentes aduanales o las agencias aduanales, cuando actúen por cuenta de aquéllos, las deberán tomar previamente a efecto que sean presentadas al momento del reconocimiento aduanero. En todo caso se podrán tomar las muestras al momento del reconocimiento aduanero o durante el ejercicio de las facultades de comprobación en caso de dudas en la clasificación arancelaria de las mercancías.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Regulaciones y Restricciones No Arancelarias.",
      response: "Las medidas de regulación y restricción no arancelarias a la exportación e importación de mercancías, consistirán en permisos previos, cupos máximos, marcado de país de origen, certificaciones, cuotas compensatorias y los demás instrumentos que se consideren adecuados para establecer medidas para regular o restringir la exportación o importación de mercancías a través de acuerdos expedidos por la Secretaría de Economía cuando lo considere necesario.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Régimen Aduanero.",
      response: 'El régimen aduanero es el destino que tendrán las mercancías objeto de comercio exterior que se encuentran sujetas a control aduanero. El artículo 90 de la Ley Aduanera señala los tipos de régimen los cuales consisten en:',
      options: [
        'Definitivos (importación y exportación)',
        'Temporales (importación y exportación)',
        'Para retornar al extranjero en el mismo estado.',
        'Para elaboración, transformación o reparación en programas de maquila o de exportación.',
        'Depósito Fiscal.',
        'Tránsito de mercancías (Interno e Internacional).',
        'Elaboración, transformación o reparación en recinto fiscalizado.',
        'Recinto fiscalizado estratégico.',
      ],
      color: "black",
      bg: 'white'
    },
  ];

  return(
    <div className="w-full py-16 justify-center items-center">
      <div className="w-full max-w-6xl mx-auto mb-[20px]">
        <h1 className="text-3xl">DEFINICIONES FRECUENTES</h1>
        <Divider styles="w-[475px]"/>
      </div>
      <div className="max-w-[1150px] mx-auto justify-center items-center text-xl ">
        {questions.map(({ question, response, color, bg, options }) => (
          <Question
            question={question}
            response={response}
            options={options || []}
            color={color}
            bg={bg}
            key={question}
          />
        ))}
      </div>
    </div>
  )
}

export default FrequentQuestions;