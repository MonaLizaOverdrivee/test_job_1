import axios from 'axios';
import article from './modules/article'

const baseAxios = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL
})

export default {
  article: article(baseAxios)
}