import Pes from "../models/PesModel.js";

export const getPes = async(req, res)=>{
    try {
        const respone = await Pes.findAll();
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPesByid = async(req, res)=>{
    try {
        const respone = await Pes.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(respone);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPes = async(req, res)=>{
    try {
        await Pes.create(req.body);
        res.status(201).json({msg:"User Create"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePes = async(req, res)=>{
    try {
        await Pes.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Update"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePes = async(req, res)=>{
    try {
        await Pes.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Delet"});
    } catch (error) {
        console.log(error.message);
    }
}
