export const env = {
  url: 'http://127.0.0.1:1337/',
};

export class GetHeader implements RequestInit {
  // cache: 'default',
 headers: {
  Origin: '*'
 };
 method: 'GET';
 mode: 'cors'
}

export class GeneralHeader implements RequestInit {
 headers: {
  Origin: '*'
 };
 method: 'GET';
 mode: 'cors';
 body: '';

 constructor(method, body) {
   if (typeof method !== 'undefined') {
     this.method = method;
   }
   if (typeof body !== 'undefined') {
     this.body = body;
   }
 }
}

export function GenerateFormHeader(that: HTMLFormElement) {
  const group_element = that.getElementsByTagName('input');
  let body = [].reduce.call(group_element, (acc, val, index) => {
    if (index === 1) {
      const tmp = new Object();
      tmp[acc.name] = acc.value;
      acc = tmp;
    }
    if (typeof val.name !== 'undefined' && val.type !== 'submit' && val.value !== '') {
      acc[val.name] = val.value;
    }
    return acc;
  });
  body = JSON.stringify(body);
  return new GeneralHeader(that.method, body);
}
