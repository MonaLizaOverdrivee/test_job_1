import axios from 'axios';
import article from './modules/article'

const baseAxios = axios.create({
  baseURL: ''
})

export default {
  aricle: article(baseAxios)
}