import './App.css';
import Profession from './Profile/Component/Profession';
import Bio from './Profile/Component/Bio';
import FullName from './Profile/Component/FullName';
import HandleName from './Profile/Component/HandleName';
import photo from './photo.jpg';



const PhotoProfile = (props) =>{
    return <div>{props.children}</div>
  }

function App() {
  return (
    //On appel les autres fonction en tant que props et photo en tant que children
    <div className="App">
      <PhotoProfile>
        <img src={photo} alt="photo" style={{width:'100px', height:'100px' }} />
      </PhotoProfile>
      <FullName name='Gassama'/>
      <Profession metier='Etudiant'/>
      <p><Bio bio='Lorem Ipsum est simplement un texte factice de '/>
      <HandleName nom='Gassama'/>
      </p>
    </div>
  );
}

export default App;
