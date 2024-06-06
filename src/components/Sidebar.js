function getImageOrDefaultURL(imageUrl) {
    const defaultImage = "https://via.placeholder.com/32x32.png"
    try {
        new URL(imageUrl);
        return imageUrl;
    } catch (e) {
        return defaultImage;
    }
}

export default function Sidebar({user: {id, name, image}}) {
    return (
        <div className={"col-3 p-3 bg-light vh-100 overflow-scroll"}>
            <p>
                Benvenuto {name} ({id})!
                <img src={getImageOrDefaultURL(image)} width="32" height="32" alt="profile picture"/>
            </p>
        </div>
    );
}