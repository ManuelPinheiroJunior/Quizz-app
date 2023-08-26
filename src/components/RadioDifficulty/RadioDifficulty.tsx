import React, {Dispatch, SetStateAction, useState} from 'react'
import { ContainerRadios } from './RadioDifficulty.styles';

type Props = {
  difficultyType: string;
  setDifficultyType: Dispatch<SetStateAction<string>>;
};


const BotonCambioPerfil: React.FC<Props> = ( { difficultyType , setDifficultyType }) => {	

  const handleEasy = () => {
    setDifficultyType('easy');
      localStorage.setItem('difficulty', 'easy');
    };
  
    const handleMedium = () => {
      setDifficultyType('medium');
      localStorage.setItem('difficulty', 'medium');
    };

    const handleHard = () => {
      setDifficultyType('hard');
      localStorage.setItem('difficulty', 'hard');
    };

 return (
  <>
    <ContainerRadios>
      <div className='container-radio-easy'>
      <input 
        type="radio"
        name="easy"
        value={'easy'}
        checked={difficultyType === 'easy'} 
        onChange={handleEasy}
        required={difficultyType === ''}
        />
       EASY
      </div>
      <div className='container-radio-medium'>
      <input 
        type="radio"
        name="medium"
        value={'medium'}
        checked={difficultyType === 'medium'} 
        onChange={handleMedium}
        required={difficultyType === ''}
        />  
        MEDIUM
      </div>
      <div className='container-radio-hard'>
      <input 
        type="radio"
        name="ard"
        value={'hard'}
        checked={difficultyType === 'hard'} 
        onChange={handleHard}
        required={difficultyType === ''}
        />  
        HARD
      </div>      
    </ContainerRadios>
   </>
  )
};

export default BotonCambioPerfil;
