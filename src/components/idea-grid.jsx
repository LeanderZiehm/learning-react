import IdeaBlock from "./idea-block"


export default function IdeaGrid({ideas}){
    return (
        <div className="grid grid-cols-2 gap-4">
        {ideas.map(idea => { return <IdeaBlock key={idea} ideaText = {idea}> </IdeaBlock>} )}
        </div>
    )
}