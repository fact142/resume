const SET_RESUMES = 'SET_RESUMES';

const defaultState = {
  allResumes: [],
  error: ''
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_RESUMES:
      return {
        ...state,
        allResumes: action.payload,
        error: ''
      };
    default:
      return state;
  }
}

export const setResumes = (posts) => ({type: SET_RESUMES, payload: posts})
