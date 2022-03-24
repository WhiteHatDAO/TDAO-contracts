import axios from "axios";

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export function readTextFile(file) {
  var allText = "";
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}

export async function getAuthorData(params) {
  const server = "http://localhost:4000";
  try {
    const res = await axios.get(server + "/api/authors", { params });
    if (res.data.success) {
      return res.data.data[0];
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }

  return null;
}

export function strcmp(a, b) {
  a = a.toString();
  b = b.toString();
  let i;
  let n = Math.max(a.length, b.length);
  for (i = 0; i < n && a.charAt(i) === b.charAt(i); ++i);
  if (i === n) return 0;
  return a.charAt(i) > b.charAt(i) ? -1 : 1;
}