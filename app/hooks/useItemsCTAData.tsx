import { ItemCTAProps } from "@/components/CTA/ItemCTA";
import { useMemo } from "react";
import { BsPinMap, BsPhone, BsEnvelopeAt, BsInstagram, BsLinkedin } from "react-icons/bs";

export function useItemsCTAData() {
    const CTAsDetails: ItemCTAProps[] = useMemo(() => [
        {
            name: "Address",
            linkData: {
                text: "Adresse - Nîmes",
                href: "https://www.google.com/maps/@43.8321178,4.3664088,15.06z?entry=ttu",
                target: "_blank",
                rel: "noreferrer",
                ariaLabel: "Ouvre l'accés à l'addresse sur google map",
                IconCTA: BsPinMap
            }
        },
        {
            name: "Phone",
            linkData: {
                text: "Téléphone - 04 65 24 22 76",
                href: "tel:+33465242276",
                target: "_blank",
                rel: "noreferrer",
                ariaLabel: "Permet de passer un appel téléphonique",
                IconCTA: BsPhone
            }
        },
        {
            name: "Email",
            linkData: {
                text: "E-mail - nl.fr@developer.com",
                href: "mailto:nl.fr@developer.com?subject=Prise de rendez-vous",
                ariaLabel: "Permet d'envoyer un mail par votre application de mail",
                IconCTA: BsEnvelopeAt
            }
        },
        {
            name: "Instagram",
            linkData: {
                target: "_blank",
                rel: "noreferrer",
                text: "Instagram - nico.lp.dev",
                href: "https://www.instagram.com/nico.lp.dev/?hl=fr",
                ariaLabel: "Permet d'envoyer un message par instagram",
                IconCTA: BsInstagram
            }
        },
        {
            name: "Linkedin",
            linkData: {
                target: "_blank",
                rel: "noreferrer",
                text: "Linkedin - nicolas laporte",
                href: "https://www.linkedin.com/in/nicolas-laporte-5b9929147/",
                ariaLabel: "Permet d'envoyer un message par linkedin",
                IconCTA: BsLinkedin
            }
        }
    ], []);
    return CTAsDetails;
}