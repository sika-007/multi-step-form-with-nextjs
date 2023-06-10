import { Data } from "./models";

export const data: Data = {
    personalInfo: {
        name: "",
        email: "",
        telephone: "",
    },
    plans: [
        {
            title: "Arcade",
            billing: {
                monthly: 9,
                yearly: 90
            },
            isSelected: true,
            id: 0
        },
        {
            title: "Advanced",
            billing: {
                monthly: 12,
                yearly: 110
            },
            isSelected: false,
            id: 1
        },
        {
            title: "Pro",
            billing: {
                monthly: 15,
                yearly: 130
            },
            isSelected: false,
            id: 2
        },
    ],
    addons: [
        {
            name: "online-service",
            title: "Online service",
            description: "Access to multiplayer games",
            isSelected: false,
            billing: 2,
        },
        {
            name: "larger-storage",
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            isSelected: false,
            billing: 10,
        },
        {
            name: "customizable-profile",
            title: "Customizable profile",
            description: "Custom theme on your profile",
            isSelected: false,
            billing: 5,
        },
    ]
}