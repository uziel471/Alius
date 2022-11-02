import Question from "./Question";
import Divider from "./Divider";

function FrequentQuestions(){
  const questions = [
    {
      question: "Pregunta 1",
      response: "Do tempor sint velit ut adipiscing deserunt anim magna culpa esse. Dolore duis est proident non elit fugiat aliqua in consequat cupidatat occaecat est. Eiusmod adipiscing enim magna anim et in commodo proident magna velit ullamco aliquip exercitation dolore sed lorem cillum qui in. Ut commodo veniam nostrud excepteur aliqua adipiscing deserunt est ipsum nostrud aliquip dolor ullamco fugiat sed anim lorem labore duis. Dolor tempor eiusmod tempor duis irure duis sunt pariatur ea nisi mollit labore aliquip irure cupidatat incididunt.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Pregunta 2",
      response: "Do tempor sint velit ut adipiscing deserunt anim magna culpa esse. Dolore duis est proident non elit fugiat aliqua in consequat cupidatat occaecat est. Eiusmod adipiscing enim magna anim et in commodo proident magna velit ullamco aliquip exercitation dolore sed lorem cillum qui in. Ut commodo veniam nostrud excepteur aliqua adipiscing deserunt est ipsum nostrud aliquip dolor ullamco fugiat sed anim lorem labore duis. Dolor tempor eiusmod tempor duis irure duis sunt pariatur ea nisi mollit labore aliquip irure cupidatat incididunt.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Pregunta 3",
      response: "Do tempor sint velit ut adipiscing deserunt anim magna culpa esse. Dolore duis est proident non elit fugiat aliqua in consequat cupidatat occaecat est. Eiusmod adipiscing enim magna anim et in commodo proident magna velit ullamco aliquip exercitation dolore sed lorem cillum qui in. Ut commodo veniam nostrud excepteur aliqua adipiscing deserunt est ipsum nostrud aliquip dolor ullamco fugiat sed anim lorem labore duis. Dolor tempor eiusmod tempor duis irure duis sunt pariatur ea nisi mollit labore aliquip irure cupidatat incididunt.",
      color: "white",
      bg: '[#0b233f]'
    },
    {
      question: "Pregunta 4",
      response: "Do tempor sint velit ut adipiscing deserunt anim magna culpa esse. Dolore duis est proident non elit fugiat aliqua in consequat cupidatat occaecat est. Eiusmod adipiscing enim magna anim et in commodo proident magna velit ullamco aliquip exercitation dolore sed lorem cillum qui in. Ut commodo veniam nostrud excepteur aliqua adipiscing deserunt est ipsum nostrud aliquip dolor ullamco fugiat sed anim lorem labore duis. Dolor tempor eiusmod tempor duis irure duis sunt pariatur ea nisi mollit labore aliquip irure cupidatat incididunt.",
      color: "black",
      bg: 'white'
    },
    {
      question: "Pregunta 5",
      response: "Do tempor sint velit ut adipiscing deserunt anim magna culpa esse. Dolore duis est proident non elit fugiat aliqua in consequat cupidatat occaecat est. Eiusmod adipiscing enim magna anim et in commodo proident magna velit ullamco aliquip exercitation dolore sed lorem cillum qui in. Ut commodo veniam nostrud excepteur aliqua adipiscing deserunt est ipsum nostrud aliquip dolor ullamco fugiat sed anim lorem labore duis. Dolor tempor eiusmod tempor duis irure duis sunt pariatur ea nisi mollit labore aliquip irure cupidatat incididunt.",
      color: "white",
      bg: '[#0b233f]'
    },
  ];

  return(
    <div className="w-full py-16 justify-center items-center">
      <div className="w-full max-w-6xl mx-auto mb-[20px]">
        <h1 className="text-3xl">Preguntas frecuentes</h1>
        <Divider styles="w-[275px]"/>
      </div>
      <div className="max-w-[1150px] mx-auto justify-center items-center text-xl ">
        {questions.map(({ question, response, color, bg }) => (
          <Question
            question={question}
            response={response}
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