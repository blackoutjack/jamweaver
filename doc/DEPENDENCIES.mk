# vim: noexpandtab

YICESVERSION=1.0.40
JAVABDDVERSION=1.0b2
CLOSURECOMMIT=ce00015cf8b238f380ac679aaba39c444828d158
XSBVERSION=340
IDLDIR=$(JAMPKG)/idlgen

all:
	@echo -n "It's recommend you run make individually for each of the "
	@echo "following dependencies that you need."
	@echo "\tyices (requires accepting a terms of service agreement)"
	@echo "\twali"
	@echo "\tclosure"
	@echo "\txsb"
	@echo "\tspidermonkey"
	@echo "\tjavabdd"
	@echo "\tcommons"
	@echo "\tgperftools"

# Boost is installed at the end only because there are a couple manual
# steps needed, and the script outputs directions for these.
# %%% Make boost (eventually all of these) externally linkable
# %%% so that JAM can reuse already installed versions.
everything: yices wali closure xsb spidermonkey javabdd commons gperftools

yices:
	mkdir -p packages
	# %%% Much too interactive!
	# Download the build of Yices 1 with libgmp dynamically linked.
	# Accept EULA and download tar file.
	lynx http://yices.csl.sri.com/cgi-bin/yices-newlicense.cgi?file=yices-$(YICESVERSION)-x86_64-unknown-linux-gnu.tar.gz
	tar -xzf yices-$(YICESVERSION)-x86_64-unknown-linux-gnu.tar.gz
	# This line is for yices version 2.
	#ln -s libyices.so.$(YICESVERSION) yices-$(YICESVERSION)/lib/libyices.so
	mv yices-$(YICESVERSION)-x86_64-unknown-linux-gnu.tar.gz packages/

closure:
	# Check out and build Closure compiler from Google. 
	git clone https://github.com/google/closure-compiler.git closure
	# Get the revision that was developed against.
	cd closure && git checkout $(CLOSURECOMMIT)
	# Apply JAM-specific patches.
	cat ./patch/closure/*.patch | patch -d closure -p1
	cd closure && ant jar

xsb:
	mkdir -p packages
	# Get and build XSB.
	wget http://xsb.sourceforge.net/downloads/XSB$(XSBVERSION).tar.gz
	tar -xzf XSB$(XSBVERSION).tar.gz
	mv XSB$(XSBVERSION).tar.gz packages/
	cd XSB/build && ./configure && ./makexsb

spidermonkey:
	mkdir -p packages
	# Get the SpiderMonkey package.
	wget http://ftp.mozilla.org/pub/mozilla.org/js/js185-1.0.0.tar.gz
	tar -xzf js185-1.0.0.tar.gz
	mv js185-1.0.0.tar.gz packages/
	# Make a symbolic link that will be needed later.
	cd js-1.8.5/js/src && ./configure && make
	ln -s libmozjs185.so js-1.8.5/js/src/dist/lib/libmozjs185.so.1.0

javabdd:
	mkdir -p packages
	# Get the JavaBDD library. We need the source package since libbuddy.so
	# in the prebuilt package is 32-bit.
	wget http://downloads.sourceforge.net/project/javabdd/javabdd-src/1.0b2%20source/javabdd_src_$(JAVABDDVERSION).tar.gz
	tar -xzf javabdd_src_$(JAVABDDVERSION).tar.gz
	mv javabdd_src_$(JAVABDDVERSION).tar.gz packages/
	# Tar bomb. Get this out of the way.
	mv JavaBDD_tests JavaBDD
	# Need to change the JDK_ROOT variable, and build (buddy) with -fPIC.
	cd JavaBDD && make EXTRA_CFLAGS=-fPIC JDK_ROOT=/usr/lib/jvm/java-7-openjdk-amd64

commons:
	mkdir -p packages
	wget http://archive.apache.org/dist/commons/lang/binaries/commons-lang3-3.1-bin.tar.gz
	tar -xzf commons-lang3-3.1-bin.tar.gz
	mv commons-lang3-3.1-bin.tar.gz packages

# Needed to build nwa from source, when using tcmalloc.
gperftools:
	wget https://googledrive.com/host/0B6NtGsLhIcf7MWxMMF9JdTN3UVk/gperftools-2.2.1.tar.gz
	#wget http://gperftools.googlecode.com/files/gperftools-2.1.tar.gz
	tar -xzf gperftools-2.2.1.tar.gz
	cd gperftools-2.2.1 && ./configure && make
	mv gperftools-2.2.1.tar.gz packages

# Install this if you have the development package.
wali:
	#if [ ! -d "$(JAMPKG)/boost" ]; then echo "Please build boost first."; exit 1; fi;
	# The following uses SSH, requiring a public key setup.
	git clone https://github.com/WaliDev/WALi-OpenNWA.git wali
	scons -C wali
	scons -C wali addons

#
# Obsolete/unused packages
#

# Not currently used
kaluza:
	mkdir -p packages
	# Download and build Kaluza.
	wget http://aerie.cs.berkeley.edu/kaluza/KaluzaBin.tar.gz
	tar -xzf KaluzaBin.tar.gz
	mv KaluzaBin.tar.gz packages/
	cd KaluzaBin/hampi && ./configure && make

# Not currently used.
v8:
	# %%% Convert to get released version rather than SVN
	# Check out and build V8.
	svn co http://v8.googlecode.com/svn/trunk v8
	# Alter the makefile CXX value to allow shared linking.
	cd v8; \
	make dependencies CXX="g++ -fPIC" || ( echo "If this failed, try removing the 's' from https in the URL above in Makefile"; exit 1; ); \
	make native CXX="g++ -fPIC" library=shared

# No longer needed
libjson:
	mkdir -p packages
	# Get and build libjson.
	wget http://sourceforge.net/projects/libjson/files/libjson_7.6.1.zip
	unzip libjson_7.6.1.zip
	mv libjson_7.6.1.zip packages/
	# Comment out the JSON_LIBRARY option.
	# Make the shared library.
	# Create symbolic links to the versioned shared object.
	sed -i 's/^#define JSON_LIBRARY/\/\/#define JSON_LIBRARY/' libjson/JSONOptions.h; \
	cd libjson && make SHARED=1
	ln -s libjson.so.7.6.1 libjson/libjson.so; \
	ln -s libjson.so.7.6.1 libjson/libjson.so.7

commons-io:
	mkdir -p packages
	wget http://mirror.olnevhost.net/pub/apache//commons/io/binaries/commons-io-2.4-bin.tar.gz
	tar -xzf commons-io-2.4-bin.tar.gz
	mv commons-io-2.4-bin.tar.gz packages

commons-logging:
	mkdir -p packages
	wget http://supergsego.com/apache//commons/logging/binaries/commons-logging-1.2-bin.tar.gz
	tar -xzf commons-logging-1.2-bin.tar.gz
	mv commons-logging-1.2-bin.tar.gz packages

# Currently unused
wala: commons-io
	# Retrieve IBM Wala source code and build with Maven.
	git clone https://github.com/wala/WALA.git wala
	cd wala; \
	mvn clean verify -DskipTests=true -q

# Utility for extracting JS from HTML.
jsunpack:
	svn co http://jsunpack-n.googlecode.com/svn/trunk $(JAMPKG)/util/jsunpack

antlr:
	mkdir -p $(IDLDIR)
	wget --directory-prefix $(IDLDIR)/ http://www.antlr.org/download/antlr-4.4-complete.jar

idl:
	cat ./patch/idlgen/IDL.g4.patch | patch -d idlgen -p1
	java -jar $(IDLDIR)/antlr-4.4-complete.jar -package edu.wisc.cs.jam.env.idl -o $(IDLDIR)/edu/wisc/cs/jam/env/idl $(IDLDIR)/IDL.g4
	javac -classpath $(IDLDIR)/antlr-4.4-complete.jar $(IDLDIR)/edu/wisc/cs/jam/env/idl/IDL*.java
	cd $(IDLDIR) && jar cf $(IDLDIR)/idl.jar edu/wisc/cs/jam/env/idl/*.class

webidl:
	cat ./patch/idlgen/WebIDL.g4.patch | patch -d idlgen -p1
	java -jar $(IDLDIR)/antlr-4.4-complete.jar -package edu.wisc.cs.jam.env.webidl -o $(IDLDIR)/edu/wisc/cs/jam/env/webidl $(IDLDIR)/WebIDL.g4
	javac -classpath $(IDLDIR)/antlr-4.4-complete.jar $(IDLDIR)/edu/wisc/cs/jam/env/webidl/WebIDL*.java
	cd $(IDLDIR) && jar cf $(IDLDIR)/webidl.jar edu/wisc/cs/jam/env/webidl/*.class

idlgen: antlr
	mkdir -p $(IDLDIR)
	wget --directory-prefix $(IDLDIR) https://raw.githubusercontent.com/antlr/grammars-v4/master/idl/IDL.g4
	make -f $(JAMPKG)/doc/DEPENDENCIES.mk idl
	wget --directory-prefix $(IDLDIR) https://raw.githubusercontent.com/antlr/grammars-v4/master/webidl/WebIDL.g4
	make -f $(JAMPKG)/doc/DEPENDENCIES.mk webidl

antlr2:
	wget http://www.java2s.com/Code/JarDownload/antlr/antlr-2.7.7.jar.zip
	unzip antlr-2.7.7.jar.zip
	mv antlr-2.7.7.jar.zip packages

corba: antlr2 commons-logging
	wget http://www.java2s.com/Code/JarDownload/apache-axiom/apache-axiom-api-1.2.7.jar.zip
	unzip apache-axiom-api-1.2.7.jar.zip
	mv apache-axiom-api-1.2.7.jar.zip packages
	wget http://www.java2s.com/Code/JarDownload/axis2-kernel/axis2-kernel-1.6.2.jar.zip
	unzip axis2-kernel-1.6.2.jar.zip
	mv axis2-kernel-1.6.2.jar.zip packages
	wget http://www.java2s.com/Code/JarDownload/axis2-corba/axis2-corba-1.6.2.jar.zip
	unzip axis2-corba-1.6.2.jar.zip
	mv axis2-corba-1.6.2.jar.zip packages

# A sufficient boost version is now available via apt-get in Ubuntu.
boost:
	mkdir -p packages
	# Get and install boost. WALi priority queues need boost 1.49
	# or higher, which isn't offered as a apt package.
	wget http://downloads.sourceforge.net/project/boost/boost/1.49.0/boost_1_49_0.tar.bz2
	tar -xjf boost_1_49_0.tar.bz2
	mv boost_1_49_0.tar.bz2 packages/
	mv boost_1_49_0 boost
	@echo "One more step. Run the following."
	@echo "cd $(JAMPKG)/boost"
	@echo "sudo ./bootstrap.sh"
	@echo "sudo ./b2"

# The buddy package is now built as part of the wali target.
buddy:
	# Create the required libbdd.so (we need shared rather than static).
	cd $(JAMPKG)/wali/AddOns/Domains/ThirdParty/buddy-2.4 && ./configure && make



