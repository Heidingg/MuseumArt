function MyComponent() {
    const [imageSrc, setImageSrc] = useState('/background.jpeg');
  
    useEffect(() => {
      const myDiv = document.getElementById('myDiv');
      myDiv.style.backgroundImage = `url("${imageSrc}")`;
      myDiv.style.backgroundSize = 'cover';
    }, [imageSrc]);
  
    return (
      <div id="myDiv">
        {/* Your component content here */}
      </div>
    );
  }
  