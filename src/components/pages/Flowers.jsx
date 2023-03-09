
const Flowers = () => {

    const flowers = [
        {
          "name": "rose",
          "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcbhn3h-2915bf24-ebd9-43bf-bd0b-97eb4a2f8231.png/v1/fill/w_880,h_908,strp/red_rose_on_a_transparent_background__by_prussiaart_dcbhn3h-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvZGNiaG4zaC0yOTE1YmYyNC1lYmQ5LTQzYmYtYmQwYi05N2ViNGEyZjgyMzEucG5nIiwiaGVpZ2h0IjoiPD05MjgiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzI1ZDQ1MDE0LThjYzMtNGM5OC1iMDJjLTVhMGNmM2E1NWRkZFwvcHJ1c3NpYWFydC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.gdPslthkOYiIb7Mv24Fq2f4CAZJxmSK3lC9SiC7Db9s",
          "color": "red",
          "likeit": true,
          "id": "65dfs1g"
        },
        {
          "name": "sunflower",
          "image": "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/g/e/gerbera_daisy_sunshine_gerbera_daisy_stem_2.jpg",
          "color": "yellow",
          "likeit": true,
          "id": "65dfs1h"
        },
        {
          "name": "iris",
          "image": "https://dy1yydbfzm05w.cloudfront.net/media/catalog/product/cache/466bc07fdd9f3406dd5cbfa6621097e2/i/r/iris_blue_iris_stem_4.jpg",
          "color": "violet",
          "likeit": true,
          "id": "65dfs1j"
        },
        {
          "name": "lotus",
          "image": "https://previews.123rf.com/images/prinprince/prinprince1405/prinprince140501132/28189670-beautiful-pink-lotus-flower-isolated-on-white-background.jpg",
          "color": "pink",
          "likeit": true,
          "id": "65dfs1k"
        },
        {
          "name": "periwinkle",
          "image": "https://st2.depositphotos.com/3247525/10769/i/950/depositphotos_107695350-stock-photo-periwinkle-vinca-minor-isolated-on.jpg",
          "color": "violet",
          "likeit": true,
          "id": "65dfs1l"
        },
        {
          "name": "jasmine",
          "image": "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX12321905.jpg",
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
            {flowers.map((flower,index) =>
                <div key={index}>
                    <h3 style={{textAlign:'center', color:'black'}}>{flower.name}</h3>
                    <img src={flower.image} alt="flower" />
                    <p style={{textAlign:'center'}}>color: {flower.color}</p>
                </div>
            )}
        </div>
    )
}

export default Flowers;