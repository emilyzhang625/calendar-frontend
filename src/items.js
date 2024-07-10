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

const updateItem = (updatedItem) => {
	const request = axios.put(`${baseUrl}/${updatedItem.id}`, updatedItem)
	return request.then(response => response.date)
}

export default {getItems,addItem, removeItem, updateItem}