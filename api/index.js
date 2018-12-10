import axios from './request'

export const getActivity = (params) => { return axios.get(`/api/v1/activity/`, params) }
