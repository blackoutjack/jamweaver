
#include "jniutil.h"

void printClassName(JNIEnv *env, jobject obj) {
  // Iterate through the word and adds each symbol to the list.
  jclass objcls = env->GetObjectClass(obj);
  jclass clscls = env->FindClass("java/lang/Class");
  jmethodID clsGetName = env->GetMethodID(clscls, "getName", "()Ljava/lang/String;");
  if (clsGetName == NULL) {
    fprintf(stderr, "Can't find method %s\n", "Class.getName");
  }

  env->ExceptionClear();
  jstring clsstr = (jstring)env->CallObjectMethod(objcls, clsGetName);
  jboolean iscopy;
  const char *clscstr = env->GetStringUTFChars(clsstr, &iscopy);
}

jmethodID getMethodId(JNIEnv *env, jobject obj, const char *mname, const char *msig) {
  jclass cls = env->GetObjectClass(obj);
  return getMethodId(env, cls, mname, msig);
}

jmethodID getMethodId(JNIEnv *env, jclass cls, const char *mname, const char *msig) {
  jmethodID mid = env->GetMethodID(cls, mname, msig);
  if (mid == NULL) {
    fprintf(stderr, "Can't find method %s\n", mname);
    return NULL;
  }

  return mid;
}
