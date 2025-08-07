async function makeAsyncRequest() {
    const url = 'https://procodrr.vercel.app/?sleep=5000';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}

makeAsyncRequest()

function sum() {
    return 5 + 5;
}

console.log(sum())