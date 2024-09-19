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

const login = defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();
  const pb = new PocketBase(runtimeConfig.public.MASTER_DB);
  const body = await readBody(event);
  const email = body.email;
  const password = body.password;
  try {
    const user = await pb.collection("users").authWithPassword(email, password);
    return user;
  } catch (error) {
    return false;
  }
});

export { login as default };
//# sourceMappingURL=login.mjs.map
