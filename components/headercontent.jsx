import React from 'react';

// Animation
import { motion } from 'framer-motion';

// reactstrap components
import { Container } from 'reactstrap';

export default function HeaderContent({
  loaded,
  size,
  backgroundOpacity,
  setBackgroundOpacity,
  pressPlay,
  setGroundZeroOpacity,
}) {
  const [opacity, setOpacity] = React.useState(1);
  const [subtext1, setSubtext1] = React.useState(0);
  const [subtext2, setSubtext2] = React.useState(0);

  const variants = {
    hidden: {
      width: '0px',
      height: size.width < 767 ? '35px' : '57px',
    },
    visible: {
      width: size.width < 767 ? '200px' : '330px',
      height: size.width < 767 ? '35px' : '57px',
      rotate: 0,
      transition: { delay: 0, duration: 1.5, ease: `easeInOut` },
    },
    initial: {
      y: size.width < 511 ? 0 : 100,
    },
    animated: {
      y: 0,
      transition: { ease: 'easeOut', duration: 0.6 },
    },
  };

  // Header Subtext Delay
  React.useEffect(() => {
    let timeout1;
    let timeout2;

    if (loaded) {
      timeout1 = setTimeout(() => setSubtext1(1), 1000);
      timeout2 = setTimeout(() => setSubtext2(1), 2000);
    }

    return () => {
      clearTimeout(timeout1);
      return clearTimeout(timeout2);
    };
  }, [loaded]);

  React.useEffect(() => {
    let startTimeout;
    const startTransition = () => {
      setOpacity(0.3);
      setBackgroundOpacity(0);
      setGroundZeroOpacity(0);
      setSubtext1(0);
      setSubtext2(0);
    };

    const init = () => {
      pressPlay(true);
      // startTimeout = setTimeout(() => startTransition(), 2000)
    };

    const initTimeout = setTimeout(() => init(), 20000);

    return () => {
      clearTimeout(startTimeout);
      return clearTimeout(initTimeout);
    };
  }, [pressPlay]);

  return (
    <Container>
      <motion.div
        initial="initial"
        animate={loaded ? 'animated' : null}
        className="title-brand"
        variants={variants}
        style={{
          position: 'relative',
          // top: 100,
          opacity: opacity,
          transition: 'opacity 1500ms 1500ms',
        }}
      >
        <h1 className="presentation-title">
          {size.width < 511
            ? `Clutter Free Hawai'i`
            : loaded && `Clutter Free Hawai'i`}
        </h1>
        {loaded && (
          <motion.span
            className="headerSpan"
            variants={variants}
            initial="hidden"
            animate="visible"
            style={{
              opacity: backgroundOpacity,
              zIndex: '-1',
              position: 'absolute',
              left: '73px',
              bottom: '10px',
              display: 'block',
              background: 'rgba(16, 21, 16, 0.7)',
              display: 'block',
              borderRadius: '1px',
              margin: '0 auto',
              right: '10px',
              transition: 'opacity 1s linear',
              width: '330px',
              height: '57px',
            }}
          />
        )}
      </motion.div>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            display: `grid`,
            gridTemplateColumns: `1fr`,
            gridTemplateRows: `1fr`,
            gridTemplateAreas: `'overlap'`,
            margin: 0,
            gridGap: 0,
            padding: 0,
          }}
        >
          <h2
            className="overlap2 presentation-subtitle text-center"
            style={{
              opacity: subtext1,
              transition: 'opacity 1s ease-out',
            }}
          >
            {size.width < 511
              ? `Simply${'\u00A0'}`
              : loaded && `Simply${'\u00A0'}`}
          </h2>
          <h2
            className="overlap2 presentation-subtitle2 text-center"
            style={{
              opacity: subtext1,
              transition: 'opacity 2s ease-out',
            }}
          >
            {loaded && `Simply${'\u00A0'}`}
          </h2>
          <h2
            className="overlap2 presentation-subtitle3 text-center"
            style={{
              opacity: subtext1,
              transition: 'opacity 3s ease-out',
            }}
          >
            {loaded && `Simply${'\u00A0'}`}
          </h2>
        </span>
        <span
          style={{
            display: `grid`,
            gridTemplateColumns: `1fr`,
            gridTemplateRows: `1fr`,
            gridTemplateAreas: `'overlap'`,
            margin: 0,
            gridGap: 0,
            padding: 0,
          }}
        >
          <h2
            className="overlap2 presentation-subtitle text-center"
            style={{
              opacity: subtext2,
              transition: 'opacity 1s ease-out',
            }}
          >
            {size.width < 511 ? `Together.` : loaded && `Together.`}
          </h2>
          <h2
            className="overlap2 presentation-subtitle2 text-center"
            style={{
              opacity: subtext2,
              transition: 'opacity 2s ease-out',
            }}
          >
            {loaded && `Together.`}
          </h2>
          <h2
            className="overlap2 presentation-subtitle3 text-center"
            style={{
              opacity: subtext2,
              transition: 'opacity 3s ease-out',
            }}
          >
            {loaded && `Together.`}
          </h2>
        </span>
      </ul>
    </Container>
  );
}
