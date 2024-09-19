import { d as defineEventHandler, r as readBody } from '../../../_/index.mjs';
import axios from 'axios';
import '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';

const _itemId_ = defineEventHandler(async (event) => {
  const itemId = parseInt(event.context.params.itemId);
  const body = await readBody(event);
  const cookies = body.cookies;
  try {
    const res = await axios.get(`https://affiliate.shopee.co.id/api/v3/offer/product?item_id=${itemId}`, {
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.8",
        "af-ac-enc-dat": "1d44b54cc2f9a890",
        // "af-ac-enc-sz-token": "83Y6c+igyZ9RoMwQhCkL5g==|J85QxP0BF+gKIrlqwwhai4pp0G/DMOPhVxyphi2YOFSlOYHszhOHpj5mQLw/iO/ih0mT4oCyZQQeYs0=|rspn2ZmmxzHWtlqX|08|3",
        "af-ac-enc-sz-token": null,
        "affiliate-program-type": "1",
        "csrf-token": "wLg1JmOd-9bGWrdYdB1Ha6jic9Jin98rOI04",
        "priority": "u=1, i",
        "sec-ch-ua": '"Chromium";v="128", "Not;A=Brand";v="24", "Brave";v="128"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1",
        "x-sap-ri": "cb05cf665e254b81c398df3503013f4f8bf228a4b30dc20bf7f1",
        // "x-sap-sec": "F4sLi2g+/Ugd6Ugd7eg76U8d7egd6U8d6Ugc6Ugd0U8d6W8c6Ug+6Ugd69ktW3Md6Uj963gdlUZd6n1zBDw9R/bmRHgJzL9+V5aD0rv/5gruNM5w2+FxdFufMKq5g+A2dSlYClPULa3KnftzskhmKAB0otHgfvfq9nmtDBt85f7MLQPG+sQWir29ZblTawGjNxs4NQ8avuUHYzNqTJ6U63pi25fLqRsjXBL1nXmk2D0dsV6XipWsyZgg3PhgFl0SK7AxoKRypvoi94Zcw96/svsU8pRfstFmpvz4F0du6SWI1zvWBXXVPUfbLbaJk8EIoPGEqQV47scPARmHL6rpWqXUZYw+cLXWNUtLfw/etk9GyTJJJCd5YOI4w/L829RoTVTZJBQ7W3d1LWcaQUGrX/0MSMN92awSAY3uZbMgABOpq7SUEkhld6EZUq8LnwzhPPfYyBhxn6TC+YKDMi6yq9Gk8118jLeFCaEDu5uuzKm1ccUt8PrJMue7SN7NYPDskqR/qZGZKXPhKRPVQuK5/AtV3y5fx2slrpEeBrpLuR+VSIJvdoSEMeAdRwqPgmy4ZRhHnfUvMAXFGcXKa+ysclcAhGX8HeZCuqyARxchqd9rNaD8CjZCdHFRSSGZLgNwfHXMVW5dW2nKal1l9Nm6jRiO/8bKGxl4NdDy10cKvrKwnqX+e77H9UDzjE+AH9tT+KdMW0O534UFKyUTCiiNv6ItMfEEkq78O7pL8sbmed0X14NUKP0apZNmrZpv77GyLw+5HR0xrBlsF8Zd5+JHlYPJpk2zEjVkCfXjCAECfwufC2EgXRlqNc+eNBw1oUxyNPlFiLlEbf4Cr6cGlFQp7kqM1FwnD8zp2GLv2MF4snzILu0okYUOkKuUD0pQleXAt80CD61JKXlo5T1jLw6u8Htre5/tgLFwHnmnNbnN2fO8UlFDy7A6vfQUyW0j13gDY7Yv+yWh0fHmgKujdPO9pYxvDOseobEywsrrfzMFEv2Argx/1fQ7oMDEafVEM224Q9tz2ubQXF6a+U9CsQQQsKFrRegPeqcGDkOCEGsxEzMRr61xfrOyqWFpxMLAoij5urPwDJdsM4HhX40N7CpUlm0MYGcm++q3IfeC84A+PKsJiQF68zE9ttdWc9ccTAC8+TuG/DYwNJexkcqX0f/XUAQRUoATKdAtN7Uo1RFmW69melV8V0OaXZbylOMpvL+/XU18BJxnFIBBN+ofD9qkQ8A2UFOJkXOOTIljTWxIC9R5xm+pY355CPQnY4R1RVrpbXHg6ZXoqVCmkAPx9h9fbZeNQ5YYUUhYRYwwwmIS7rs89ymM12c76UgdNpDj41ZF4SZd6Ugdv9StW3Md6Ugo6Ugd0Ugd6TnVs3+PkGZynLpmTN3ydbio2MAm3Ugd61liNaWz5SBi6Ugd6UMd/Ug76U8d3Ugd6UMd6Ugo6Ugd0Ugd6TCHS5BUKZEBBPhZpgdWI8Sa103U3Ugd61xf+7t857gF6Ugd6n==",
        "x-sz-sdk-version": "1.10.15",
        "cookie": cookies,
        // "Referer": `https://affiliate.shopee.co.id/offer/product_offer/${itemId}?trace=%7B%22trace_id%22%3A%220.aAHrNPaPHT.100%22%2C%22list_type%22%3A100%2C%22exp_group_ids%22%3A%5B304202%2C66644%2C300293%2C357111%5D%2C%22root_trace_id%22%3A%220.aAHrNPaPHT.100%22%2C%22root_list_type%22%3A100%7D`,
        "Referer": `https://affiliate.shopee.co.id/offer/product_offer/${itemId}`,
        "Referrer-Policy": "strict-origin-when-cross-origin"
      }
    });
    return res.data;
  } catch (error) {
    return error;
  }
});

export { _itemId_ as default };
//# sourceMappingURL=_itemId_.mjs.map
