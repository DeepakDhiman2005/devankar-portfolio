import "../../styles/home.scss";

const GallerySection = () => {
    return <>
        <section className="gallery-section">
            <h1>Gallery</h1>

            <div className="images">
                <img src="/images/gallery/devankar.jpg" alt="image" className="w-full h-full" />
                <img src="/images/gallery/team1.png" alt="image" />
                <img src="/images/gallery/team2.jpg" alt="image" />
            </div>
        </section>
    </>
}

export default GallerySection;