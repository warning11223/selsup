import './App.css';
import ParamEditor, {Model, Param} from "./components/ParamEditor";

const params: Param[] = [
  {id: 1, name: 'Назначение', type: 'string'},
  {id: 2, name: 'Длина', type: 'string'},
];

const model: Model = {
  paramValues: [
    {paramId: 1, value: 'повседневное'},
    {paramId: 2, value: 'макси'},
  ],
  colors: [],
};

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <ParamEditor params={params} model={model}/>
        </header>
      </div>
  );
}

export default App;
