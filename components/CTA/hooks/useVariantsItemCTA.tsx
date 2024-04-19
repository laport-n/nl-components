import { useMemo } from "react";

export function useVariantsItemCTA(name: string) {
    const variantsText = useMemo(() => ({
        [`initial${name}`]: {
            transitionEnd: {
                display: "none",
                opacity: 0,
                paddingLeft: "0",
                height: "auto",
                width: "auto",
            },
        },
        [`hover${name}`]: {
            display: "block",
            opacity: 1,
            paddingLeft: "16px",
            height: "auto",
            width: "auto",
            transition: {
                opacity: {
                    duration: 0.10,
                    delay: 0.15
                },
                width: {
                    duration: 0.15
                }
            }
        }
    }), [name]);

    const variantsIcon = useMemo(() => ({
        [`initial${name}`]: {
            rotateZ: 0,
            scale: 1,
            color: "rgb(49 46 129)",
        },
        [`hover${name}`]: {
            rotateZ: -90,
            color: "#ffffff",
            transition: {
                rotateX: {
                    duration: 0.5
                },
            }
        }
    }), [name]);

    const variantsLink = useMemo(() => ({
        [`initial${name}`]: {
            scale: 1,
            backgroundColor: "#ffff",
            border: "2px solid rgb(49 46 129)"
        },
        [`hover${name}`]: {
            scale: 1.1,
            backgroundColor: "rgb(99 102 241)",
            border: "2px solid white",
            transition: {
                scale: {
                    duration: 0.5
                },
                backgroundColor: {
                    duration: 0.5
                }
            }
        }
    }), [name]);

    return ({
        variantsIcon,
        variantsLink,
        variantsText
    });
}