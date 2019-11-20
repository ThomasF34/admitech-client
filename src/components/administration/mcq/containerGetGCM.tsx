import React from 'react';
import { useParams } from 'react-router';
import ShowQuizz from './showForm';


function containerGetQCM() {
  let { id } = useParams()
  if (id !== undefined) {
    const idNumber = parseInt(id)
    return(
      <ShowQuizz idQcm={idNumber} />
    )
  }
}

export default containerGetQCM;