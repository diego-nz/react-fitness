import React from 'react'
import '../assets/styles/components/Card.scss'
import circlesImg from '../assets/images/circles.png';
  // background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);
export default class Card extends React.Component{
  
  // Necesario para poder agregar un estado
  constructor(props){
    super(props)
    this.state = {
      image: 'https://cdn.onlinewebfonts.com/svg/img_148071.png'
    }
  }

  // Después de que se inicia un compnente
  componentDidMount(){
    setTimeout(() => {
      // La mejor forma de tener control sobre nuestros componentes es saber su ciclo y 
      // en que momento podemos intervenir para lograr los resultados 
      // deseados tanto en UX como en Performance

      // Generar render de nuevo del component de forma correcta
      this.setState({
        image: this.props.img
      })
    }, 5000);
  }

  render(){
    const {title, description, img, leftColor, rightColor} = this.props
    return (
      <div className='card Fitness-Card mx-auto'
      style={{
        backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${this.props.leftColor}, ${this.props.rightColor})`
        }}>
        <div className='card-body'>
          <div className='row center'>
            <div className='col-6'>
              {/* Se puede usar la propiedad de la constante */}
            {/* <img src={img} alt='' className='float-right'></img> */}
            <img src={this.state.image} alt='' className='float-right' height="113"></img>
            </div>      
            <div className='col-6 Fitness-Card-Info'>
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}