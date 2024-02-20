import  Express  from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = Express()

app.use(Express.json())

app.use(indexRoutes)
app.use('/api',employeesRoutes)

app.use((req, res, next)=>{
    res.status(404).json({
        message: 'endpoint Not found'
    })
})

export default app;