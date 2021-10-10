export const reducer= (state={projects: []}, action) => {
    switch (action.type){
        case "GET_PROJECTS":
            return {projects: action.payload}
        case "ADD_PROJECT":
            return {projects: [...state.projects, action.payload]}
        default:
            return state
    }
}
