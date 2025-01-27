import ButtonIncrement from "./button-increment";

function IdeaBlock({ideaText}){



   return ( <div className="bg-sky-500/50 rounded-xl p-8"> <div className="flex justify-center p-10">
    {ideaText} 
                    </div> 

                    <div className="flex justify-between"><ButtonIncrement></ButtonIncrement> <ButtonIncrement></ButtonIncrement></div>
                    </div>  ); 

}


export default IdeaBlock;