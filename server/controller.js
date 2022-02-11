const goals = require('./db.json')
let globalId = 1


module.exports = {
    getGoals: (req, res) => {
        res.status(200).send(goals)
    },

    deleteGoals: (req, res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        goals.splice(index, 1)
        res.status(200).send(goals)
    },

    createGoals: (req, res) => {
        let {id, nowGoal, futureGoal, feelingSelect} = req.body
        let newGoal = {
            id: globalId,
            nowGoal,
            futureGoal,
            feelingSelect
        }
        goals.push(newGoal)
        res.status(200).send(goals)
        globalId++

    },

    updateGoals: (req, res) => {
        let {id} = req.params
        let{type} = req.body
        let index = goals.findIndex(elem => elem.id === +id)

        
        
        
    }
}
