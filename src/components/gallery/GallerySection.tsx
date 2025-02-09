import Image from "next/image";
import "../../styles/home.scss";

const GallerySection = () => {
    return <>
        <section className="gallery-section">
            <h1>Gallery</h1>

            <div className="images">
                <Image
                    src={"/images/gallery/devankar.jpg"}
                    alt="image"
                    width={1000}
                    height={1000}
                />
                <Image
                    src={"/images/gallery/team1.png"}
                    alt="image"
                    width={1000}
                    height={1000}
                />
                <Image
                    src={"/images/gallery/team2.png"}
                    alt="image"
                    width={1000}
                    height={1000}
                />
            </div>
        </section>
    </>
}

export default GallerySection;