import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { useVariantsItemCTA } from "./hooks/useVariantsItemCTA";

export interface ItemCTAProps {
    name: string,
    linkData: {
        text: string,
        href: string,
        target?: string,
        rel?: string,
        ariaLabel: string,
        IconCTA: IconType,
    }
}

export function ItemCTA({ linkData, name }: ItemCTAProps) {
    const { variantsIcon, variantsLink, variantsText } = useVariantsItemCTA(name);
    return (
        <motion.a
            animate={`initial${name}`}
            whileHover={`hover${name}`}
            variants={variantsLink}
            className={`relative flex md:ml-auto flex-row items-center w-fit h-12 rounded-full shadow-lg`} target={linkData.target} rel={linkData.rel} href={linkData.href} aria-label={linkData.ariaLabel}>
            <motion.div
                className="text-white hidden"
                variants={variantsText}
            >
                {linkData.text}
            </motion.div>
            <motion.div variants={variantsIcon}>
                <linkData.IconCTA className="px-2.5 py-2.5 w-12 h-12" />
            </motion.div>
        </motion.a >
    )
}