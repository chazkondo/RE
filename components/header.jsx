import React from 'react';

// Video
import { Divider } from '../helpers/divider.jsx';
import HeaderContent from './headercontent.jsx';

// const HeaderContent = React.lazy(() => import("./HeaderContent"))

import Spinner from 'react-spinkit';
import Loading from './helpers/loading.jsx';

function IndexHeader({ size }) {
  const [backgroundOpacity, setBackgroundOpacity] = React.useState(0.94);
  const [groundZeroOpacity, setGroundZeroOpacity] = React.useState(1);
  const [loaded, setLoaded] = React.useState(false);

  // const [mybackground, setMybackground] = React.useState(
  //     `url(${zenBackground})`
  // )

  // React.useLayoutEffect(() => {
  //     setMybackground(`url(${zenBackground})`)
  // })

  return (
    <>
      <Loading loaded={loaded} backgroundDark={backgroundDark} />
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 3,
        }}
      />
      <div
        className="page-header section-dark"
        style={{ background: 'rgba(255, 255, 255, 1)' }}
      >
        <div
          className="page-header"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            // background: "white",
            opacity: groundZeroOpacity,
            transition: 'opacity 0.5s linear',
          }}
        />
        {!loaded && (
          <div style={{ position: 'absolute', zIndex: 4 }}>
            <Spinner
              className="loadingAnimation"
              color="white"
              name="cube-grid"
            />
          </div>
        )}
        <Image
          // style={{ zIndex: -1 }}
          src="/hawaii2.jpg"
          alt="hawaii"
          width="1920"
          height="1080"
          objectFit="cover"
        />
        {/* <div
                    className="page-header section-dark"
                    style={{
                        position: "absolute",
                        backgroundImage: mybackground,
                        backgroundColor: "rgba(255,255,255,1)",
                        opacity: backgroundOpacity,
                        transition: "opacity 3s linear",
                    }}
                ></div> */}
        <div className={backgroundDark ? 'filter' : 'filterLight'} />

        <div className="content-center">
          {/* <React.Suspense fallback={<div></div>}> */}
          <HeaderContent
            size={size}
            loaded={loaded}
            backgroundDark={backgroundDark}
            backgroundOpacity={backgroundOpacity}
            setBackgroundOpacity={setBackgroundOpacity}
            setGroundZeroOpacity={setGroundZeroOpacity}
          />
          {/* </React.Suspense> */}
        </div>

        <Divider />
      </div>
    </>
  );
}

export default IndexHeader;
