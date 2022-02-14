const feelinglist = []
let globalId = 0


module.exports = {
    addItem: (req, res) => {
        const {nowGoal, futureGoal, feeling} = req.body

        let newItem = {
            nowGoal,
            futureGoal,
            feeling,
            Id: globalId
        }

        feelinglist.push(newItem)

        res.status(200).send(feelinglist)
        globalId++
    },
    deleteItem: (req, res) => {
        const {id} = req.params

        const index = feelinglist.findIndex(e => +e.id === +id)

        feelinglist.splice(index, 1)

        res.status(200).send(feelinglist)
    }
}