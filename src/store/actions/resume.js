import { getAllResumes } from '../../API/resumeAPI';
import { setResumes } from '../reducers/resumeReducer';

export const updateResumes = () => async (dispatch) => {
  const response = await getAllResumes();
  await dispatch(setResumes(response));
};
