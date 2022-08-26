const Index = () => {
  return (
    <>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="stylesheet" href="style.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Oswald"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat"
        rel="stylesheet"
      />
      <title>Hello, world!</title>
      {/* navbar */}
      <div className="navbar">
        <div className="menu1">HOME</div>
        <div className="menu2">ABOUT ME</div>
        <div className="menu3">GALLERY</div>
      </div>
      {/* header */}
      <div className="header">
        <div className="profile-photo">
          <img
            src="img/kucing1.png"
            alt="catphoto"
            style={{ maxWidth: "70%" }}
          />
        </div>
        <div className="introducing">
          <div />
          <div className="greeting">
            <h1>HELLO!</h1>
          </div>
          <div className="name">
            <h2>
              I'm Wibi Hanif Wibowo,
              <br />a Web Developer Wanna Be
            </h2>
          </div>
          <div className="more-about">
            <button>Let's Get To Know Me!</button>
          </div>
          <div />
        </div>
      </div>
      {/* profile title */}
      <div className="profile-title">
        <h1>ABOUT ME</h1>
        <p>Currently Studying Full Stack Web Development</p>
      </div>
      {/* profile description*/}
      <div className="profile-description">
        <div className="brief-desc">
          I'm a geography graduate from University of Indonesia who aspires to
          do a career shifting in the field of web development.
        </div>
        <div className="cat-img">
          <img src="img/sleepingcat.png" alt="" width="100%" />
        </div>
        <div className="detail">
          <h3>DETAIL</h3>
          <h4>
            <b>Name:</b>
          </h4>
          <p>Wibi Hanif Wibowo</p>
          <h4>
            <b>Age:</b>
          </h4>
          <p>18</p>
          <h4>
            <b>Location:</b>
          </h4>
          <p>Tangerang, Indonesia</p>
        </div>
      </div>
      {/* galeri head*/}
      <div className="gallery-head">
        <h1>GALLERY</h1>
        <p>Here It Is My Gallery!</p>
      </div>
      {/* galeri */}
      <div className="gallery">
        <div className="row1">
          <div>
            <img src="img/cat1.webp" alt="" width="100%" height="100%" />
          </div>
          <div>
            <img src="img/cat2.png" alt="" width="100%" height="100%" />
          </div>
          <div>
            <img src="img/cat3.webp" alt="" width="100%" height="100%" />
          </div>
        </div>
      </div>
      export default
    </>
  );
};

export default Index;
