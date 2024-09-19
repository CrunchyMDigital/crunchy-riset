import { d as defineEventHandler, r as readBody } from '../../../_/index.mjs';
import PocketBase from 'pocketbase';
import { u as useRuntimeConfig } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';

const checkLogin = defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const pb = new PocketBase(runtimeConfig.public.MASTER_DB);
  const body = await readBody(event);
  body.token;
  if (pb.authStore.isValid) {
    return pb.authStore.model;
  }
  return { isLogin: false };
});

export { checkLogin as default };
//# sourceMappingURL=checkLogin.mjs.map
