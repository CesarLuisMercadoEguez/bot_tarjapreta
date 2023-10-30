const express = require('express')
const router = express.Router()

const chatwootHook = async (req, res) =>{
    const body = req.body
    console.log(body)
    res.send(body)

};

/**
 * controller
 */
router.post('/chatwook-hook',chatwootHook)

module.exports = router