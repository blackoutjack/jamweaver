#!/bin/bash
# This script runs performance profiling utilities on the
# counterexample-search component of JAM.
# %%% Perhaps it could be expanded to other profiling tasks.

# Run GPerfTools heap profiling
function gperfheap {
  raut=$1
  prefix=$2
  interval=$3

  if [[ -z "$interval" ]]; then
    # Default 100MB sampling interval
    interval=$((1024*1024*100))
  fi

  # Run the profiler.
  HEAPPROFILE=$prefix HEAP_PROFILE_ALLOCATION_INTERVAL=$interval ./bin/nwa $raut > /dev/null
  pprof --pdf ./bin/nwa $prefix.*.heap >| $prefix.heap.pdf

  # Collect the results.
  mkdir -p $JAMPKG/perf/$prefix
  mv $prefix.* $JAMPKG/perf/$prefix
}

# Run GPerfTools CPU profiling
function gperfcpu {
  raut=$1
  prefix=$2
  freq=$3

  if [[ -z "$freq" ]]; then
    # Default 100ms sampling interval
    freq=1000
  fi

  # Run the profiler.
  # %%% For some reason linking in -lprofiler doesn't work for this
  # %%% even though it does for heap profiling.
  LD_PRELOAD=/usr/local/lib/libprofiler.so CPUPROFILE=$prefix.prof CPUPROFILE_FREQUENCY=$freq ./bin/nwa $raut > /dev/null
  pprof --callgrind ./bin/nwa $prefix.prof >| $prefix.callg

  # Collect the results.
  mkdir -p $JAMPKG/perf/$prefix
  mv $prefix.* $JAMPKG/perf/$prefix
}

topdir=$1
if [[ -z "$topdir" ]]; then
  topdir=$JAMPKG/output
fi

fls=`find $topdir -name raut-0.aut`

for fl in $fls; do
  parent=${fl%/*}
  polpart=${parent##*/}
  parent=${parent%/*}
  apppart=${parent##*/}

  pref=$apppart.$polpart

  echo "Profiling heap ($pref)"
  gperfheap $fl $pref
  echo "Profiling time ($pref)"
  gperfcpu $fl $pref
done

exit
# Legacy code below here.

for (( i=0; i<13; i++ )); do
  dirnum=$(( $i + 1 ))
  echo "i: $i"

  HEAPPROFILE=snote-$i HEAP_PROFILE_ALLOCATION_INTERVAL=$((1024*1024*100)) ./bin/nwa output/snote-$dirnum/1/raut-0.aut > /dev/null
  pprof --pdf ./bin/nwa snote-$i.*.heap >| snote-$i.heap.pdf
  #CPUPROFILE=snote-$i ./bin/nwa output/snote-$dirnum/1/raut-0.aut $i
  #pprof --pdf ./bin/nwa snote-$i.*.prof >| snote-$i.prof.pdf

  # Collect the results.
  mkdir -p perf/snote/$i
  mv snote-$i.* perf/snote/$i
done

# Disable tcmalloc.
make clean && make GPERFLINK="" > /dev/null

# Valgrind tools
for (( i=0; i<13; i++ )); do
  dirnum=$(( $i + 1 ))
  echo "i: $i"

  valgrind --tool=callgrind ./bin/nwa output/snote-$dirnum/1/raut-0.aut $i > /dev/null
  valgrind --tool=massif ./bin/nwa output/snote-$dirnum/1/raut-0.aut $i > /dev/null

  # Collect the results.
  mkdir -p perf/snote/$i
  mv callgrind.* perf/snote/$i
  mv massif.* perf/snote/$i
done

