import axios from 'axios';

export const getProjects = (data) => {
    return (dispatch) => {
        axios("https://613d36a694dbd600172ab88f.mockapi.io/api/projects", data)
            .then(({data}) => dispatch({type: "GET_PROJECTS", payload: data}))
    }
}

export const addProject = (data) => {
    return (dispatch) => {
        axios.post("https://613d36a694dbd600172ab88f.mockapi.io/api/projects", data)
            .then(({data}) => dispatch({type: "ADD_PROJECT", payload: data}))
    }
}