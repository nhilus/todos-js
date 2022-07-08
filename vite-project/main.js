import './style.css'
import {getData} from './src/services/jsonplaceholder.js'
import { list } from './src/components/list'


const app= document.querySelector('#app')

app.append(await list())

