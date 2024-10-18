function SplashScreen() {
  return (
    <div
      id="splash-screen"
      style={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}
    >
      <img
        width="80px"
        height="80px"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '-40px 0 0 -40px',
        }}
        src="/src/assets/images/instagram-logo.png"
      />
      {/* <span style="position:absolute;bottom:32px;left:50%;margin:-36px 0 0 -36px;"></span> */}
    </div>
  );
}

export default SplashScreen;
