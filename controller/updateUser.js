async function updateUser(){
    try{

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false 
        })
    }
}