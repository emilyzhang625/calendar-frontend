import axios from "axios";
const baseUrl = 'http://localhost:3001/api/users'

const getUsers = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const addUser = (newUser) => {
	const request = axios.post(baseUrl, newUser)
	return request.then(response => response.data)
}

export default {getUsers,addUser}