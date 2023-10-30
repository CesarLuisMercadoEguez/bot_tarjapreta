const express = require('express')

class ServerHttp {
    port = process.env.port ?? 3003
    constructor(){

    }


    buildApp = () => {
        return this.app = express()
    }
}

module.express = ServerHttp