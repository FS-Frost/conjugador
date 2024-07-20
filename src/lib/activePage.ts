import { writable } from 'svelte/store';

const pagesKeys = <const>[
    "inicio",
];

export const pages: string[] = pagesKeys.map(page => page.toString());

export type ActivePage = typeof pagesKeys[number];

export const defaultPage: ActivePage = "inicio";

export const activePage = writable<ActivePage>();

export function isPage(keyInput: string): keyInput is ActivePage {
    return pages.includes(keyInput);
}
