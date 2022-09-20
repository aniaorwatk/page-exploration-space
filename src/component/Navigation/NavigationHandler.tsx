import React from "react";

export interface IPropsLink {
    id: number;
    url: string;
    text: string;
}

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Dźwięk',
    },
    {
        id: 2,
        url: '/',
        text: 'Ranking',
    },
    {
        id: 3,
        url: '/error-report',
        text: 'Profil',
    },
    {
        id: 4,
        url: '/',
        text: 'Informacje',
    },
];

