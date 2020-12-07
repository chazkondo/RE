import React from 'react';
import 'antd/dist/antd.css';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios';
import Navigation from '@/components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';

import useWindowSize from '@/components/helpers/useWindowSize';

// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function Home() {
  const size = useWindowSize();

  const [listData, setListData] = React.useState([]);
  const [itemPerPage, setItemPerPage] = React.useState(10);
  const [isLandingPage, setLandingPage] = React.useState(1);

  const [island, selectIsland] = React.useState(null);
  const [kauai, setKauai] = React.useState(null);
  const [molokai, setMolokai] = React.useState(null);
  const [hawaii, setHawaii] = React.useState(null);

  function parseAddress(address) {
    return address.replace(/\s/g, '');
  }

  function changeIsland(island) {
    switch (island) {
      case 'Kauai':
        setLandingPage(0);
        selectIsland(island);
        setListData(kauai);
        // code block
        break;
      case 'Molokai':
        setLandingPage(0);
        selectIsland(island);
        setListData(molokai);
        break;
      default:
        console.log(' default case hit');
        selectIsland(island);
        setListData(hawaii);
    }
  }

  React.useEffect(() => {
    axios
      .get(
        'https://api.apify.com/v2/acts/petr_cermak~zillow-api-scraper/runs/last/dataset/items?token=93P4WX9SLPyyLoghYYNrEq4bk'
      )
      .then(function (response) {
        setHawaii(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        'https://api.apify.com/v2/acts/79bSY5cS1wByTBdPY/runs/last/dataset/items?token=93P4WX9SLPyyLoghYYNrEq4bk'
      )
      .then(function (response) {
        setKauai(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        'https://api.apify.com/v2/acts/c8Hap4354gNvRHo5C/runs/last/dataset/items?token=93P4WX9SLPyyLoghYYNrEq4bk'
      )
      .then(function (response) {
        setMolokai(response.data);
        console.log(response.data, 'molokai');
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navigation
        isLandingPage={isLandingPage}
        island={island}
        selectIsland={selectIsland}
        changeIsland={changeIsland}
      />
      {!island && (
        <div
          style={{
            opacity: 0.85,
            position: 'relative',
            // paddingTop: "20px",
            // display: "flex",
            // width: "800px",
          }}
        >
          <h1
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: 1,
              transform: 'translate(-50%, -50%)',
              fontSize: '60px',
              color: 'white',
            }}
          >
            Hero Text Here
          </h1>
          <div style={{ width: '100%', height: '100%', background: 'black' }}>
            <Image
              className="headerImage"
              src="/hawaii2.jpg"
              alt="hawaii"
              width="1920"
              height="1080"
              objectFit="cover"
            />
          </div>
        </div>
      )}
      <div>
        {island && (
          <List
            // style={{ paddingTop: "20px" }}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page, pageSize) => {
                setItemPerPage(pageSize);
              },
              pageSize: itemPerPage,
            }}
            dataSource={listData}
            renderItem={(item) => (
              <Link
                href="/"
                as={`/realestate/${island.toLowerCase()}/${parseAddress(
                  item.address.streetAddress
                )}`}
              >
                <List.Item
                  key={item.address.streetAddress}
                  // actions={[
                  //   <IconText
                  //     icon={StarOutlined}
                  //     text="156"
                  //     key="list-vertical-star-o"
                  //   />,
                  //   <IconText
                  //     icon={LikeOutlined}
                  //     text="156"
                  //     key="list-vertical-like-o"
                  //   />,
                  //   <IconText
                  //     icon={MessageOutlined}
                  //     text="2"
                  //     key="list-vertical-message"
                  //   />,
                  // ]}
                  extra={
                    <img
                      width={272}
                      alt="logo"
                      src={item.photos[item.photos.length - 1]}
                    />
                  }
                >
                  <List.Item.Meta
                    title={
                      <a href={'https://ant.design'}>
                        {item.address.streetAddress}
                      </a>
                    }
                    description={item.city}
                  />
                  {item.description}
                </List.Item>
              </Link>
            )}
          />
        )}
      </div>
    </>
  );
}
