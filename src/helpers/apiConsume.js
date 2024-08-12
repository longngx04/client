import axios from "axios";

const api = "http://localhost:8888/todos/";

export const ViewAllTasks = async()=>{
    try{
        var response = await axios.get(api)
        return response.data
    }catch(err){
        console.error(err);
    }
}

export const ViewATask = async(id)=>{
    try{
        var response = await axios.get(api + id);
        return response.data
    }catch(err){
        console.error(err);
    }
}
export const CreateATask = async(task)=>{
    try{
        var response = await axios.post(api, task);
        return response.data
    }catch(err){
        console.error(err);
    }
}

export const DeleteATask = async(id)=>{
    try{
        var response = await axios.delete(api, id)
        return response.data
    }catch(err){
        console.error(err);
    }
}

export const DeleteAllTask = async()=>{
    try{
        var response = await axios.delete(api)
        return response.data
    }catch(err){
        console.error(err);
    }
}

export const UpdateATask = async(id, task)=>{
    try{
        var response = await axios.put(api + id, task)
        return response.data
    }catch(err){
        console.error(err);
    }
}

