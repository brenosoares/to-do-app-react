import React, { useEffect, useRef, useState } from 'react';
import { format, isPast } from 'date-fns'
import TrashIcon from '../../assets/trash.png'
import { apiID } from '../../helpers/apiId';
import ApiService, { IToDoItem } from '../../services/api/api.service';
import { CreateItem, DateTask, DisplayList, ListItem, SectionList, Title, Trash } from './HomeStyle';
import FormInput from '../../components/Input';
import FormTextArea from '../../components/TextArea';
import FormButton from '../../components/Button';
import FormDate from '../../components/DatePicker';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {

  const [todoList, setTodoList ] = useState<Array<IToDoItem>>();
  const [name, setName ] = useState<string>('');
  const [expDate, setExpDate ] = useState<string>('');
  const [description, setDescription ] = useState<string>('');

  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {

    getAllToDos();
  },[])

  const getAllToDos = async () => {
    await ApiService.getAll(apiID).then(
      response => {
        setTodoList(response.data);
      }
    ).catch(error => console.log(error))
  }

  const deleteItem = async (id: string, name: string) => {
    await ApiService.remove(id, name).then(
      response => {
        getAllToDos();
      }
    ).catch(error => console.log(error))
  }

  const consoleCriar = async () => {
    console.log(expDate)
    const newItem = {
      "id": apiID,
      "name": name,
      "description": description,
      "creationDate": format(new Date(), 'yyyy-MM-dd')+':00:00.000Z',
      "expireDate": expDate+':00:00.000Z'
    }
    await ApiService.create(newItem).then(
      response => {
        getAllToDos();
        setName('')
        setExpDate('')
        setDescription('')
      }
    ).catch(error => console.log(error))
  }

    return (
      <SectionList>
        <DisplayList>
          {
            todoList && todoList?.length > 0 ? 
            todoList?.map((item: IToDoItem) => {
              return <ListItem key={item.name}>
                <Trash onClick={() => deleteItem(item.id, item.name,)}>
                  <img src={TrashIcon} />
                </Trash>
                <Link to={'/detail/'+item.id+'/'+item.name}>
                  <Title>{item.name}</Title>
                </Link>
                <DateTask past={isPast(new Date(item.expireDate))}>
                  {format(new Date(item.expireDate), 'dd/MM/yyyy')}
                </DateTask>
              </ListItem>
            }) : 
            'Sem nehuma tarefa'
          }
        </DisplayList>
        <CreateItem>
          <h3>Criar Tarefas</h3>
          <div>
            <FormInput name='nome' ref={nameRef} label="Nome" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div>
            <FormTextArea name='description' ref={descriptionRef} label="Descrição" rows={4} onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>
          <div>
            <FormDate name='data' ref={dateRef} label="Data de expiração" onChange={(e) => setExpDate(e.target.value)} value={expDate} />
          </div>
          <div>
            <FormButton text='Criar' color='primary' ref={buttonRef} onClick={() => consoleCriar()}  />
          </div>
        </CreateItem>
      </SectionList>
    );
}
export default Home

