import React, { useEffect, useRef, useState } from 'react';
import { format, isPast } from 'date-fns'
import { useParams } from 'react-router-dom';
import FormButton from '../../components/Button';
import { apiID } from '../../helpers/apiId';
import ApiService, { IToDoItem } from '../../services/api/api.service';
import { DateTask, ItemDetailsContainer, Title } from './ItemDetailsStyle';
import { useNavigate } from "react-router-dom";


const ItemDetails: React.FunctionComponent = (props) => {

  const {id, name} = useParams()

  const [item, setItem] = useState<IToDoItem>()

  const buttonRef = useRef(null);

  const navigate = useNavigate();


  useEffect(() => {

    getOneTask();
  },[])

  const getOneTask = async () => {
    await ApiService.getPerName(apiID, name).then(
      response => {
        setItem(response.data)
      }
    ).catch(error => console.log(error))
  }

  return (
    <ItemDetailsContainer>
      {
        item ? 
        <div>
          <Title>{item.name}</Title>
          <DateTask past={isPast(new Date(item.expireDate))}>{format(new Date(item.expireDate), 'yyyy-MM-dd')}</DateTask>
          <p>{item.description}</p>
        </div> :
        <div>
          n tem
        </div>
      }
      <FormButton text='Voltar' ref={buttonRef} onClick={() => navigate("../", { replace: true })} />
    </ItemDetailsContainer>
  );
};

export default ItemDetails;
