import logo from './logo.svg';
import './App.css';

const boxes=[
  {id:1,name:"image 1"},
  {id:2,name:"image 2"},
  {id:3,name:"image 3"},
  {id:4,name:"image 4"},
  {id:5,name:"image 5"},
  {id:6,name:"image 6"},
  {id:7,name:"image 1"},
  {id:8,name:"image 2"},
  {id:9,name:"image 3"},
  {id:10,name:"image 4"},
  {id:11,name:"image 5"},
  {id:12,name:"image 6"},
]
function App() {
  return (
    <div className="App font-monospace">
      <h1 className='text-center fw-bold'>Gallery App</h1>
      <div className='row'>
        {boxes.map((box)=>(
          <div className='col rounded-5 m-2 bg-dark' key={box.id}><img src={logo} className="App-logo" alt="logo" />
          <h2 className=' text-white'>{box.name}</h2></div>
        ))}
        
      
      
        </div>
        
    </div>
  );
}

export default App;
