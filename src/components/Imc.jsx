import { useState, useTransition } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faRuler } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Imc.css'


function Imc() {
  const [total, setTotal] = useState(0);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculator = () => {

    const imc = weight / (height * height)
    const imcfixed = imc.toFixed(2)
    setTotal(imcfixed)

    console.log(total)
  }

  const escreve = () => {
    if (total <= 18.5) {
      return escreve
    } else if (total > 18.5 && total < 25) {
      return escreve
    } else if (total > 25 && total < 30) {
      return escreve
    } else if (total > 30 && total < 40) {
      return escreve
    } else if (total > 40) {
      return escreve
    }
  }


  return (
    <div className='container'>
      <img className='img_working_out' src='src\assets\Working_Out.svg'/>
      <div className='box'>
        <p className='title_calculator'>Calculadora de IMC</p>
          <h3 className='title'><FontAwesomeIcon icon={faRuler} className='icons'/>Altura</h3>
          <input type='number' className='input' placeholder='Altura em cm' value={height} onChange={(e) => setHeight(e.target.value)}></input>
          <h4 className='title'><FontAwesomeIcon icon={faDumbbell} className='icons'/>Peso</h4>
          <input type='number' className='input' placeholder='Peso em KG' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
          <button onClick={calculator}>Calcular</button>
          {total > 0 && (
            <p className='total_imc'>{escreve}</p>
            )}
      </div>
    </div>
  )
}

export default Imc