import Kap from "../models/KapModel.js";

export const getKap = async(req, res)=>{
    try {
        const respone = await Kap.findAll();
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKapByid = async(req, res)=>{
    try {
        const respone = await Kap.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKap = async(req, res)=>{
    try {
        await Kap.create(req.body);
        res.status(201).json({msg:"User Create"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKap = async(req, res)=>{
    try {
        await Kap.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKap = async(req, res)=>{
    try {
        await Kap.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Delet"});
    } catch (error) {
        console.log(error.message);
    }
}
