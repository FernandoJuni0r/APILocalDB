const express = require('express')
const router = express.Router()

router.get('/posts', async function(req, res) {
    res.end()
})
router.get('/posts/:id')
router.post('/posts')
router.put('/posts/:id')
router.delete('/posts/:id')

module.exports = router()