
function MediaCard({mediaData}) {
    return (
        <div className="media-card">
            <div className="media-img">
                <img src="" alt="" />
                <div>
                    <button className="favorite-btn">
                        {/* Find a star icon*/}
                        star
                    </button>
                </div>
            </div>
            <div className="media-info">
                {/* title of media, description, etc*/}
            </div>
        </div>
    )
}

export default MediaCard