# vim: noexpandtab

# This should be set as an environment variable.
JAMPKG?=$(PWD)

# Directory to house the various executables.
BINDIR=$(JAMPKG)/bin
# Directory containing the JAM source
SRCDIR=$(JAMPKG)/src
# C++ compiler.
CPP=g++
# Optimization level
OLEVEL=-O3
# C/C++ compilation flags
CFLAGS=$(OLEVEL) #-g

# gperftools locations
GPERFLINK=-Wl,-rpath,$(JAMPKG)/gperftools-2.1/.libs -L$(JAMPKG)/gperftools-2.1/.libs -ltcmalloc #-lprofiler
GPERFINCLUDE=-I$(JAMPKG)/gperftools-2.1/src

# For compiling/linking against OpenNWA
WALIDIR=$(JAMPKG)/wali
WALIINCLUDE=-I$(WALIDIR)/Source -I$(WALIDIR)/AddOns/Domains/Source -I$(WALIDIR)/AddOns/Domains/ThirdParty/include $(GPERFINCLUDE) #-DJAMDEBUG #-DJAMPROFILE #-DJAMDOT
# Use -ltcmalloc if you want to use gperftools; don't link it if you
# want to use valgrind.
WALILINK=-Wl,-rpath,$(WALIDIR)/AddOns/Domains/ThirdParty/buddy-2.4/src/.libs -Wl,-rpath,$(WALIDIR)/lib64 -L$(WALIDIR)/AddOns/Domains/ThirdParty/buddy-2.4/src/.libs -L$(WALIDIR)/lib64 -ldl -lwali -lwalidomains -lbdd -lm -lnewmat -lglog $(GPERFLINK)

# For compiling/linking against Yices
YICESVERSION=1.0.40
YICESDIR=$(JAMPKG)/yices-$(YICESVERSION)
YICESINCLUDE=-I$(YICESDIR)/include
YICESLINK=-Wl,-rpath,$(YICESDIR)/lib -L$(YICESDIR)/lib -lyices

# For compiling against XSB
XSBDIR=$(JAMPKG)/XSB
XSBINCLUDE=-I$(XSBDIR)/config/x86_64-unknown-linux-gnu -I$(XSBDIR)/emu
XSBEXE=$(XSBDIR)/bin/xsb --quietload --nobanner --noprompt
XSBOPTS=quit_on_error,optimize#,auto_table,suppl_table,modeinfer
XSBCOMP=set_global_compiler_options([$(XSBOPTS)]).\nassert(library_directory('$(LIBDIR)')).\n

# For compiling against V8
V8DIR=$(JAMPKG)/v8
V8INCLUDE=-I$(V8DIR)/include
V8LINK=-Wl,-rpath,$(V8DIR)/out/native/lib.target -L$(V8DIR)/out/native/lib.target -lv8

# For compiling against SpiderMonkey
SPIDERMONKEYDIR=$(JAMPKG)/js-1.8.5/js/src/dist
SPIDERMONKEYINCLUDE=-I$(SPIDERMONKEYDIR)/include
SPIDERMONKEYLINK=-fno-rtti -fno-exceptions -Wall -Wpointer-arith -Woverloaded-virtual -Wsynth -Wno-ctor-dtor-privacy -Wno-non-virtual-dtor -Wcast-align -Wno-invalid-offsetof -Wno-variadic-macros -Werror=return-type -pedantic -Wno-long-long -fno-strict-aliasing -pthread -pipe  -DNDEBUG -DTRIMMED -Os -freorder-blocks -fomit-frame-pointer -lpthread -Wl,-rpath,$(SPIDERMONKEYDIR)/lib -L$(SPIDERMONKEYDIR)/lib -lmozjs185 -ldl
# %%% An attempt was made to link with the libjs_static.a generated as
# %%% part of the JAMScript build. This did not work because of
# %%% transient static dependencies, among other reasons.
#SPIDERMONKEYDIR=$(JAMPKG)/jamscript/mozilla-esr17-dev/obj-orig-release/browser/dist
#SPIDERMONKEYLINK = $(SPIDERMONKEYDIR)/lib/libjs_static.a -L$(SPIDERMONKEYDIR)/lib -lnspr4 $(SPIDERMONKEYDIR)/lib/libmozglue.a $(SPIDERMONKEYDIR)/lib/libmemory.a

# More required header files
BOOSTINCLUDE=-I$(JAMPKG)/boost
JNIINCLUDE=-I/usr/lib/jvm/java-6-openjdk-amd64/include -I/usr/lib/jvm/java-6-openjdk/include

# Native libraries to be built
LIBDIR=$(JAMPKG)/lib
OBJDIR=$(JAMPKG)/obj

# OpenNWA interface library
NWASRCDIR=$(SRCDIR)/nwa
NWABASE=nwa
NWALIB=$(NWABASE:%=$(LIBDIR)/lib%.so)
NWAOBJ=$(NWABASE:%=$(OBJDIR)/%.o)

NWAMAIN=nwa util RelationWeightGen ShortestPathRelation ShortestPathRelationVisitor
NWAOBJS=$(NWAMAIN:%=$(OBJDIR)/%.o)

NWAJNI=nwajni jniutil
NWAJNIOBJS=$(NWAJNI:%=$(OBJDIR)/%.o)
NWAJNILIB=$(LIBDIR)/libnwajni.so

# Primary semantics modules
JSSEMSRCDIR=$(SRCDIR)/semantics/javascript
SEMMAIN=symload conload
SEMMAINSRC=$(SEMMAIN:%=$(JSSEMSRCDIR)/%.P)
SEMMAINLIB=$(SEMMAIN:%=$(LIBDIR)/%.xwam)
SEMMAINDAT=$(SEMMAIN:%=$(LIBDIR)/%.P)

# Semantics submodules in .P files
SEMSUB=core symbolic concrete ast pred assrt funfacts polprops sentwrap
SEMSUBSRC=$(SEMSUB:%=$(JSSEMSRCDIR)/%.P)
SEMSUBLIB=$(SEMSUB:%=$(LIBDIR)/%.xwam)
SEMSUBDAT=$(SEMSUB:%=$(LIBDIR)/%.P)

# Semantics modules in .cpp files
SEMCBASE=persist sentinel 
SEMCSRC=$(SEMCBASE:%=$(JSSEMSRCDIR)/%.cpp) $(SEMCBASE:%=$(JSSEMSRCDIR)/%.H)
SEMCLIB=$(SEMCBASE:%=$(LIBDIR)/%.so)
SEMCDAT=$(SEMCBASE:%=$(LIBDIR)/%.cpp) $(SEMCBASE:%=$(LIBDIR)/%.H)

# Semantics modules generated to model native JavaScript
SEMNAT=native nativef
SEMNATDAT=$(SEMNAT:%=$(LIBDIR)/%.P)
SEMNATLIB=$(SEMNAT:%=$(LIBDIR)/%.xwam)

NATIVE_DIR=src/native
NATIVE_DEFN=$(wildcard $(NATIVE_DIR)/*.models)
NATIVE_IN=generate.py base.P all.props fbase.P functions.list types.list varargs.list symprops.list base.yic 
NATIVE_DEP=$(NATIVE_IN:%=$(NATIVE_DIR)/%) $(NATIVE_DEFN)

all: jam semantics nwa $(BINDIR)/externs.zip

jam:
	mkdir -p $(BINDIR)
	make -C $(SRCDIR) jar BINDIR=$(BINDIR)

semantics: $(SEMMAINLIB)
	# Comment out the line below to examine generated source
	rm -f $(SEMCDAT) $(SEMSUBDAT) $(SEMMAINDAT) $(SEMNATDAT)

jamutil: jam
	make -C $(SRCDIR) jamutil

$(OBJDIR)/persist.o: $(JSSEMSRCDIR)/persist.cpp $(JSSEMSRCDIR)/persist.H
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(BOOSTINCLUDE) $(YICESINCLUDE) $(SPIDERMONKEYINCLUDE) $(XSBINCLUDE) -fPIC -o $@ $< -c

$(LIBDIR)/persist.so: $(OBJDIR)/persist.o
	mkdir -p $(LIBDIR) 
	$(CPP) $(CFLAGS) -shared -o $@ $< $(YICESLINK) $(SPIDERMONKEYLINK)
	if which fixso >/dev/null; then fixso $@; fi
	if ls $(@:.so=.xwam) >/dev/null 2>&1; then rm $(@:.so=.xwam); fi

$(OBJDIR)/sentinel.o: $(JSSEMSRCDIR)/sentinel.cpp $(JSSEMSRCDIR)/sentinel.H
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(XSBINCLUDE) -fPIC -o $@ $< -c

$(LIBDIR)/sentinel.so: $(OBJDIR)/sentinel.o
	mkdir -p $(LIBDIR) 
	$(CPP) $(CFLAGS) -shared -o $@ $<
	if which fixso >/dev/null; then fixso $@; fi
	if ls $(@:.so=.xwam) >/dev/null 2>&1; then rm $(@:.so=.xwam); fi

$(OBJDIR)/RelationWeightGen.o: $(NWASRCDIR)/RelationWeightGen.cpp $(NWASRCDIR)/RelationWeightGen.h
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(BOOSTINCLUDE) -fPIC -o $@ $< -c

$(OBJDIR)/ShortestPathRelation.o: $(NWASRCDIR)/ShortestPathRelation.cpp $(NWASRCDIR)/ShortestPathRelation.h
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(BOOSTINCLUDE) -fPIC -o $@ $< -c

$(OBJDIR)/ShortestPathRelationVisitor.o: $(NWASRCDIR)/ShortestPathRelationVisitor.cpp $(NWASRCDIR)/ShortestPathRelationVisitor.h
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(BOOSTINCLUDE) -fPIC -o $@ $< -c

$(OBJDIR)/util.o: $(NWASRCDIR)/util.cpp $(NWASRCDIR)/util.h
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(BOOSTINCLUDE) -fPIC -o $@ $< -c

$(NWAOBJ): $(NWASRCDIR)/nwa.cpp $(NWASRCDIR)/nwa.h
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(BOOSTINCLUDE) -fPIC -o $@ $< -c

$(NWALIB): $(NWAOBJS)
	mkdir -p $(LIBDIR) 
	$(CPP) $(CFLAGS) -shared -o $@ $(NWAOBJS) $(WALILINK)

$(BINDIR)/externs.zip: $(SRCDIR)/externs/*.js
	zip -j $(BINDIR)/externs.zip $(SRCDIR)/externs/*.js

$(BINDIR)/nwa: $(NWASRCDIR)/nwaexe.cpp $(NWALIB)
	mkdir -p $(BINDIR)
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(BOOSTINCLUDE) -o $(BINDIR)/nwa $< -Wl,-rpath,$(LIBDIR) -L$(LIBDIR) -lnwa $(WALILINK)

nwa: $(NWALIB) $(BINDIR)/nwa

$(OBJDIR)/jniutil.o: $(NWASRCDIR)/jniutil.cpp $(NWASRCDIR)/jniutil.h
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(JNIINCLUDE) -fPIC -o $@ $< -c

$(OBJDIR)/nwajni.o: $(NWASRCDIR)/nwajni.cpp $(NWASRCDIR)/nwajni.h
	mkdir -p $(OBJDIR) 
	$(CPP) $(CFLAGS) $(WALIINCLUDE) $(JNIINCLUDE) -fPIC -o $@ $< -c

$(NWAJNILIB): $(NWAJNIOBJS) $(NWAOBJS)
	mkdir -p $(LIBDIR)
	$(CPP) $(CFLAGS) -shared -o $@ $(NWAOBJS) $(NWAJNIOBJS) $(WALILINK)

$(LIBDIR)/symload.xwam: $(SEMCLIB) $(SEMCSRC) $(SEMMAINSRC) $(SEMSUBSRC) $(NATIVE_DEP)
	make natives
	make copylibs
	echo "$(XSBCOMP)[symload]." | $(XSBEXE) 2>&1
	
$(LIBDIR)/conload.xwam: $(SEMCLIB) $(SEMCSRC) $(SEMMAINSRC) $(SEMSUBSRC)
	make copylibs
	echo "$(XSBCOMP)[conload]." | $(XSBEXE)

copylibs: $(SEMMAINSRC) $(SEMSUBSRC) $(SEMCSRC)
	cp $(SEMMAINSRC) $(SEMSUBSRC) $(SEMCSRC) $(LIBDIR)

natives: $(NATIVE_DEP)
	mkdir -p $(LIBDIR)
	./src/native/generate.py



clean: nwaclean jamclean
	rm -rf $(BINDIR) $(LIBDIR) $(OBJDIR)

jamclean:
	make -C $(SRCDIR) clean

cacheclean:
	rm -f $(JAMPKG)/cache/*.bin

tmpclean:
	rm -rf $(JAMPKG)/output/*

nwaclean:
	rm -f $(LIBDIR)/libnwa.so $(NWAOBJS) $(BINDIR)/nwa

veryclean: clean cacheclean tmpclean

