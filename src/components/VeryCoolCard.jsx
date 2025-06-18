import { cn } from "./utils"

const CardBody = ({ className = "px-2", cardContent }) => (
  <div className={cn("text-start", className)}>
    <span onClick={() => {navigator.clipboard.writeText(cardContent.code_content)}} className="text-md font-ropasans mb-1 cursor-pointer absolute right-10 top-12 font-thin text-gray-100 hover:underline underline-offset-8">
      {cardContent.title}
    </span>
    <div className="contains-code text-gray-700 dark:text-gray-300">
      {cardContent.description}
    </div>
  </div>
)
//======================================
export const SimpleCard_V2 = ({cardContent}) => {
  const Line = ({ className = "" }) => (
    <div
      className={cn(
        "h-px w-full  from-[1%] absolute -z-0 via-zinc-700 from-zinc-900 to-zinc-500",
        className
      )}
    />
  )
  const Container = ({ children }) => (
    <div className="relative mx-auto w-full px-4">
      <Line className="bg-gradient-to-l left-0 top-2 sm:top-4 md:top-6" />
      <Line className="bg-gradient-to-r bottom-2 sm:bottom-4 md:bottom-6 left-0" />
 
      <Line className="w-px bg-gradient-to-t right-2 sm:right-4 md:right-6 h-full inset-y-0" />
      <Line className="w-px bg-gradient-to-t left-2 sm:left-4 md:left-6 h-full inset-y-0" />
      <div className="relative z-20 mx-auto py-8">{children}</div>
    </div>
 
)
return (
 
<Container>
  <div className="p-4 w-full center">
    <CardBody cardContent={cardContent} />
  </div>
</Container>
) }

export default SimpleCard_V2;