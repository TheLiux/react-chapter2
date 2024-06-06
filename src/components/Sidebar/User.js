const defaultImage = "https://via.placeholder.com/32x32.png"

function getImageOrDefaultURL(imageUrl) {
    try {
        new URL(imageUrl);
        return imageUrl;
    } catch (e) {
        return defaultImage;
    }
}

export default function User({name, image}) {
    return (
        <div className="d-flex align-items-center text-black text-decoration-none py-1">
            <img
                src={getImageOrDefaultURL(image)}
                width="32"
                height="32"
                className="rounded-circle me-2"
                alt="profile picture"
            />
            <strong>{name}</strong>
        </div>
    )
}