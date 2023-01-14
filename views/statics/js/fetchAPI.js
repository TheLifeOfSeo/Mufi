/**
 * 더욱 간편하게 fetch를 할 수 있는 함수
 * @param {String} url url : fetch할 주소
 * @param {String} method method : fetch 통신 방식
 * @param {Object} body body : 전달할 데이터 객체
 * @param {Object} header header : fetch 설정값 객체
 * @returns 
 */
export default async function fetchData(url, method, body, header) {
    const options = {
        method: method,
        headers: 
        {
            // "Content-Type": "application/json",
            ...header,
        },
    };
    if (body !== undefined && (method === "POST" || method === "PUT")) options.body = body;
    console.log(url);
    console.log(method);
    console.log(body);
    const response = await fetch(url, options);
    await console.log(response)
    const data = await response.json();
    await console.log(data);
    if (response.ok) {
        return data;
    } else {
        throw Error(data);
    }
}


// async function post(host, path, body, headers = {}) {
//     const url = `https://${host}/${path}`;
//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         ...headers,
//       },
//       body: JSON.stringify(body),
//     };
//     const res = await fetch(url, options);
//     const data = await res.json();
//     if (res.ok) {
//       return data;
//     } else {
//       throw Error(data);
//     }
//   }
  
//   post("jsonplaceholder.typicode.com", "posts", {
//     title: "Test",
//     body: "I am testing!",
//     userId: 1,
//   })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));