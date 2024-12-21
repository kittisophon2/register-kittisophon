exports.get = (req,res) =>{
    res.send("Get customers");
}

exports.getById = (req,res) =>{
    res.send("Customer ID: " + req.params.id);
}

exports.getname = (req,res) =>{
    res.send("Customer Name:" + req.params.name);
}
exports.create = (req,res) =>{
    res.send("New customer ");
}

exports.editall = (req,res) =>{
    res.send("Edit customer id: " + req.params.id );
}

exports.edit = (req,res) =>{
    res.send("Patch customer id: " + req.params.id );
}

exports.de = (req,res) =>{
    res.send("Delete customer id: " + req.params.id);
}