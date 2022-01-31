import * as ConnectionApiUtil from '../util/connection_api_util';

export const RECEIVE_CONNECTIONS = "RECEIVE_CONNECTIONS";
export const RECEIVE_CONNECTION = 'RECEIVE_CONNECTION';
export const REMOVE_CONNECTION = 'REMOVE_CONNECTION';

const receiveConnections = connections => ({
    type: RECEIVE_CONNECTIONS,
    connections
});

const receiveConnection = connection => ({
    type: RECEIVE_CONNECTION,
    connection
});

const removeConnection = connectionId => ({
    type: REMOVE_CONNECTION,
    connectionId
});

export const fetchConnections = userId => dispatch => (
    ConnectionApiUtil.fetchConnections(userId)
    .then(connections => dispatch(receiveConnections(connections)))
);

export const createConnection = connection => dispatch => (
    ConnectionApiUtil.createConnection(connection)
    .then(connection => dispatch(receiveConnection(connection)))
);

export const deleteConnection = connectionId => dispatch => (
    ConnectionApiUtil.deleteConnection(connectionId)
    .then(()=> dispatch(removeConnection(connectionId)))
);