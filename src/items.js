import axios from "axios";
const baseUrl = 'http://localhost:3001/api/items'

const getItems = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const addItem = (newItem) => {
	const request = axios.post(baseUrl, newItem)
	console.log(newItem);
	return request.then(response => response.data)
}

const removeItem = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}

export default {getItems,addItem, removeItem}