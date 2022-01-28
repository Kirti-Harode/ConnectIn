@abouts.each do |about| 
    json.set! about.id do 
        json.partial! 'api/abouts/about', about: about
    end
end