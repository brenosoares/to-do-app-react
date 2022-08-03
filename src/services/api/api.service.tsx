import axios from "axios";

const http = axios.create({
    baseURL: "https://0jj5dyvv79.execute-api.eu-west-1.amazonaws.com/dev/items/",
    headers: {
        "Content-Type": "application/json"
    }
})

export interface IToDoItem{
    id: string,
    name: string,
    description: string,
    creationDate: string,
    expireDate: string

}

const getAll = (id: string) => {
    return http.get<Array<IToDoItem>>(id);
};
const getPerName = (id: string, name?: string) => {
    return http.get<IToDoItem>(`/object/${id}/${name}`);
};
const create = (data: IToDoItem) => {
    return http.post<IToDoItem>("", data);
};
const update = (data: IToDoItem) => {
    return http.post<IToDoItem>("", data);
};
const remove = (id: string, name: string) => {
    return http.delete<any>(`/object/${id}/${name}`);
};

const ApiService = {
    getAll,
    getPerName,
    create,
    update,
    remove,
  };
  export default ApiService;