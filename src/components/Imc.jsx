import { useState, useTransition } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faRuler } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Imc.css'
import Image from '../assets/Working_Out.svg'


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

  return (
    <div className='container'>
      <img className='img_working_out' src={Image} />
      <div className='box'>
        <p className='title_calculator'>Calculadora de IMC</p>
          <h3 className='title'><FontAwesomeIcon icon={faRuler} className='icons'/>Altura</h3>
          <input type='number' className='input' placeholder='Altura em cm' value={height} onChange={(e) => setHeight(e.target.value)}></input>
          <h4 className='title'><FontAwesomeIcon icon={faDumbbell} className='icons'/>Peso</h4>
          <input type='number' className='input' placeholder='Peso em KG' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
          <button onClick={calculator}>Calcular</button>
          {total > 0 && (
            <p className='total_imc'>Seu índice de massa corporal é: {total}</p>
            )}
      </div>
    </div>
  )
}

export default Imc