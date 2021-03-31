let port = process.env.PORT || 8000;

// npm packages
let express = require('express');
let bodyParser = require('body-parser');
// let fs = require('fs');
let cors = require('cors');

// DB connection
sequelize = require('./src/database/connection');

const app = express()
app.use(bodyParser.json())

let whiteList = ['https://pacetimesheet.herokuapp.com', 'http://localhost:3000']

const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin !== -1 || !origin)){
            callback(null, true)
        }else{
            callback(new Error('CORS Not allowed'))
        }
    }
}

app.use(cors(corsOptions))


// exported modules
// const usersRoute = require('./Routes/usersRoute')
// const notificationsRoute = require('./Routes/notificationsRoute')
// const taskRoute = require('./Routes/tasksRoute')
// const todoRoute = require('./Routes/todoRoute')
// const contactRoute = require('./Routes/contactRoute')
// const calendarRoute = require('./Routes/calendarRoute')
// const eScheduleRoute = require('./Routes/e-scheduleRoute')
// const taskSheetRoute = require('./Routes/taskSheetRoute')
// const managePermissionsRoute = require('./Routes/managePermissionRoute')
// const timeSheetRoute = require('./Routes/timeSheetRoute')
// const billingSheetRoute = require('./Routes/billingSheetRoute')
// const paymentRoute = require('./Routes/paymentRoute')

// // instantiate controllers
// app.use('/api/users', usersRoute)
// app.use('/api/notifications', notificationsRoute)
// app.use('/api/tasks', taskRoute)
// app.use('/api/todo', todoRoute)
// app.use('/api/contact-us', contactRoute)
// app.use('/api/calendar', calendarRoute)
// app.use('/api/E-schedule', eScheduleRoute)
// app.use('/api/taskSheet', taskSheetRoute)
// app.use('/api/permissions', managePermissionsRoute)
// app.use('/api/timeSheet', timeSheetRoute)
// app.use('/api/billingSheet', billingSheetRoute)
// app.use('/api/payment', paymentRoute)

app.listen(port)
console.log('Listening on port 8000')