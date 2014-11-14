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
sudo apt-get -y install git
sudo apt-get -y install vim
sudo apt-get -y install emacs23-nox
sudo apt-get -y install lynx
sudo apt-get -y install unzip
sudo apt-get -y install zip
sudo apt-get -y install scons
sudo apt-get -y install screen
sudo apt-get -y install openssh-server
sudo apt-get -y install g++
sudo apt-get -y install python-dev
sudo apt-get -y install zlib1g-dev
sudo apt-get -y install libbz2-dev
sudo apt-get -y install make

# Kaluza build dependencies
sudo apt-get -y install openjdk-7-jdk
sudo apt-get -y install ant
sudo apt-get -y install ocaml-nox

# WALi build dependencies
sudo apt-get -y install curl

# WALA build dependencies
sudo apt-get install maven

# Runtime dependencies
sudo apt-get -y install libgmp3-dev
sudo ln -s /usr/lib/libgmp.so.3 /usr/lib/libgmp.so.10
sudo apt-get -y install libnewmat10-dev
sudo apt-get -y install libunwind8-dev
sudo apt-get -y install libboost1.55-dev


# Some apps that I thought at one point were necessary, but don't seem
# to be any more.
#sudo apt-get install ia32-libs
#sudo apt-get install libcurl4-dev
#sudo apt-get install libxml2-dev
#sudo apt-get install libpcre-dev
#sudo apt-get install makedepend
#sudo apt-get install tofrodos
#sudo apt-get install g++-multilib

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

# Check out and build WALi/OpenNWA.
# The necessary binaries are actually part of the jam-release repository now.
#cd $JAMPKG
#svn co -r1939 svn+ssh://$SVNUSERNAME@velveeta.cs.wisc.edu/p/wpis/people/students/kidd/svnwali/trunk wali
# Update the files that need modifications for JAM.
#./wali-mod/distribute.bash
#cd wali
#scons
#scons addons

# To install all third-party dependencies, run the following.
# cd $JAMPKG
# make -f $JAMPKG/doc/DEPENDENCIES.mk all

