const initailState = {
    nav: "ahiih"
}
export default function reducer(state = initailState, action) {
    switch (action.type) {
        case "setNav":
            return state = {
                ...state,
                nav: action.payload
            }
            break;

        default:
            break;
    }
    return state;
}