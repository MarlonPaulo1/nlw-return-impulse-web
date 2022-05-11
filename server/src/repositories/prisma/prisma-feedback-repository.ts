import { prisma } from "../../prisma";
import { FeedbacCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbacCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot, 
            }
        })
    }
}