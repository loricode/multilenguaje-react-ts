import React from 'react'
import { StateLanguage } from '../../context/language/StateLanguage';
import { DispatchLanguage } from '../../context/language/DispatchLanguage';

export const Home = () => {

   const { language } = StateLanguage();
   const dispatchLanguage = DispatchLanguage()
  return (
    <div>
      <h1>{ language.labels.lb_save}</h1>
      <h2>{ language.labels.lb_delete}</h2>
    
    <button onClick={ () => dispatchLanguage({type:"ES"})}>
       español
    </button>

    <button onClick={ () => dispatchLanguage({type:"EN"})}>
       ingles
    </button>

    </div>
  )
}
