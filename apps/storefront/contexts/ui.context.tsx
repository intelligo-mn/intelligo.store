import React from "react";
import { CartProvider } from "@store/quick-cart/cart.context";

export interface State {
  displaySidebar: boolean;
  displayFilter: boolean;
  displayModal: boolean;
  displayCart: boolean;
  displayShop: boolean;
  displaySearch: boolean;
  modalView: string;
  modalData: any;
  drawerView: string | null;
  toastText: string;
}

const initialState = {
  displaySidebar: false,
  displayFilter: false,
  displayModal: false,
  displayCart: false,
  displayShop: false,
  displaySearch: false,
  modalView: "LOGIN_VIEW",
  drawerView: null,
  modalData: null,
  toastText: "",
};

type Action =
  | {
      type: "OPEN_SIDEBAR";
    }
  | {
      type: "CLOSE_SIDEBAR";
    }
  | {
      type: "OPEN_CART";
    }
  | {
      type: "CLOSE_CART";
    }
  | {
      type: "OPEN_SHOP";
    }
  | {
      type: "CLOSE_SHOP";
    }
  | {
      type: "OPEN_SEARCH";
    }
  | {
      type: "CLOSE_SEARCH";
    }
  | {
      type: "SET_TOAST_TEXT";
      text: ToastText;
    }
  | {
      type: "OPEN_FILTER";
    }
  | {
      type: "CLOSE_FILTER";
    }
  | {
      type: "OPEN_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_MODAL_VIEW";
      view: MODAL_VIEWS;
    }
  | {
      type: "SET_DRAWER_VIEW";
      view: DRAWER_VIEWS;
    }
  | {
      type: "SET_MODAL_DATA";
      data: any;
    }
  | {
      type: "SET_USER_AVATAR";
      value: string;
    };

type MODAL_VIEWS =
  | "SIGN_UP_VIEW"
  | "LOGIN_VIEW"
  | "FORGET_PASSWORD"
  | "PRODUCT_VIEW"
  | "ADDRESS_FORM_VIEW"
  | "ADDRESS_DELETE_VIEW"
  | "ADD_OR_UPDATE_CHECKOUT_CONTACT"
  | "ADD_OR_UPDATE_PROFILE_CONTACT";
type DRAWER_VIEWS = "CART_SIDEBAR" | "MOBILE_MENU";
type ToastText = string;

export const UIContext = React.createContext<State | any>(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        displaySidebar: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        displaySidebar: false,
        drawerView: null,
      };
    }
    case "OPEN_CART": {
      return {
        ...state,
        displayCart: true,
      };
    }
    case "CLOSE_CART": {
      return {
        ...state,
        displayCart: false,
      };
    }
    case "OPEN_SEARCH": {
      return {
        ...state,
        displaySearch: true,
      };
    }
    case "CLOSE_SEARCH": {
      return {
        ...state,
        displaySearch: false,
      };
    }
    case "OPEN_FILTER": {
      return {
        ...state,
        displayFilter: true,
      };
    }
    case "CLOSE_FILTER": {
      return {
        ...state,
        displayFilter: false,
      };
    }
    case "OPEN_SHOP": {
      return {
        ...state,
        displayShop: true,
      };
    }
    case "CLOSE_SHOP": {
      return {
        ...state,
        displayShop: false,
      };
    }
    case "OPEN_MODAL": {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        displayModal: false,
      };
    }
    case "SET_MODAL_VIEW": {
      return {
        ...state,
        modalView: action.view,
      };
    }
    case "SET_DRAWER_VIEW": {
      return {
        ...state,
        drawerView: action.view,
      };
    }
    case "SET_MODAL_DATA": {
      return {
        ...state,
        modalData: action.data,
      };
    }
    case "SET_TOAST_TEXT": {
      return {
        ...state,
        toastText: action.text,
      };
    }
    case "SET_USER_AVATAR": {
      return {
        ...state,
        userAvatar: action.value,
      };
    }
  }
}

export const UIProvider: React.FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });
  const toggleSidebar = () =>
    state.displaySidebar
      ? dispatch({ type: "CLOSE_SIDEBAR" })
      : dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebarIfPresent = () =>
    state.displaySidebar && dispatch({ type: "CLOSE_CART" });
  const openCart = () => dispatch({ type: "OPEN_CART" });
  const closeCart = () => dispatch({ type: "CLOSE_CART" });
  const toggleCart = () =>
    state.displaySidebar
      ? dispatch({ type: "CLOSE_CART" })
      : dispatch({ type: "OPEN_CART" });
  const closeCartIfPresent = () =>
    state.displaySidebar && dispatch({ type: "CLOSE_CART" });

  const openFilter = () => dispatch({ type: "OPEN_FILTER" });
  const closeFilter = () => dispatch({ type: "CLOSE_FILTER" });

  const openShop = () => dispatch({ type: "OPEN_SHOP" });
  const closeShop = () => dispatch({ type: "CLOSE_SHOP" });

  const openModal = () => dispatch({ type: "OPEN_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
  const openSearch = () => dispatch({ type: "OPEN_SEARCH" });
  const closeSearch = () => dispatch({ type: "CLOSE_SEARCH" });

  const setUserAvatar = (_value: string) =>
    dispatch({ type: "SET_USER_AVATAR", value: _value });

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: "SET_MODAL_VIEW", view });
  const setDrawerView = (view: DRAWER_VIEWS) =>
    dispatch({ type: "SET_DRAWER_VIEW", view });
  const setModalData = (data: any) =>
    dispatch({ type: "SET_MODAL_DATA", data });

  const value = React.useMemo(
    () => ({
      ...state,
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openCart,
      closeCart,
      toggleCart,
      closeCartIfPresent,
      openFilter,
      closeFilter,
      openShop,
      closeShop,
      openModal,
      closeModal,
      openSearch,
      closeSearch,
      setModalView,
      setDrawerView,
      setUserAvatar,
      setModalData,
    }),
    [state]
  );

  return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: React.FC = ({ children }) => (
  <CartProvider>
    <UIProvider>{children}</UIProvider>
  </CartProvider>
);
