const zealit = require('zealit');

const actionType = {
    $$typeof: '',
    Model_Open_Create_Node: 'OpenModal_CreateNode',
    Model_Open_Create_Edge: 'OpenModal_CreateEdge',
    Model_Open_Update_Edge: 'OpenModal_UpdateEdge',
    Model_Open_Update_Node: 'OpenModal_UpdateNode',
    Model_Close: 'CloseModal',
    ELE_UNSELECTED: 'ELE_UNSELECTED',
    ELE_SELECTED: 'ELE_SELECTED',
    TURN_DRAW: 'TURN_DRAW',
    SET_ZOOM: 'SET_ZOOM',
    SET_PROJECT_DETAILS: 'SET_PROJECT_DETAILS',
    SET_UNDO: 'SET_UNDO',
    SET_REDO: 'SET_REDO',
    ADD_GRAPH_INSTANCE: 'ADD_GRAPH_INSTANCE',
    ADD_GRAPH: 'ADD_GRAPH',
    ADD_GRAPH_BULK: 'ADD_GRAPH_BULK',
    CHANGE_TAB: 'CHANGE_TAB',
    CHANGE_RESET: 'CHANGE_RESET',
    REMOVE_GRAPH: 'REMOVE_GRAPH',
    NEW_GRAPH: 'NEW_GRAPH',
    SET_SHARE_MODAL: 'SET_SHARE_MODAL',
    SET_SETTING_MODAL: 'SET_SETTING_MODAL',
    SET_MARKDOWN_MODAL: 'SET_MARKDOWN_MODAL',
    SET_FILE_REF: 'SET_FILE_REF',
    SET_HISTORY_MODAL: 'SET_HISTORY_MODAL',
    SET_AUTHOR: 'SET_AUTHOR',
    IS_WORKFLOW_ON_SERVER: 'IS_WORKFLOW_ON_SERVER',
    SET_CUR_INSTANCE: 'SET_CUR_INSTANCE',
    SET_CUR_INDEX: 'SET_CUR_INDEX',
    SET_ZOOM_LEVEL: 'SET_ZOOM_LEVEL',
    SET_EDIT_DETAILS_MODAL: 'SET_EDIT_DETAILS_MODAL',
    SET_NEW_GRAPH_MODAL: 'SET_NEW_GRAPH_MODAL',
    SET_OPTIONS_MODAL: 'SET_OPTIONS_MODAL',
    EDIT_TEXTFILE: 'EDIT_TEXTFILE',
    SET_FILE_HANDLE: 'SET_FILE_HANDLE',
    SET_DIR_NAME: 'SET_DIR_NAME',
    SET_FILE_STATE: 'SET_FILE_STATE',
    SET_INPUT_FILE: 'SET_INPUT_FILE',
    SET_OPTIONS: 'SET_OPTIONS',
    SET_FUNCTIONS: 'SET_FUNCTIONS',
};

export default zealit(actionType);
