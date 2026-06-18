import MediaCard from "../components/MediaCard"

function Home() {
    const media = [
        {id: "1", title: "Bladerunner", releaseDate: "1982"},
        {id: "2", title: "Red Dead Redemption 2", releaseDate: "2018"}
    ]

    return (
        <div className="home">
            <div className="media-grid">
                {media.map(m => 
                <MediaCard key={m.id} mediaData={{title: m.title, releaseDate: m.releaseDate}}>
                </MediaCard>)}
            </div>
        </div>
    )
}

export default Home;