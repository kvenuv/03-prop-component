import rImg1 from "./assets/image1.jpg";
import rImg2 from "./assets/images-2.jpg";


const carnames = ["ford","benz","hummer"];
const reactimages = [rImg1 ,rImg2];

function getRandomInt(max){
  return Math.floor(Math.random() * (max + 1))
}

function getRandomImg(max){
  return Math.floor(Math.random() * (max + 1))
}

function Header(){
  const names = carnames[getRandomInt(2)];
  const rImg = reactimages[getRandomImg(1)];
  return(
    <>
    <header>
    <h2>This is heading</h2>
    <img src={rImg} alt={rImg} title={rImg} />
    <p><strong>{names}</strong> React components use props to communicate with each other</p>
    </header>
    </>
  )
}
function App(){
  return(
    <>
    <Header />

    </>
  )
}
export default App;