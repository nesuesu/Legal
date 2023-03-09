
const Flowers = () => {

    const flowers = [
        {
          "name": "rose",
          "image": "https://thumbs.dreamstime.com/b/red-rose-4590099.jpg",
          "color": "red",
          "likeit": true,
          "id": "65dfs1g"
        },
        {
          "name": "sunflower",
          "image": "https://media.istockphoto.com/id/174648035/photo/sunflower-isolated.jpg?s=612x612&w=0&k=20&c=wMNfxWPw4Zwphpazd6vH_YtJVZnSyep_uPRU9l5kRJI=",
          "color": "yellow",
          "likeit": true,
          "id": "65dfs1h"
        },
        {
          "name": "iris",
          "image": "https://img.freepik.com/free-photo/side-view-dark-purple-color-iris-flower-isolated-white-background_141793-8059.jpg?w=2000",
          "color": "violet",
          "likeit": true,
          "id": "65dfs1j"
        },
        {
          "name": "lotus",
          "image": "https://img.freepik.com/premium-photo/lotus-flower-white-background_62678-128.jpg?w=2000",
          "color": "pink",
          "likeit": true,
          "id": "65dfs1k"
        },
        {
          "name": "periwinkle",
          "image": "https://thumbs.dreamstime.com/b/periwinkle-flower-isolated-white-background-113323550.jpg",
          "color": "violet",
          "likeit": true,
          "id": "65dfs1l"
        },
        {
          "name": "jasmine",
          "image": "https://media.istockphoto.com/id/1134069126/photo/branch-of-jasmines-flowers-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=rndtTqNVRKKjJkgIBdgvQ2pRwIsn2awjCcNwFYdnSG4=",
          "color": "white",
          "likeit": true,
          "id": "65dfs1z"
        },
        {
          "name": "tulip",
          "image": "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/d/u/dutch_tulip_white_hot_dutch_tulip_stem_2.jpeg",
          "color": "white",
          "likeit": true,
          "id": "65dfs1x"
        }
      ]

    return (
        <div className="flowers">
            {flowers.map(flower =>
                <div>
                    <h3 style={{textAlign:'center', color:'black'}}>{flower.name}</h3>
                    <img src={flower.image} alt="flower" />
                    <p style={{textAlign:'center'}}>color: {flower.color}</p>
                </div>
            )}
        </div>
    )
}

export default Flowers;