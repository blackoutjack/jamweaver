import os

ORIGDIR = 'closure-orig'
DEVDIR = 'closure'
PATCHDIR = os.path.join('patch', 'closure')
EXCLUSIONS = [
  'build',
  '.git',
  '*.xml',
  '*.properties',
  '_virtualenv',
  'confdefs.h',
  '*.pytmp',
  'obj-*',
  'dist',
  '*.pyc',
  '*.jar',
  '.hg*',
  '*.so',
  'configure',
  'configure.in',
  '*.a',
  'Linux_All_DBG.OBJ',
  '*.o',
  'obj-debug',
  'obj-release',
  '*.swp',
  '*.swo',
  'ipc',
  'TestDeadlockDetector*',
  'test_deadlock_detector',
  'idl-parser',
  '.mozconfig*',
  '.project',
  'jprof-log',
  'imacros.c.out*',
  'build-debug',
  'PKG-INFO',
  'mozbase',
  'python',
  'mozinfo.json',
  'media_webrtc_trunk_common.mk',
  'media_webrtc_trunk_testing_common.mk',
]


