class ExpressError extends Error {
    constructor(Statuscode,message){
        super();
       this.statusCode=statusCode;
       this.message=message;
    }
}

module.exports=ExpressError;