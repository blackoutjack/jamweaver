#
# This mostly-automatic script should be run on a fresh install of
# Ubuntu Server 14.04 amd64. It is recommended that you first set the
# JAMPKG environment variable (defaulting to $PWD/jam), and alter the
# SVNUSERNAME variable found below.
#
# If you're working with a preinstalled VM image containing the JAM
# binaries, you just need to run the DEPENDENCIES.bash script, since
# all necessary package-manager applications are already present.
#
# %%% Need to make script less assumptive of initial environment.
#

# Set the following environment variables in your login script.
export JAMPKG=${JAMPKG-$PWD}
 

# Install some baseline apps.
sudo apt-get -y install git vim emacs23-nox lynx unzip zip scons screen openssh-server g++ python-dev zlib1g-dev libbz2-dev make

# Closure/WALi/WALA build dependencies
sudo apt-get -y install openjdk-7-jdk ant ocaml-nox curl maven

# Runtime dependencies
sudo apt-get -y install libgmp3-dev libnewmat10-dev libunwind8-dev libboost-all-dev

# Choose version 7 of Java; you will be presented with a list of
# options; choose openjdk 7.
sudo update-alternatives --config javac
sudo update-alternatives --config java

# Set up some environment variables and aliases.
cat >> ~/.bashrc.local <<EOF
export EDITOR=vim
export JAMPKG=$JAMPKG
export YICES_VERSION=1.0.40

export LD_LIBRARY_PATH=\$JAMPKG/lib:\$JAMPKG/wali/lib64:\$JAMPKG/libjson:\$JAMPKG/yices-\$YICES_VERSION/lib:\$JAMPKG/js-1.8.5/js/src/dist/lib:\$JAMPKG/wali/AddOns/Domains/ThirdParty/buddy-2.4/src/.libs:\$JAMPKG/JavaBDD:\$JAMPKG/v8/out/native/lib.target:\$JAMPKG/gperftools-2.1/.libs
export PATH=\$PATH:\$JAMPKG/XSB/bin:\$JAMPKG/yices-\$YICES_VERSION/bin:\$JAMPKG/v8/out/native:/usr/lib/jvm/java-7-openjdk/bin

alias jam="java -Xms256m -Xmx4096m -jar \$JAMPKG/bin/jam.jar"
alias jamdbg="java -ea -Xms256m -Xmx4096m -Xdebug -agentlib:jdwp=transport=dt_socket,address=localhost:9009,server=y,suspend=n -jar \$JAMPKG/bin/jam.jar -g -b -v 3"
alias jamutil="java -jar \$JAMPKG/bin/util.jar"
EOF

# Load .bashrc.local at login.
echo "source ~/.bashrc.local" >> ~/.bashrc
source ~/.bashrc

# Put the downloaded tarballs here for future reference.
cd $JAMPKG
mkdir packages

# To install all third-party dependencies, run the following.
# cd $JAMPKG
# make -f $JAMPKG/doc/DEPENDENCIES.mk all

