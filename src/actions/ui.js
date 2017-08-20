export const CHANGE_UI_VIEW = 'CHANGE_UI_VIEW';

export function changeUiView (activeView) {
    return {
        type: CHANGE_UI_VIEW,
        activeContainer: activeView
    };
}
