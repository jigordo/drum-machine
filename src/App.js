
import React, {useState} from 'react';
import sounds from './sound'
import './App.css';

function App() {
  const [state,setState] = useState("")
  //  const [active, setActive] = useState(false) 
  
  return  (
  <div className="min-vh-100 text-white">
      <div id="drum-machine" className='text-center'>
        <h2>Drum Machine</h2>
        <div class="parent">
        
          {sounds.map(clip => {

            document.addEventListener('keydown', function(e){
              if(e.keyCode === clip.keyCode) {
                playSound()
              }
            });
            

              function playSound() {
                const audio = document.getElementById(clip.keyTrigger)
                const divElem = document.getElementById(clip.id)
                    
                    audio.currentTime = 0;
                    audio.play();
                    divElem.classList.add("press")
                    setTimeout(function(){divElem.classList.remove("press");}, 100);
                setState(
                  clip.id
                )
              }
          
            return (
             
            <div onClick={playSound} className={`button drum-pad`} id={clip.id}>
              <audio className="clip" id={clip.keyTrigger} src={clip.url}/>
              <div>
                {clip.keyTrigger} 
              </div>
            </div>
          ) 
      })}

      </div>

      <div id="inText">
            {state}
        </div>
         

      </div>
    </div>
  )
}





// function Pad({clip}) {

//   const [active, setActive] = React.useState(false)
//   const handleKeyPress = (e) => {
//       if (e.keyCode===clip.keyCode) {
//         playSound();
//       }   
//   }
  
//       React.useEffect(() => {
//         document.addEventListener('keydown', handleKeyPress);
        
//         return () => {
//           document.removeEventListener('keydown', handleKeyPress);
          
//         }
//       })

//       function playSound() {
//         const audio = document.getElementById(clip.keyTrigger)
//         // setActive(true)
//         // setTimeout(() => setActive(false), 100)
//          audio.currentTime = 0;
//          audio.play();
         
//       }

//   return (
//     <>
//       <div onClick={playSound} 
//         id={clip.id}
//         className={`btn btn-secondary drum-pad px-4 py-3 m-3 ${active && 'btn-warning'}`}>
//           <audio className="clip" id={clip.keyTrigger} src={clip.url}/> 
//           {String.fromCharCode(clip.keyCode)}
//       </div> 
//     </>  
//   )
// }





export default App;
