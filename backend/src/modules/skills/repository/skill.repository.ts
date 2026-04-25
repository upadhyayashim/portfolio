import { ISkill, SkillDTO } from "../interfaces/skill.types";
import { SkillModel } from "../models/skill.model";


export const SkillRepository = {
    create: async (data: SkillDTO) => {
        return SkillModel.create(data);
    },

    findAll: async () => {
        return SkillModel.find().sort({ category: 1 });
    },

    findByCategory: async (category: ISkill["category"]) => {
        return SkillModel.find({ category: category }).sort({ level: -1 });
    },

    findAllSortedByCategory: async () => {
        const result = await SkillModel.aggregate([
            {
                $addFields: {
                    sortOrder: {
                        $indexOfArray: [
                            ["backend", "frontend", "devops", "other", "database"],
                            "$category"
                        ]
                    }
                }
            },
            {
                $sort: { sortOrder: 1 }
            }
        ]);

        return result;
    },

    updateSkillById: async (id: string, payload: Partial<ISkill>) => {
        return SkillModel.findByIdAndUpdate(
          id,
          { $set: payload },
          {
            new: true,          // return updated doc
            runValidators: true // apply schema validation
          }
        );
      }
};
