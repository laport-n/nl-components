# CTA components

Un composant sticky pour exposer des calls to actions avec animations.

## Dépendances
- react-icons
- framer-motions

## Interface

```typescript

interface ItemCTAProps {
    name: string, // used to dynamicly set variant name
    linkData: {
        text: string, // the text shown on hover
        href: string, // link href
        target?: string, // link target
        rel?: string, // link rel
        ariaLabel: string, // link arialabel
        IconCTA: IconType, // The react-icons icon to show as item
    }
}
```
## Usage

```typescript
const itemsCTA: ItemCTAProps[] = [{
        name: "Address",
        linkData: {
            text: "Adresse - Nîmes",
            href: "https://www.google.com/maps/@43.8321178,4.3664088,15.06z?entry=ttu",
            target: "_blank",
            rel: "noreferrer",
            ariaLabel: "Ouvre l'accés à l'addresse sur google map",
            IconCTA: BsPinMap
        }
    }
];
return <ContainerCTA itemsCTA={itemsCTA} />;
```

## Demo
![Alt Text](./chrome-capture-2024-4-19.gif)