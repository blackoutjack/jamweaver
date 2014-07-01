#/bin/bash
#
# If a virtual (or physical) machine crashes while documents are open
# in Vim, .swp recovery files will be left behind. This scripts searches
# for these files, diffs their contents with the existing document, and
# deletes the .swp file if the contents are the same.
#
# Passing a first argument of "all" will go ahead and remove all
# recovery files.
#
# The search is currently conducted recursively from the user's current
# working directory.
#

# File used to store temporary contents of the recovery file.
TMPFILE=/tmp/swptest

all=0
if [[ "all" == "$1" ]]; then
  all=1
fi

rm -f $TMPFILE
for swp in `find . -name ".*.swp"`; do
  path=${swp%/*}
  swpname=${swp##*/}

  flname=${swpname#.}
  flname=${flname%.swp}

  flpath=$path/$flname

  echo "Checking $flpath"

  vim -r -e $flpath <<EOF
w! $TMPFILE
EOF

  diff $flpath $TMPFILE > /dev/null
  if [[ $? -eq 0 ]]; then
    echo "Removing $swp"
    rm -f $swp
  elif [[ $all -eq 1 ]]; then
    echo "Removing $swp"
    rm -f $swp
  fi
done

#rm -f $TMPFILE
