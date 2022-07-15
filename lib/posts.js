export async function loadPosts() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://directus.app.nutramax.com/items/cosequin_blog?access_token=cadmus')
    const data = await res.json()
  
    return data
  }

export async function laodBlogData(slug){
  const res = await fetch(`https://directus.app.nutramax.com/items/cosequin_blog?access_token=cadmus&slug=${slug}`)
  const data = await res.json()

  return data
}