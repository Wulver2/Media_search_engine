
function MediaCard({mediaData}) {
    return (
        <div className="media-card">
            <div className="media-img">
                <img src="" alt={mediaData.title} />
                <div>
                    <button className="favorite-btn">
                        {/* Find a star icon*/}
                        star
                    </button>
                </div>
            </div>
            <div className="media-info">
                {/* title of media, description, etc*/}
                <h3>{mediaData.title}</h3>
                <p>{mediaData.releaseDate}</p>
            </div>
        </div>
    )
}

export default MediaCard