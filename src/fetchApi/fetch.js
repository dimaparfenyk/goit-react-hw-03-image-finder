import axios from 'axios';

export const SearchApi = (name, page) => {
  const API_KEY = '27652237-fecf1e648e251b2f1d2bb2568';
  const URL = 'https://pixabay.com/api/';

  return axios
    .get(
      `${URL}?q=${name}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(res => {
      console.log(res)
      if (res.ok) {
        return res.data
      }
      return Promise.reject(new Error(`There is no image with the name ${name}`))
    }
  )
};



