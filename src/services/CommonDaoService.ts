import { Model } from "mongoose";
import Container, { Service } from "typedi";
import { Brand, Role, city } from "../model";
import { masterValidation } from "../validations/MasterValidation";

@Service()
export default class CommonDaoService {
    public async createDao(data: any, Model: string) {
        if (data && Model) {
            let createMasterDocs
            const masterData = {
                title: data?.title,
                value: data?.value,
                file: data?.file || "default.jpg", //will create a common method for file upload and return the path everytime fronend will call this method and pass the file
                status: true,
                createdBy: '653a3a3ed3f6eaf4a9c88f0f',
                updatedBy: '653a3a3ed3f6eaf4a9c88f0f',
            }
            switch (Model) {
                case 'city':
                    createMasterDocs = await city.create(masterData)
                    break;
                case 'brand':
                    createMasterDocs = await Brand.create(masterData)
                    break;
                case 'other':
                    break;
            }
            return createMasterDocs
        }
        else return false

    }

    public async getMaster(param: any, Model: string) {
        let getMaster
        if (Model) {
            switch (Model) {
                case 'city':
                    getMaster = await city.find({ status: true })
                    break;
                case 'role':
                    getMaster = await Role.find({status: true})
                    break;
                    case 'brand':
                        getMaster = await Brand.find({status: true})
                        break;
                case 'other':
                    break;
            }
            return getMaster
        } return false

    }

    public async activeInactiveMaster(param: any) {
        if (!param) return false
        let createMasterDocs
        const { id, type, status } = param
        switch (type) {
            case 'city':
                createMasterDocs = await city.findByIdAndUpdate(id, { status: status }, { new: true })
                break;
            case 'other':
                break;
        }
        return createMasterDocs
    }



}
// Container.set(CommonDaoService, new CommonDaoService());