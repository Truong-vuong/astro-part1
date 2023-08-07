import { atom, map } from 'nanostores';

export const isOpen = atom(false);

export const isDisplaySvelte = atom(false);
export const vueState = map({
    name: 'vuong',
    age: 25
});
export const isCartOpen = atom(false);
