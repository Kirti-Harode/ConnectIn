export const fetchConnections = userId => (
    $.ajax ({
        url: 'api/connections',
        method: 'GET',
        data: {userId}
    })
);


export const createConnection = connection => (
    $.ajax ({
        url: 'api/connections',
        method: 'POST',
        data: {connection}
    })
);

export const deleteConnection = connectionId => (
    $.ajax ({
        url: `api/connections/${connectionId}`,
        method: 'DELETE'
    })
);