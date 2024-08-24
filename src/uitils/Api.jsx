export default async function api(url) {
    const res = await fetch(url)
    const data = await res.json()
    

    return data
}
