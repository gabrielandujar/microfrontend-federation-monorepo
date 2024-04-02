import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const guestUser = {
    id: 0,
    name: 'Guest',
    profile: 'guest',
    image: 'https://ui-avatars.com/api/?rounded=true&name=guest',
    logged: false
}
const useUserStore = create()(
    persist(
        (set, get) => ({
            id: 0,
            name: 'Guest',
            profile: 'guest',
            image: 'https://ui-avatars.com/api/?rounded=true&name=guest',
            logged: false,
            setUser: (user) => set({ ...user, logged: true }),
            setLogin: () => set(state => ({ ...state, logged: true })),
            setUserProp: (propName, value) => {
                let user = []
                user[propName] = value
                set(state => ({ ...state, ...user }))
            },
            logout: () => (set({ ...guestUser }))
        }),
        {
            name: "user-store",
            storage: createJSONStorage(() => localStorage),
        }

    )
);


export default useUserStore;  