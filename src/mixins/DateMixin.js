import moment from 'moment'


export const dateMixin = {
    filters: {
        formatDate(date, formatString) {
            return moment(date).format(formatString)
        },
        diffForHumans(date) {
            return moment(date).toNow(true)
        }
    }
}