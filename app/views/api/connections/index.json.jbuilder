@connections.each do |connection|
    json.set! connection.id do
        json.partial! 'api/connections/connection', connection: connection
    end
end