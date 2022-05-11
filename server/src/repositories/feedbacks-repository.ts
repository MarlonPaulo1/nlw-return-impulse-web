export interface FeedbacCreateData {
    type: string
    comment: string
    screenshot?: string
}

export interface FeedbacksRepository {
    create: (data: FeedbacCreateData) => Promise<void>
}