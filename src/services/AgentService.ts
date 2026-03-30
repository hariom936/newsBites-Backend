import { Service } from "typedi";
import { AgentModel } from "../model/Agent";

@Service()
export class AgentService {

    create(data: any) {
        return AgentModel.create(data);
    }

    getAll() {
        return AgentModel.find();
    }

    update(id: string, data: any) {
        return AgentModel.findByIdAndUpdate(id, data, { new: true });
    }

    delete(id: string) {
        return AgentModel.findByIdAndDelete(id);
    }
}