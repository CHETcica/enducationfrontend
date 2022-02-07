import reduxType from '../config/reduxType';
import api from '../api';


export const fetchRandomPhoto = () => async (dispatch) => {
  let photo = localStorage.getItem("photos")
  if(!photo){
    const res = await api.get('/course/showcourse', );
    localStorage.setItem("photos", JSON.stringify(res.data))
    photo = localStorage.getItem("photos")
  }
  console.log(photo);
  dispatch({ type: reduxType.FETCH_RANDOM_PHOTO, payload: JSON.parse(photo) });
};

