const config = require('config')
const { MongoClient } = require('mongodb')

const url = config.get('databaseUrl')
const dbName = config.get('databaseName')

const client = new MongoClient(url)

async function getTodos (newTodo) {
    try {
        await client.connect()
        const db = client.db(dbName)
        const collection = db.collection('todos')

        // Add method specific logic below
        const response = await collection.find().toArray()
        return response
    } catch (error) {
        console.log(error)
        throw error
    } finally {
        client.close()
    }
  }

async function addTodo(newTodo) {
    try {
        await client.connect()
        const db = client.db(dbName)
        const collection = db.collection('todos')

        // Add method specific logic below
        const response = await collection.insertOne(newTodo);
        return response.insertedId
    } catch (error) {
        console.log(error)
        throw error
    } finally {
        client.close()
    }
  }

module.exports.addTodo = addTodo
module.exports.getTodos = getTodos
