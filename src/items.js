import axios from "axios";
const baseUrl = 'http://localhost:3001/api/items'

const getItems = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const addItem = (newItem) => {
	const request = axios.post(baseUrl, newItem)
	return request.then(response => response.data)
}

const removeItem = (toBeRemoved) => {
	const request = axios.delete(`${baseUrl}/${toBeRemoved.id}`)
	return request.then(response => response.data)
}

export default {getItems,addItem, removeItem}