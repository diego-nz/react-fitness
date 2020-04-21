import React from 'react';
import '../assets/styles/components/Card.scss'

const Welcome = ({username}) => (
  <div className='container'>
    <div className='Fitness-User-Info'>
      <h1>Hello {username}!</h1>
      <p>Let's workout to get someone gains!</p>
    </div>
  </div>
)

// Component funcional no es necesario cambiar el estado, ciclo de vida, solo mostará mensaje
// function Welcome(props) {
//   return (
//     <div className='container'>
//       <div className='Fitness-User-Info'>
//         <h1>Hello {props.username}!</h1>
//         <p>Let's workout to get someone gains!</p>
//       </div>
//     </div>
//   )
// }

export default Welcome