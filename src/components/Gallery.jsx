import data from "../data";
import ImageCard from "./Imagecard";

function Gallery() {
  return (
    <div className="gallery">
      {data.map((item) => (
        <ImageCard
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
export default Gallery;