const ImageComp = ({ image, alt = "image", width, height, styles = "" }) => {
  return (
    <img
      src={image}
      alt={alt}
      width={width}
      height={height}
      className={styles}
    />
  );
};

export default ImageComp;
