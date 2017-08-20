import { CHANGE_UI_VIEW } from '../actions/ui';

const initState = {
    activeContainer: 'Home'
};

const uiView = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_UI_VIEW:
            return {
                activeContainer: action.activeView
            };

        default:
            return state;

    }
};

export default uiView;
