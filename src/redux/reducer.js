const INITIAL = {
    notif: true,
    panel: false,
    skrol: false
}

export default (state = INITIAL, action) => {
    switch (action.type) {
        case 'notif' : return {...state, notif:!state.notif}
        case 'panel' : return {...state, panel:action.payload}
        case 'skrol' : return {...state, panel:!state.panel, skrol:!state.skrol}
        default : return state
    }
}