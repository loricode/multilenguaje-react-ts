import { configLanguage } from '../../config/configLanguage';


export const initialState = {
   codeLanguage:configLanguage.languageDefault.code,
   labels:configLanguage.languageDefault.labels
};

export type Action = {
   type:string
}

export const languageReducer = (state = initialState, action:Action) => {
  switch(action.type){
    case "ES":
       return { 
         codeLanguage:configLanguage.language.ES.code,
         labels:configLanguage.language.ES.labels
       }
       case "EN":
         return { 
           codeLanguage:configLanguage.language.EN.code,
           labels:configLanguage.language.EN.labels
         }

     default: return state;
  }

}