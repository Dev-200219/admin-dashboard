import moment from "moment/moment"

let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
export const calendarEvents = [
  {
    id: 1,
    title: 'Lunch Party',
    start: todayStr + 'T09:00:00',
    editable : true

  },
  {
    id: 8,
    title: 'Dinner Party',
    start: todayStr + 'T09:30:00',

  },
  {
    id: 2,
    title: 'Timed event',
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
  },
  {
    id: 3,
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
  },
  {
    id: 4,
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
  },
  {
    id: 5,
    title: "Payment Schedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
  {
    id: 6,
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
  },
]
