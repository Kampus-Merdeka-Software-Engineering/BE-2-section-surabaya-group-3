import Ker from "../models/KerModel.js";

export const getKer = async(req, res)=>{
    try {
        const respone = await Ker.findAll();
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const getKerByid = async(req, res)=>{
    try {
        const respone = await Ker.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const createKer = async(req, res)=>{
    try {
        await Ker.create(req.body);
        res.status(201).json({msg:"User Create"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateKer = async(req, res)=>{
    try {
        await Ker.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteKer = async(req, res)=>{
    try {
        await Ker.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Delet"});
    } catch (error) {
        console.log(error.message);
    }
}
