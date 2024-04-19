import { ItemCTA, ItemCTAProps } from "./ItemCTA";

export interface ContainerCTAProps { itemsCTA: ItemCTAProps[] }

export function ContainerCTA({ itemsCTA }: ContainerCTAProps) {
    return (
        <div
            className={`bg-indigo-700 md:bg-transparent fixed flex flex-row md:flex-col w-full md:w-fit md:h-fit bottom-0 md:top-[40%] p-4 md:right-10 z-50 md:space-y-2.5 justify-between`}>
            {itemsCTA.map((itemCTA) => (<ItemCTA key={itemCTA.name} {...itemCTA} />))}
        </div>
    )
}