import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ClientComponentDemo from "./ClientComponentDemo";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import Destructing from "./Destructing";
import DestructingImports from "./DestructuringImports";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import IncludesSomeEvery from "./IncludeSomeEvery";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import NullUndefined from "./NullUndefined";
import OptionalChaining from "./OptionalChaining";
import ReduceFunction from "./ReduceFunction";
import ServerComponentDemo from "./ServerComponentDemo";
import SimpleArrays from "./SimpleArrays";
import Spreader from "./Spreader";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";
import TodoList from "./todos/TodoList";
import ArrowFunctions from "./ArrowFunctions";

export default function Lab3() {
  console.log("Hello world!");
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <VariablesAndConstants/>
      <VariableTypes/>
      <BooleanVariables/>
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <NullUndefined />
      <LegacyFunctions />
      <ArrowFunctions/>
      <ImpliedReturn />
      <TemplateLiterals/>
      <SimpleArrays/>
      <ArrayIndexAndLength />
       <AddingAndRemovingToFromArrays />
       <ForLoops />
       <MapFunction/>
       <FindFunction/>
       <FindIndex/>
       <FilterFunction />
       <IncludesSomeEvery/>
       <ReduceFunction/>
       <JsonStringify/>
       <House/>
       <Spreader/>
       <Destructing/>
       <FunctionDestructing/>
       <DestructingImports/>
       <OptionalChaining/>
       <Classes/>
       <Styles/>
       <ClientComponentDemo/>
       <ServerComponentDemo/>
       <Add a={3} b={4} />
       <Add a={7} b={8} />
       <Add a={10} b={20} />
       <h4>Square of 4</h4>
      <Square>4</Square>
      <p>Square of 5 = <Square>5</Square></p>
      <Highlight>Children can be any JSX</Highlight>
      <br/>
      <Highlight>
        My own square of 9
      </Highlight>
      <Square>9</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Highlight>
      <PathParameters/>
      <TodoList/>
    </div>
  );
}