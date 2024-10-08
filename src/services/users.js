import axios from "axios";
const baseUrl = '/api/users'

const getUsers = () => {
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const getCurr = (id) => {
	const request = axios.get(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}

const addUser = (newUser) => {
	const request = axios.post(baseUrl, newUser)
	return request.then(response => response.data)
}

const updateUser = (updatedUser) => {
	const request = axios.put(`${baseUrl}/${updatedUser.id}`, updatedUser)
	return request.then(response => response.data)
}

const deleteUser = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}

export default {getUsers,getCurr, addUser,updateUser,deleteUser}