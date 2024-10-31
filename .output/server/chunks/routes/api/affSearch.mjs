import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '@primevue/core/base/style';
import '@primeuix/utils/object';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';

const affSearch = defineEventHandler(async (event) => {
  var _a, _b, _c, _d;
  const body = await readBody(event);
  const cookie = body.cookies;
  const kw = body.kw;
  console.log(kw);
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json, text/plain, */*");
  myHeaders.append("accept-language", "en-US,en;q=0.9,id;q=0.8,ru;q=0.7");
  myHeaders.append("affiliate-program-type", "1");
  myHeaders.append("cookie", cookie);
  myHeaders.append("priority", "u=1, i");
  myHeaders.append("referer", "https://affiliate.shopee.co.id/offer/product_offer");
  myHeaders.append("sec-ch-ua", '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"');
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"Windows"');
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36");
  myHeaders.append("x-sz-sdk-version", "1.10.15");
  console.log(kw);
  const ember = [];
  let limit = 100;
  let currentOffset = 0;
  let pageLimit = 20;
  try {
    while (currentOffset < limit) {
      console.log(`Fetch ${currentOffset}`);
      const res = await fetch(`https://affiliate.shopee.co.id/api/v3/offer/product/list?list_type=0&keyword=${kw}&sort_type=1&page_offset=${currentOffset}&page_limit=${pageLimit}&client_type=1`, {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,id;q=0.8,ru;q=0.7",
          "af-ac-enc-dat": "5c01d4616dbb3f7a",
          "af-ac-enc-sz-token": "JO8snx6tIIJuvQFINNao2g==|pGpm7vJYJ+V7TKEPbObrKJ+neieDj7Ua7EY6/d44K6gF5o/5pigyPifQjl2VTev9QSwForgVTXb/gYdOfyc=|7uNWES8tUcRLI2dB|08|3",
          "affiliate-program-type": "1",
          "csrf-token": "9ccWj7JP-ghMyAxYN419CiDmVIpdHoItUVO8",
          "priority": "u=1, i",
          "sec-ch-ua": '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-sap-ri": "bf4c2067eb5513886634913a03011dc9633fef42e5bb7dacfeca",
          "x-sap-sec": "4JGBKgAAgyAXiyAXjdAuiyzXjdAXiyzXiyAWiyAXwyzXiCzWiyAAiyAXSGs/e45XiyDAi4AX3yuXiCxlFBNBLBEFQv+hrKQSXpwcNIdWI/farN3vmlFeoFyieF4JBH1aTBUuJoTJ46/IPf55Yjiu6kIxYeFR1r9U/VYb0S0f1F4vLuq+CzmDzwDyeARTSGJYLQ+wtmWyIebU0hN7bw9+PSCfq2UAkCOvHz7u+5PNhY25s+YDlSmzGkRx2OPmrMb+5LU6zzSnW44yfgwF9z7O/Chnpom5KTqR4X04AGebap0LQC1jNpDkL454iiC11Foy8qefDjZr/5jYTQ0x+r2BUORKcw2HmWJFV6qQpoYkRqyICg4K6w5v9kZqFvRIbWTCHdMSdfzkFdXhz0SnHMEou2g4JwSoDHYlcH+VVCOGr3TSp4FqZ44H0GhpIZuKasdIA+ttbPZoKtFVLxG15lhh9wUtSb1BCGEPkHdfWwyHd4E3Bksb1MMfxRuieOKLx76CxFLlUi4z8DB5ZLV+DJJmcpbyvTsYZ3n793egSkysXKHHPSyW2Ji5eL8Fmmo7WTa9ZdS5FEEzom5uO3ck/zT3zl5RzU4PpMXd5VArL2EfFYtDmqTacwuOkmBoj+fOTT8105oARnSk9Bvqy/H/PNbPeJiRe+p7E65e1lQEtGi175SdukmLKKyf1rpbLFhW6NOZVZWZ9hbZUpxByRbprjMDXT4y0/PAmGEANZQqJJsp9MyaloBQa4iLz5CDfhAy8gdJzU7Ps3HKU+2kIexftF2bIkALtQrefzdWJhxSXDhmq5yEgXKIgyh9Sn0PySBQs5xOIG3Q2yezGm+J28DiBt6ns3TzF2yFROT7ty6LN69U5W5ed76EvRwPhVyhClrybwN2lZgZzx9O8wu8/hlY0mduJxnqbEdboJhbm37heyzEf8/lClmJOHQgCSEjWJ/MFh5w4iSYVB/NzzTpiVC7PCuRYjXZPY4aJknHG+rKyF/f5ulYuxxE+SzxUufeM+YQsOD00oHkDNSaCdwX4RRO2kigAW03bh2CzGIcYkhBksIPr/MKVyWZuI9ZXA0hi4grQpdy2tD3a0SH/3B7nbnB0SnB1lDZHrFIdv4VPYwItfQCfp99hgXFnkC8F8F/DJqNPMo1GHgfL70IOeNkl/j0dYpRliZcTg0laMHFMvVMi4Mk6MKGcL4uvD+1x/Yi+o+lfxNTcCcSD+ChHc9/dR1DTuNYqIjKKQyMfbM5Wbqnvlb9juBmEwHl/vonYXHptyw/rPAhTJSUbTAVpbWfD7HVjD5IgGrqzK4OsA8Mx55QgMYeAmrFrmwunwnTd0P/L2A3GLkJR/8uPO+tfyAXimi5aJT4umq4iyAXiYQ/eh2uiyAXmyAXizzXiyTpGWHS2vpToG5Y4rV5Qs8SWBekrd5XiyA+qWqkucAMb4AXiyAuiyRXfyAAiy5XiyAuiyAXmyAXizzXiyFxqLu1sUwLdmta87sc6mNi8JgIKT5XiyA+bmzcaJwdqTAXiyD=",
          "x-sz-sdk-version": "1.10.15",
          "cookie": "_gcl_au=1.1.640391984.1726370320; _fbp=fb.2.1726370320002.38813901619977800; _QPWSDCXHZQA=60fb247a-1957-4e73-879a-9c9780142a6c; REC7iLP4Q=3de86c54-c5c8-47e6-9271-30eb377b163c; SPC_F=2QW1ft9vp7PQ8eBxZcVhE27YamNMP8Oq; REC_T_ID=354b2769-7311-11ef-a393-d61c225786d1; SPC_CLIENTID=MlFXMWZ0OXZwN1BRbacxduaxvexbulkz; _med=refer; SPC_EC=.Rk56UVJnak45YVpNTWJTYYOQ9/z9Lx3OIzR40+FGpnh7/4NvDk/INhhlP2bHsG/H9i3bl3Ct5kGBAwFNvEnUecv/dJFtnSFJDjgNGrv2ka5s9FYtGPvRfKxyBlSwZrOkwAmf0OSV9In1jTkm9DP5cg5nAeTVlRUdwOH2HhMp2WGxgTI1tIoZ587PolI0CuWbRxiibvpeP4H8bUnDU8dx7kIT8nFXlCddvlGvxbNbhCY=; SPC_ST=.Rk56UVJnak45YVpNTWJTYYOQ9/z9Lx3OIzR40+FGpnh7/4NvDk/INhhlP2bHsG/H9i3bl3Ct5kGBAwFNvEnUecv/dJFtnSFJDjgNGrv2ka5s9FYtGPvRfKxyBlSwZrOkwAmf0OSV9In1jTkm9DP5cg5nAeTVlRUdwOH2HhMp2WGxgTI1tIoZ587PolI0CuWbRxiibvpeP4H8bUnDU8dx7kIT8nFXlCddvlGvxbNbhCY=; SPC_U=20196017; SPC_R_T_ID=xUMFfmKb9kO/hXkDFsVeJ8lCWRCIy83HiDFreV64VV3O3Mfyo6gEWWwX248+jf/y9w7E2DXBsg3saEpN03xfgOwpYwXWMDlQ6lqqujr+0yU07qTNGtmHk2dVLs27q79no1M8fXQVUlzByMXLJ4yvISmiq4n6u+rBIEb3rf/6Gfg=; SPC_R_T_IV=dkNjOU5ZbGZ4MjN3cFFhTA==; SPC_T_ID=xUMFfmKb9kO/hXkDFsVeJ8lCWRCIy83HiDFreV64VV3O3Mfyo6gEWWwX248+jf/y9w7E2DXBsg3saEpN03xfgOwpYwXWMDlQ6lqqujr+0yU07qTNGtmHk2dVLs27q79no1M8fXQVUlzByMXLJ4yvISmiq4n6u+rBIEb3rf/6Gfg=; SPC_T_IV=dkNjOU5ZbGZ4MjN3cFFhTA==; _gcl_gs=2.1.k1$i1730019179$u90825048; _med=cpc; _gac_UA-61904553-8=1.1730019186.CjwKCAjwyfe4BhAWEiwAkIL8sA_MS8-Q_tm_AcZ0NyHMjCRk61K-TorEplCDfYgD-FZgMwkwfKRv9xoCdjoQAvD_BwE; _gcl_aw=GCL.1730019186.CjwKCAjwyfe4BhAWEiwAkIL8sA_MS8-Q_tm_AcZ0NyHMjCRk61K-TorEplCDfYgD-FZgMwkwfKRv9xoCdjoQAvD_BwE; SPC_SI=YH7yZgAAAABJdWZSOEtYRiJ3DgQAAAAARHphZHNyZkE=; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.3.1173148426.1730168274; SPC_CDS_CHAT=1a27cf9e-2935-4b5d-854a-b8f7ee6705bf; language=id; _sapid=d350bab3c2025cd5c08c888d43b861433c93ff2a633a4fe7e6b45e12; _dc_gtm_UA-61904553-8=1; AC_CERT_D=U2FsdGVkX1/p188kJUXKJWAfg0jIyuKF/tRJTI2CGf0BB0TXnS53N0YP3jwK+trDnVGHo/ejF+lbBQWBBcEwuX55bNttw/jKcdckvwXog5w7N8GzBE0CBgo8U6vTm7GKj67Kn+yxujFQpn4vkSGqQIT8auGVcwlSj36eFMBI3d/xjBD5i46gsJ9Qv423Z20kTg8jJsoh0SEkHigbbp6k3Xd5vifmMZVbfNdmxqfzK2rrt5frdIZs7g/MaVK0GaktR0jK4zbLGEng/5il0bpYh5dSxvXRiYU3UNva0XtAO9FQ4MVDHRubsPry+qLacKJz75MuuLCo65Gn22BGX+lIh1Ze5Y7/JeAasu15pIbW0M2BEebCLU3TSV9yyusz6zPk7Y7dOEj+S+3JeJthvWEpBhcOCCvKwcuydcAsWkInO0eUf0tfwtqkVVe7u6ot1tbPtdXvZ/fIBtk5cOJw16MkFC/xy9gH2BvjjRbTYdhl6/WV3gHoyucc8xmi51agigUgnnyH+9GK3UVLcSsW1TB0wC+18U7H5swsEfgb2+DiTqCAHTdcTl23iLHf1V7vuFGnhENnBSl+tBWBj7LWlAK2CAfG46pAViRnLeJjOB/zQHd8VVg+WW01zX6pJO5eCj6pS9Dwr+UOnA0JBnvpVKhOWcEu/Wll/s3Bsk92akphUiCRzXqAIzkhqDMXuFE9zqTW9SKiwxU6eiOwrzaMkzi033+tAHvR8QY7YW/vrsGjt3G+Mp+Wwl091aIP5or8ktHJtKGaxV+m59E3BeT9cJbv1tQ6Ad3u04avNg7mQPDwHB4BHSGRE04lDN17zwGvuv8cKsIYB7I7o3FEFuAMy2K82k6Ahe7h5I2mr451bfbXvOyBVd27ZlHVc77xcObJ7LPsw57S5E6gHVFQeXXJdfCQuU5EV0CZPYliW97z8wz6pDtjoL51ssbcz+DIwfE14OQJSauZm7rFr3hTIqRTgkLQQDoMV1evfm6HG2aVopdF8VOpAyaajGu7wWIXXvbLW29DzqwtdRH0+7cE/FAC/Fx4O1iz5gjDzvLObRFZMz+h9lTrjCxmZi1zaBqK7TwYcYzDlhXqIThIDzIs2aBdBc3FWg==; _ga=GA1.3.1454051936.1726370320; _ga_SW6D8G0HXK=GS1.1.1730168273.136.1.1730170037.23.0.0; shopee_webUnique_ccd=JSNQ3IshJ3C0mB5hVuXXmw%3D%3D%7CoGpm7vJYJ%2BV7TKEPbObrKJ%2BneieDj7Ua7EY6%2FSu1K6gF5o%2F5pigyPifQjl2VTev9QSwForgVTXb%2Fg4dOfyc%3D%7C7uNWES8tUcRLI2dB%7C08%7C3; ds=b11dd027dc9945eb2a01cfcb597e6e07",
          "Referer": "https://affiliate.shopee.co.id/offer/product_offer",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      }).then(async (response) => {
        const x = await response.json();
        console.log(x);
        return x;
      });
      if (res.data) {
        limit = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.total_count;
        currentOffset = currentOffset + 50;
        for (let index = 0; index < ((_c = (_b = res.data) == null ? void 0 : _b.list) == null ? void 0 : _c.length); index++) {
          const element = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.list[index];
          ember.push(element);
        }
      } else {
        currentOffset = currentOffset + 50;
      }
    }
    return ember;
  } catch (error) {
    return error;
  }
  return ember;
});

export { affSearch as default };
//# sourceMappingURL=affSearch.mjs.map
