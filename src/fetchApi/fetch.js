import axios from 'axios';

export const SearchApi = (searchName, nextPage) => {
  const KEY = '27652237-fecf1e648e251b2f1d2bb2568';
  const URL = 'https://pixabay.com/api/';

  return axios
    .get(
      `${URL}?q=${searchName}&page=${nextPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(res => res.data)
    .catch(error => new Error(error));;
};