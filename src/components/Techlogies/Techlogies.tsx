import { technologies } from "../../constants/info"
import BallCanvas from "../canvas/Ball"


const Techlogies: React.FC = () => {
    return (
        <div className="container max-w-7xl mx-auto px-4 content-center">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
                {technologies.map((technology) => (
                    <div key={technology.name} className="flex flex-col items-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                            <BallCanvas icon={technology.icon} />
                        </div>
                        <p className="mt-2 text-center text-sm sm:text-base">{technology.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Techlogies
