#!/bin/bash
cd /tmp
curl -sSL https://github.com/cli/cli/releases/download/v2.83.2/gh_2.83.2_linux_amd64.tar.gz -o gh.tar.gz
tar -xzf gh.tar.gz
mkdir -p ~/bin
cp gh_2.83.2_linux_amd64/bin/gh ~/bin/
chmod +x ~/bin/gh
