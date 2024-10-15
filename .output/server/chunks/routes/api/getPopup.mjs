import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import axios from 'axios';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';

const getPopup = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = body.cookies;
  const paramx = body.params;
  const url = "https://shopee.co.id/api/v4/pdp/get_pc";
  const params = paramx;
  const headers = {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "af-ac-enc-dat": "4fd19d7bc724d69f",
    "af-ac-enc-sz-token": "JmvsNWnNnFxG8xTCqZZaiQ==|/m96Wk+nhd4ovz5zbsBzDuz/mKbYXso3l9Sm0rz7vAn/Z4R3WrBt9bz2xnbiMN5WwtO0pzoJvepXeA8=|/UqSmcNoeHymUZlD|08|3",
    "content-type": "application/json",
    "d-nonptcha-sync": "AAAGvDcRSaIAAAA=",
    "priority": "u=1, i",
    "sec-ch-ua": '"Chromium";v="128", "Not;A=Brand";v="24", "Brave";v="128"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-api-source": "pc",
    "x-csrftoken": "dURnPogNxm9vfAcGemVdw8XbuUp4mCFI",
    "x-requested-with": "XMLHttpRequest",
    "x-sap-ri": "ea3fd06691dd17fea048873f040151326550106a9afacf2efb5c",
    "x-sap-sec": "eg7h4t0swKuFUL1LvME3v/1LiMHLvMSLw8SLv/SLkMHPvNSLF8ELvR9L38SyvciLuMEjvNyLE8S8vQkLJMEUv/7LtgHevK7LmMScvMSLHMHMvBTLeMe2vMTLCMSAvM7LsMEJvc+LfMe/v2SL8Me6vRSLrMHmvMSLqPStvddLSMEmv31LogShvMSLTMHFv3iLOgE3vMSLSMkLvMSLyZI55ZYCup/JD8SLAYYLohzj3wRiC799JUYLvMSKoMkLvMSLUbrVsEraJMSLv01LvMSLv+oUCfEU6PSLvc2Zv8SLvMSLSjSAvRyGvgSLbMkLvMSLvBWLvMSLWMkLvMSLvchFvgSLBQS85PSLAZqcv8SLyMkLv0l3vd/3vPSLGMkLvN+kzLNyctcsWMoLvMSLw6aUv8SLtMkLv+SKvMSLvQjfKMoLvMSLYRYev8SLWMSLvc72vMSLv31lvLU6xtNvJgSLvMHeiMoLv+12vMS3vMSL3mrPhg7LvMSdxDvHUMSLv3nvj9mhvMSLij0yAqXx7S5glBGoiKy9Z09jEmMa4J/6WixWPeJZ4BoZphkLxwV5wi9Rs6yO/t3L6DWrDz09MKamnRDL0qoOLo9bh9CmLc0DSC6mH2I2lzS4dQxtmW0kDG9Zqabd4vgjc3+COqxheTBixgtdYEVI1DpcB21mmReJTLltENfcbObyukN7cPoqk/mpkl2wmnLKM3My1CeAfS+EmpEfW19ne7WuEuXLUtPxQ/ThelDhORx+M30OlirTO9CLAtV8tzir7K+KRNSHwQX3/BI32eHsUg1LvMSV9R5wWiSv8MSLvMSzvMSL9z0Yj/t69yJt1ml52ZI0nzcyDS3jQe+RRj9NPz71pTvff924ReuLXMLlZqE/ygSL9MSLvLrfqNsAXevbKRaPFbufhpE0zm6vd5FMJ/oAb4B99ZKCe9NBFqAj31esXFjVkRZ2Bv+9Z4WtyKsxvMSLvN7LvME7yfixr5CeIe19aTWAge3vEAusDHyDho8ozfYbR+F3JhHjbySLvMSLvgSLvKzuvMHTvMSLazwVfFzSzmzzZyV79dVexTprYzpfCkYDjNjl9kRSyXXzyR7UzTRX84AwfF5XZd2XAAw+lluPfAiqz+uozkHuiiNVx5yyYi6pWDNuxy7WlyTuiRzwyJwR8IN1gcitfdAyayRxfQVxxk1DjNjEfIrllFzymJVWzI2rzc6FW+VFW8S/vMSLERpstx9LvMHSvMSLJco9VUw80/vqZi1N743h00r69MFBi0MqIASRD6w8PUIDAFwqr5Uh/GayGdPty3EbLkyTiqAnK/IcjOqGNRWUJv7y1ieSzpfb34idu0Y7/0F/aFi7k5tOvB7LvMEwlBkZc+Gh2tXmCzOGtwc4IJdDygSLvMS2vMSL5c9LvM4LvMSLo8SL1MSLv+o8miHxW50tvMSLvM4LvMS7o8SLUMSLvM/k2OyMvMSLcPjFxtVPBKd3vMSLUK8Iug7LvMSDnc7I1MSLvRtIMTpOIEHNv8SLv/R5ZPSMvMSL8+oU891umi0LvMSL",
    "x-shopee-language": "id",
    "x-sz-sdk-version": "1.10.15",
    "cookie": cookie,
    // Replace with actual cookie value
    "Referer": "https://shopee.co.id/product/1216261274/26408445670",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  };
  const response = await axios.get(url, { headers, params });
  return response.data;
});

export { getPopup as default };
//# sourceMappingURL=getPopup.mjs.map
