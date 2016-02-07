Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.synced_folder ".", "/home/vagrant/project",
                            type: "rsync",
                            rsync__exclude: [".git/", "node_modules/"]
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y g++
    curl -sL https://deb.nodesource.com/setup_4.x | sh
    apt-get install -y nodejs
    npm install -g npm@latest
    su vagrant
    cd /home/vagrant/project
    npm install
  SHELL
  config.vm.network :forwarded_port, guest: 8080, host: 8080
end
