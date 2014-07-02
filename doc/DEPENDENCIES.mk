# vim: noexpandtab

YICESVERSION=1.0.40
JAVABDDVERSION=1.0b2
CLOSURECOMMIT=9ae1d1f981b951a2332ff7f3ecd9dff4a7db2f88
XSBVERSION=340

all:
	@echo -n "It's recommend you run make individually for each of the "
	@echo "following dependencies that you need."
	@echo "\tyices (requires accepting a terms of service agreement)"
	@echo "\tboost"
	@echo "\tbuddy"
	@echo "\tclosure"
	@echo "\txsb"
	@echo "\tspidermonkey"
	@echo "\tjavabdd"
	@echo "\tcommons"

# Boost is installed at the end only because there are a couple manual
# steps needed, and the script outputs directions for these.
# %%% Make boost (eventually all of these) externally linkable
# %%% so that JAM can reuse already installed versions.
everything: yices buddy closure xsb spidermonkey javabdd commons gperftools boost

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

buddy:
	# Create the required libbdd.so (we need shared rather than static).
	cd $(JAMPKG)/wali/AddOns/Domains/ThirdParty/buddy-2.4 && ./configure && make

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
	git clone http://code.google.com/p/closure-compiler closure
	# Get the revision that was developed against.
	cd closure && git checkout $(CLOSURECOMMIT)
	# Apply JAM-specific patches.
	cat ./closure-patch/*.patch | patch -d closure -p1
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
	wget http://gperftools.googlecode.com/files/gperftools-2.1.tar.gz
	tar -xzf gperftools-2.1.tar.gz
	cd gperftools-2.1 && ./configure && make
	mv gperftools-2.1.tar.gz packages

# Install this if you have the development package.
wali:
	if [ ! -d "$(JAMPKG)/boost" ]; then echo "Please build boost first."; exit 1; fi;
	# The following uses SSH, requiring a public key setup.
	git clone git@github.com:WaliDev/WALi-OpenNWA.git wali
	# This is to fix a conflict in defines.
	sed -i "s/'BOOST_NO_DEFAULTED_FUNCTIONS'/#'BOOST_NO_DEFAULTED_FUNCTIONS'/" wali/SConstruct
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

# Currently unused
wala:
	# Retrieve IBM Wala source code.
	git clone git://github.org/wala/WALA.git


