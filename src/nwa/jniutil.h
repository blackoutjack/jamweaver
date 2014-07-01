
#ifndef JAM_NWA_JNIUTIL_H
#define JAM_NWA_JNIUTIL_H

#include <jni.h>

void printClassName(JNIEnv *env, jobject obj);
jmethodID getMethodId(JNIEnv *env, jobject obj, const char *mname, const char *msig);
jmethodID getMethodId(JNIEnv *env, jclass cls, const char *mname, const char *msig);

#endif
