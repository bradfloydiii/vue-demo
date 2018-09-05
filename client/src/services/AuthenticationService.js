import Api from '@/services/api'

export default {
    register(credentials) {
        return Api().post('addUser', credentials)
    },
    retrieve() {
        return Api().get('getUser')
    }
}