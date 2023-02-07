def build
    remote.run "bin/rails assets:precompile", raise_on_error: false
end