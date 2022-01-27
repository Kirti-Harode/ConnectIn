# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
# to camelize all the keys in jbuilder

Jbuilder.key_format camelize: :lower