import { CloseButton } from "../../CloseButton";
import successImageUrl from '../../../assets/success.svg'

interface FeedbackSucessStepProps {
    onFeedbackRestartRequest: () => void
}

export function FeedbackSucessStep({
    onFeedbackRestartRequest
}: FeedbackSucessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[340px]">
                <img src={successImageUrl} alt="Imagem de sucesso" />
                <span className="text-xl mt-2">Agradecemos o feedback</span>

                <button
                    type="button"
                    onClick={onFeedbackRestartRequest}
                    className="py-2 px-6 mt-4 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}