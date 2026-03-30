import { Service } from "typedi";
import { AdModel } from "../model/Ad";

@Service()
export class AdService {
  async create(data: any) {
    return AdModel.create(data);
  }

  async getAll() {
    return AdModel.find();
  }

  async update(id: string, data: any) {
    return AdModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return AdModel.findByIdAndDelete(id);
  }
}