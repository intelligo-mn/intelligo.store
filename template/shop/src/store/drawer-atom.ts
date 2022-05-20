import { atom } from 'jotai';
interface DrawerState {
  display: boolean;
  view: string;
  data?: any;
}
export const drawerAtom = atom<DrawerState>({
  display: false,
  view: '',
  data: null,
});
